/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { deleteUserApi } from "../constants/apiUrls";
import { ImCross } from "react-icons/im";
import { toast } from "react-toastify";
import Spinner from "./Spinner";
import handleModelClose from "../utils/handleModelClose";

const DeleteUserModel = ({ userId, setIsDeleteUserModelOpen, setNeedReload }) => {
	const [isLoading, setIsLoading] = useState(false);

	const loggedInUser = useSelector((store) => store.user.userDetails);
	// console.log(loggedInUser);

	// console.log(userId);

	const ref = useRef(null);

	useEffect(() => {
		handleModelClose(setIsDeleteUserModelOpen, ref);
	}, [setIsDeleteUserModelOpen, ref]);

	const handledDeleteUser = async () => {
		try {
			if (!loggedInUser.role === "admin") {
				return toast.warn(`You are not an admin !`);
			}
			setIsLoading(true);

			// console.log("Deleting......");
			let headersList = {
				Accept: "*/*",
				Authorization: `Bearer ${loggedInUser.token}`,
				"Content-Type": "application/json",
			};

			let bodyContent = JSON.stringify({
				userId,
			});

			let reqOptions = {
				url: deleteUserApi,
				method: "DELETE",
				headers: headersList,
				data: bodyContent,
			};

			let response = await axios.request(reqOptions);
			// console.log(response);

			if (!response.data.success) {
				return toast.error(response.data.message || "User Deletion Failed");
			}

			setNeedReload((prev) => !prev);
			setIsLoading(false);
			return toast.success(
				`${response.data?.message || "Successfully deleted successfully!"}`
			);
		} catch (error) {
			setIsLoading(false);
			console.log(error);
			return toast.error(`${error.data?.message || "User Deletion Failed !"}`);
		}
	};

	return (
		<React.Fragment>
			{/* <!-- Delete User Modal --> */}
			<div
				className='fixed left-0 right-0 z-50 items-center justify-center overflow-x-hidden overflow-y-auto top-4 md:inset-0 h-modal sm:h-full flex bg-gray-800 bg-opacity-60'
				id='delete-user-modal'
				aria-modal='true'
				role='dialog'
			>
				<div className='relative w-full h-full max-w-md px-4 md:h-auto' ref={ref}>
					{/* <!-- Modal content --> */}
					<div className='relative bg-white rounded-lg shadow dark:bg-gray-900'>
						{/* <!-- Modal header --> */}
						<div className='flex justify-end p-2'>
							<button
								type='button'
								className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-700 dark:hover:text-white'
								data-modal-toggle='delete-user-modal'
								onClick={() => setIsDeleteUserModelOpen(false)}
							>
								<span className='w-5 h-5 flex items-center justify-center'>
									<ImCross />
								</span>
							</button>
						</div>
						{/* <!-- Modal body --> */}
						<div className='p-6 pt-0 text-center'>
							<svg
								className='w-16 h-16 mx-auto text-red-600'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
								></path>
							</svg>
							<h3 className='mt-5 mb-6 text-lg text-gray-500 dark:text-gray-400'>
								Are you sure you want to delete this user?
							</h3>
							<button
								className='text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2 dark:focus:ring-red-800 justify-center disabled:cursor-not-allowed'
								onClick={handledDeleteUser}
								disabled={isLoading}
							>
								<span className='ml-1'>Yes, I'am sure</span>
								{isLoading && (
									<span className='mt-0.5 ml-1'>
										<Spinner />
									</span>
								)}
							</button>
							<button
								type='button'
								className='text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700'
								data-modal-toggle='delete-user-modal'
								onClick={() => setIsDeleteUserModelOpen(false)}
							>
								No, cancel
							</button>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default DeleteUserModel;
