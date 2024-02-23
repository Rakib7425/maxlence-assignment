/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import TableRow from "../components/TableRow";
import AddUserModel from "../components/AddUserModel";
import { getAllUsersApi } from "../constants/apiUrls";
import { BsCloudDownload, BsPlus, BsSearch } from "react-icons/bs";
import { ImArrowLeft, ImArrowRight } from "react-icons/im";

const Dashboard = () => {
	const [users, setUsers] = useState([]);
	const [filteredUsers, setFilteredUsers] = useState([]);
	const [isAddUserModelOpen, setIsAddUserModelOpen] = useState(false);
	const [needReload, setNeedReload] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const [itemPerPage, setItemPerPage] = useState(5);

	useEffect(() => {
		getAllUsers();
	}, [needReload]);

	useEffect(() => {
		filterUsers();
	}, [users, searchTerm, currentPage, needReload]);

	const getAllUsers = async () => {
		try {
			const response = await axios.get(getAllUsersApi);
			setUsers(response.data);
		} catch (error) {
			toast.error("Error fetching users");
		}
	};

	const filterUsers = () => {
		const filtered = users.filter(
			(user) =>
				user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
				user.fullName.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setFilteredUsers(filtered);
	};

	const handleSearchChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleNextPage = () => {
		setCurrentPage((prevPage) => prevPage + 1);
	};

	const handlePrevPage = () => {
		setCurrentPage((prevPage) => prevPage - 1);
	};

	const indexOfLastItem = currentPage * itemPerPage;
	const indexOfFirstItem = indexOfLastItem - itemPerPage;
	const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

	return (
		<>
			{isAddUserModelOpen && (
				<AddUserModel
					users={users}
					setUsers={setUsers}
					isAddUserModelOpen={isAddUserModelOpen}
					setIsAddUserModelOpen={setIsAddUserModelOpen}
				/>
			)}

			<main className='mt-16 px-2 md:px-3 lg:px-32 xl:px-36'>
				<div className='py-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-900 dark:border-gray-700 duration-500'>
					<div className='w-full mb-1'>
						<div className='mb-4'>
							<h1 className='text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white text-start'>
								All users
							</h1>
						</div>
						<div className='sm:flex'>
							<div className='items-center hidden mb-3 sm:flex sm:mb-0 dark:divide-gray-700'>
								<form className=''>
									<label htmlFor='users-search' className='sr-only'>
										Search
									</label>
									<div className='mt-1 lg:w-64 xl:w-96 z-10'>
										<input
											type='text'
											name='email'
											id='users-search'
											className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
											placeholder='Search for users by email or Name'
											value={searchTerm}
											onChange={handleSearchChange}
										/>
									</div>
								</form>
								<div className='flex justify-center items-center pl-0 mt-3 space-x-1 sm:pl-2 sm:mt-0'>
									<button className='flex justify-center items-center gap-2 dark:text-gray-400 rounded cursor-pointer hover:text-gray-900  dark:hover:bg-gray-700 dark:hover:text-white bg-slate-400 text-white dark:bg-gray-600 duration-200 py-2 px-5 mt-1 md:w-24'>
										<span>Search</span>
										<span>
											<BsSearch />
										</span>
									</button>
								</div>
							</div>
							<div className='flex items-center ml-auto space-x-2 sm:space-x-3'>
								<button
									type='button'
									data-modal-toggle='add-user-modal'
									className='inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
									onClick={() => setIsAddUserModelOpen(!isAddUserModelOpen)}
								>
									<span className='font-bold'>
										<BsPlus size={22} />
									</span>
									<span>Add user</span>
								</button>
								<button
									className='inline-flex gap-1 items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 disabled:cursor-not-allowed'
									disabled={true}
								>
									<span>
										<BsCloudDownload />
									</span>
									<span>Export</span>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className='flex flex-col'>
					<div className='overflow-x-auto'>
						<div className='inline-block min-w-full align-middle'>
							<div className='overflow-hidden shadow text-center'>
								<table className='min-w-full divide-y  divide-gray-200 table-fixed dark:divide-gray-600 text-center'>
									<thead className='bg-gray-100 dark:bg-gray-700 text-center mx-auto'>
										<tr className='text-center'>
											<th
												scope='col'
												className='p-4 text-xs font-medium text-center text-gray-500 uppercase dark:text-gray-400'
											>
												user id
											</th>

											<th
												scope='col'
												className='p-4 text-xs font-medium text-center text-gray-500 uppercase dark:text-gray-400'
											>
												Avatar
											</th>
											<th
												scope='col'
												className='p-4 text-xs font-medium text-center text-gray-500 uppercase dark:text-gray-400'
											>
												Name and Email
											</th>
											<th
												scope='col'
												className='p-4 text-xs font-medium text-center text-gray-500 uppercase dark:text-gray-400'
											>
												User role
											</th>
											<th
												scope='col'
												className='p-4 text-xs font-medium text-center text-gray-500 uppercase dark:text-gray-400'
											>
												Status
											</th>
											<th
												scope='col'
												className='p-4 text-xs font-medium text-center text-gray-500 uppercase dark:text-gray-400'
											>
												Actions
											</th>
										</tr>
									</thead>
									<tbody className='bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700'>
										{currentItems.map((user) => (
											<TableRow
												key={user.id}
												user={user}
												setNeedReload={setNeedReload}
											/>
										))}
									</tbody>
								</table>
								{currentItems.length < 1 && (
									<h1 className='w-full bg-transparent flex justify-center items-center text-lg dark:text-red-600 py-4 duration-500 ease-out'>
										No user found with email: {searchTerm}
									</h1>
								)}
							</div>
						</div>
					</div>
				</div>
				<div className='sticky bottom-0 right-0 items-center w-full p-4 bg-white border-t border-gray-200 sm:flex sm:justify-between dark:bg-gray-800 dark:border-gray-700'>
					<div className='flex items-center mb-4 sm:mb-0 mt-10 md:ml-[20px]'>
						<button
							onClick={handlePrevPage}
							disabled={currentPage === 1}
							className='inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:cursor-not-allowed'
						>
							<ImArrowLeft />
						</button>
						<span className='text-sm font-normal text-gray-500 dark:text-gray-400'>
							Showing{" "}
							<span className='font-semibold text-gray-900 dark:text-white'>
								{indexOfFirstItem + 1}-
								{Math.min(indexOfLastItem, filteredUsers.length)}
							</span>{" "}
							of{" "}
							<span className='font-semibold text-gray-900 dark:text-white'>
								{filteredUsers.length}
							</span>
						</span>
						<button
							onClick={handleNextPage}
							disabled={indexOfLastItem >= filteredUsers.length}
							className='inline-flex justify-center p-1 ml-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:cursor-not-allowed'
						>
							<ImArrowRight />
						</button>
					</div>
					<div className='flex items-center space-x-3 md:mr-[4.3%]'>
						<div className='col-span-6 sm:col-span-3'>
							<select
								defaultValue={10}
								id='role'
								className='inline-flex gap-1 items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:cursor-not-allowed '
								onChange={(e) => setItemPerPage(e.target.value)}
							>
								<option value='5' className='m-3'>
									5
								</option>
								<option value='15' className='m-3'>
									15
								</option>
								<option value='30' className='m-3'>
									30
								</option>
								<option value='50' className='m-3'>
									50
								</option>
							</select>
						</div>
						<button
							className='inline-flex gap-1 items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:cursor-not-allowed'
							onClick={handlePrevPage}
							disabled={currentPage === 1}
						>
							<span>
								<ImArrowLeft />
							</span>
							<span>Prev</span>
						</button>
						<button
							className='inline-flex gap-1 items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:cursor-not-allowed'
							onClick={handleNextPage}
							disabled={indexOfLastItem >= filteredUsers.length}
						>
							<span>Next</span>
							<span>
								<ImArrowRight />
							</span>
						</button>
					</div>
				</div>
			</main>
		</>
	);
};

export default Dashboard;
