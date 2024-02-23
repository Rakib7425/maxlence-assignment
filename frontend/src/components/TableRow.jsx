/* eslint-disable react/prop-types */
import { MdDeleteOutline } from "react-icons/md";
import { LuFileEdit } from "react-icons/lu";
import { useState } from "react";
import DeleteUserModel from "./DeleteUserModel";

const TableRow = ({ user, setNeedReload }) => {
	const [isEditUserModelOpen, setIsEditUserModelOpen] = useState(false);

	const [isDeleteUserModelOpen, setIsDeleteUserModelOpen] = useState(false);

	return (
		<>
			{isDeleteUserModelOpen && (
				// tr and td for Warning:: Warning: validateDOMNesting(...): <div> cannot appear as a child of <tbody>.
				<tr>
					<td>
						<DeleteUserModel
							userId={user.id}
							setNeedReload={setNeedReload}
							setIsDeleteUserModelOpen={setIsDeleteUserModelOpen}
						/>
					</td>
				</tr>
			)}

			<tr className='hover:bg-gray-100 dark:hover:bg-gray-700 text-center'>
				<td className='p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white text-center'>
					{user?.id}
				</td>

				<td className='flex items-center justify-center p-3    whitespace-nowrap '>
					<img
						className='w-12 h-12 rounded-full'
						src={`${user?.avatar}`}
						alt='user avatar'
					/>
				</td>

				<td className='p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white'>
					<div className='text-sm font-normal text-gray-500 dark:text-gray-400'>
						<div className='text-base font-semibold text-gray-900 dark:text-white'>
							{user?.fullName}
						</div>
						<div className='text-sm font-normal text-gray-500 dark:text-gray-400'>
							{user?.email}
						</div>
					</div>
				</td>
				<td className='p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white'>
					{`${user?.role[0].toUpperCase()}${user?.role.slice(1)}`}
				</td>
				<td className='p-4 text-base font-normal text-gray-900 whitespace-nowrap dark:text-white'>
					<div className='flex items-center justify-center'>
						<div className='h-2.5 w-2.5 rounded-full bg-green-400 mr-2'></div> Active
					</div>
				</td>
				<td className='py-4 space-x-2 whitespace-nowrap'>
					<button
						type='button'
						data-modal-toggle='edit-user-modal'
						className='inline-flex gap-3 items-center px-4 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
					>
						<LuFileEdit color='black' size={17} />
						<span>Edit</span>
					</button>
					<button
						type='button'
						data-modal-toggle='delete-user-modal'
						className='inline-flex gap-2 items-center px-2 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900'
						onClick={() => setIsDeleteUserModelOpen((prev) => !prev)}
					>
						<MdDeleteOutline size={17} />
						<span>Delete</span>
					</button>
				</td>
			</tr>
		</>
	);
};

export default TableRow;
