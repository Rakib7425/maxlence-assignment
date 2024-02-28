/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { ImCross } from "react-icons/im";
import { updateUserDetailsApi } from "../constants/apiUrls";
import { reuseInputClassnames } from "../constants/adminConstants";
import Spinner from "./Spinner";
import { useSelector } from "react-redux";
import handleModelClose from "../utils/handleModelClose";

// shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500

const EditUserModel = ({ user, isEditUserModelOpen, setIsEditUserModelOpen, setNeedReload }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm();

	// console.log(user);

	const [previewSource, setPreviewSource] = useState("");
	const [avatar, setAvatar] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const ref = useRef(null);

	const password = watch("password");

	const loggedInUser = useSelector((store) => store.user.userDetails);

	const previewFile = (file) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setPreviewSource(reader.result);
		};
	};

	const handleFileInputChange = (e) => {
		const file = e.target.files[0];
		previewFile(file);
		setAvatar(file);
	};

	useEffect(() => {
		handleModelClose(setIsEditUserModelOpen, ref);
	}, [setIsEditUserModelOpen, ref]);

	const onSubmit = async (localData) => {
		try {
			if (loggedInUser.role !== "admin") {
				return toast.warn(`You are not an admin!`);
			}

			setIsLoading(true);

			const headersList = {
				Accept: "*/*",
				Authorization: `Bearer ${user.token}`,
				"Content-Type": "application/json",
			};

			const formData = new FormData();
			formData.append("fullName", localData.fullName);
			formData.append("role", localData.role);

			const bodyContent = formData;

			const reqOptions = {
				url: updateUserDetailsApi,
				method: "PATCH",
				headers: headersList,
				data: bodyContent,
			};

			const { data } = await axios.request(reqOptions);
			console.log(data);

			if (!data.token) {
				return toast.error(data?.message || "User Updated Successfully");
			}

			setIsLoading(false);
			setIsEditUserModelOpen(false);
			setNeedReload((pV) => !pV);
			return toast.success(`${data?.message || "Successfully updated!"}`);
		} catch (error) {
			console.log(error);
			setIsLoading(false);
		}
	};

	return (
		<div
			className={`${
				isEditUserModelOpen
					? "fixed left-0 right-0 z-50 items-center justify-center overflow-x-hidden overflow-y-auto top-4 md:inset-0 h-modal sm:h-full flex bg-slate-900 bg-opacity-50 duration-300 ease-out"
					: "fixed left-0 right-0 z-50 items-center justify-center overflow-x-hidden overflow-y-auto top-4 md:inset-0 h-modal sm:h-full hidden"
			}`}
			aria-modal={`${isEditUserModelOpen ? "true" : "false"}`}
			role={`${isEditUserModelOpen ? "dialog" : ""}`}
			aria-hidden={`${isEditUserModelOpen ? "false" : "true"}`}
		>
			<div className='relative w-full h-full max-w-2xl px-4 md:h-auto ' ref={ref}>
				<div className='relative bg-white rounded-lg shadow dark:bg-gray-800'>
					<div className='flex items-start justify-between p-5 border-b rounded-t dark:border-gray-700'>
						<h3 className='text-xl font-semibold dark:text-white'>Edit user</h3>
						<button
							type='button'
							className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-700 dark:hover:text-white'
							data-modal-toggle='edit-user-modal'
						>
							<span
								className='w-5 h-5 flex justify-center items-center'
								onClick={() => setIsEditUserModelOpen(false)}
							>
								<ImCross />
							</span>
						</button>
					</div>
					<div className='p-6 space-y-6'>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className='grid grid-cols-6 gap-6 mb-5'>
								<div className='col-span-6 sm:col-span-3'>
									<label
										htmlFor='fullName'
										className='block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start'
									>
										New Full Name{" "}
										<span className='text-red-600 ml-1 font-medium'>*</span>
									</label>
									<input
										type='text'
										name='fullName'
										id='fullName'
										{...register("fullName", { required: true })}
										className={`${reuseInputClassnames}`}
										placeholder='Full Name'
										defaultValue={user?.fullName}
									/>
									{errors.fullName && (
										<span className='text-red-500 ease-in duration-300 block pt-1 text-start'>
											Full Name is required
										</span>
									)}
								</div>

								<div className='col-span-6 sm:col-span-3'>
									<label
										htmlFor='role'
										className='block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start'
									>
										New User Role{" "}
										<span className='text-red-600 ml-1 font-medium'>*</span>
									</label>
									<select
										defaultValue={user?.role}
										id='role'
										{...register("role", { required: true })}
										className={`${reuseInputClassnames} `}
									>
										<option value='' className='m-3'>
											Select Role
										</option>
										<option value='admin' className='m-3'>
											Admin
										</option>
										<option value='user' className='m-3'>
											User
										</option>
									</select>
									{errors.role && (
										<span className='text-red-500 ease-in duration-300 block pt-1 text-start'>
											Please select a user role
										</span>
									)}
								</div>
								{/* <div className='col-span-6 sm:col-span-3 flex justify-center items-center'>
									<div className='col-span-6 sm:col-span-3'>
										<label
											htmlFor='avatar'
											className='block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start'
										>
											Avatar{" "}
											<span className='text-red-600 ml-1 font-medium'>*</span>
										</label>
										<input
											type='file'
											accept='image/*'
											id='avatar'
											required
											onChange={handleFileInputChange}
											className={`${reuseInputClassnames} `}
											placeholder='Enter your avatar'
										/>
										{errors.avatar && errors.avatar.type === "required" && (
											<span className='text-red-500 ease-in duration-300 block pt-1 text-start'>
												Avatar is required
											</span>
										)}
									</div>

									<div className='col-span-6 sm:col-span-3 h-20 w-20 pt-6 ml-4'>
										{previewSource ? (
											<img
												src={previewSource}
												alt='Preview'
												className='rounded-full h-16 w-20 pb-2'
											/>
										) : (
											<img
												src='https://as2.ftcdn.net/v2/jpg/02/44/43/69/1000_F_244436923_vkMe10KKKiw5bjhZeRDT05moxWcPpdmb.jpg'
												alt='Hello avatar'
												className='rounded-full opacity-60'
											/>
										)}
									</div>
								</div> */}
							</div>

							<div className='items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-700  flex gap-2 justify-center'>
								<button
									className='text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-pink-700-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-900 dark:focus:ring-blue-800 duration-200 w-28'
									onClick={() => setIsEditUserModelOpen(false)}
								>
									Close
								</button>
								<button
									disabled={isLoading}
									type='submit'
									className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 duration-200 flex justify-center items-center disabled:cursor-wait disabled:opacity-50'
								>
									<span className='ml-1'>Edit user</span>
									{isLoading && (
										<span className='mt-0.5 ml-1'>
											<Spinner />
										</span>
									)}
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditUserModel;
