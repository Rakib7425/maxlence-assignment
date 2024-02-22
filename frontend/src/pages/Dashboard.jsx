import { BsCloudDownload, BsPlus, BsSearch } from "react-icons/bs";
import { ImArrowLeft, ImArrowRight } from "react-icons/im";
import { LuFileEdit } from "react-icons/lu";

const Dashboard = () => {
	return (
		<>
			<main className='mt-16 px-2 md:px-3 lg:px-32 xl:px-36'>
				<div className='py-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-900 dark:border-gray-700 duration-500'>
					<div className='w-full mb-1'>
						<div className='mb-4'>
							<h1 className='text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white'>
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
											placeholder='Search for users by email'
										/>
									</div>
								</form>
								<div className='flex justify-center items-center pl-0 mt-3 space-x-1 sm:pl-2 sm:mt-0'>
									<button className='flex justify-center items-center gap-2 dark:text-gray-400 rounded cursor-pointer hover:text-gray-900  dark:hover:bg-gray-700 dark:hover:text-white bg-slate-400 text-white dark:bg-gray-600  duration-200 py-[9px] px-[10px] mt-1'>
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
								>
									<span className='font-bold'>
										<BsPlus size={22} />
									</span>
									<span>Add user</span>
								</button>
								<button
									href='#'
									className='inline-flex gap-1 items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700'
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
										<tr className='hover:bg-gray-100 dark:hover:bg-gray-700 text-center'>
											<td className='p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white text-center'>
												1245323585
											</td>

											<td className='flex items-center justify-center p-3    whitespace-nowrap '>
												<img
													className='w-12 h-12 rounded-full'
													src='https://flowbite-admin-dashboard.vercel.app/images/users/neil-sims.png'
													alt='Neil Sims avatar'
												/>
											</td>

											<td className='p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white'>
												<div className='text-sm font-normal text-gray-500 dark:text-gray-400'>
													<div className='text-base font-semibold text-gray-900 dark:text-white'>
														Neil Sims
													</div>
													<div className='text-sm font-normal text-gray-500 dark:text-gray-400'>
														neil.sims@flowbite.com
													</div>
												</div>
											</td>
											<td className='p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white'>
												Admin
											</td>
											<td className='p-4 text-base font-normal text-gray-900 whitespace-nowrap dark:text-white'>
												<div className='flex items-center justify-center'>
													<div className='h-2.5 w-2.5 rounded-full bg-green-400 mr-2'></div>{" "}
													Active
												</div>
											</td>
											<td className='py-4 space-x-2 whitespace-nowrap'>
												<button
													type='button'
													data-modal-toggle='edit-user-modal'
													className='inline-flex gap-2 items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
												>
													<LuFileEdit color='black' size={17} />
													<span>Edit user</span>
												</button>
												<button
													type='button'
													data-modal-toggle='delete-user-modal'
													className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900'
												>
													<svg
														className='w-4 h-4 mr-2'
														fill='currentColor'
														viewBox='0 0 20 20'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path
															fillRule='evenodd'
															d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
															clipRule='evenodd'
														></path>
													</svg>
													Delete user
												</button>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className='sticky bottom-0 right-0 items-center w-full p-4 bg-white border-t border-gray-200 sm:flex sm:justify-between dark:bg-gray-800 dark:border-gray-700'>
					<div className='flex items-center mb-4 sm:mb-0'>
						<button
							href='#'
							className='inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
						>
							<ImArrowLeft />
						</button>
						<a
							href='#'
							className='inline-flex justify-center p-1 mr-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
						>
							<ImArrowRight />
						</a>
						<span className='text-sm font-normal text-gray-500 dark:text-gray-400'>
							Showing{" "}
							<span className='font-semibold text-gray-900 dark:text-white'>
								1-20
							</span>{" "}
							of{" "}
							<span className='font-semibold text-gray-900 dark:text-white'>
								2290
							</span>
						</span>
					</div>
					<div className='flex items-center space-x-3'>
						<button className='inline-flex gap-1 items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
							<span>
								<ImArrowLeft />
							</span>
							<span>Prev</span>
						</button>
						<button className='inline-flex gap-1 items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
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
