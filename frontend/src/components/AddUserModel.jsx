/* eslint-disable react/prop-types */

import { useForm } from "react-hook-form";
import { ImCross } from "react-icons/im";
import { toast } from "react-toastify";
import { registerUserApi } from "../constants/apiUrls";
import { useEffect, useRef, useState } from "react";
import { reuseInputClassnames } from "../constants/adminConstants";
import axios from "axios";
import Spinner from "./Spinner";
import { useSelector } from "react-redux";
import handleModelClose from "../utils/handleModelClose";

// shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500

const AddUserModel = ({ setUsers, isAddUserModelOpen, setIsAddUserModelOpen }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm();

	const user = useSelector((store) => store.user.userDetails);

	// console.log(user);

	const [previewSource, setPreviewSource] = useState("");
	const [avatar, setAvatar] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const ref = useRef(null);

	const password = watch("password");

	useEffect(() => {
		handleModelClose(setIsAddUserModelOpen, ref);
	}, [setIsAddUserModelOpen, ref]);

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

	const onSubmit = async (localData) => {
		try {
			if (!user.role === "admin") {
				return toast.warn(`You are not an admin !`);
			}

			setIsLoading(true);

			const headersList = {
				Accept: "*/*",
			};

			const formData = new FormData();
			formData.append("fullName", localData.fullName);
			formData.append("email", localData.email);
			formData.append("password", localData.password);
			formData.append("role", localData.role);
			formData.append("avatar", avatar);

			const bodyContent = formData;

			const reqOptions = {
				url: registerUserApi,
				method: "POST",
				headers: headersList,
				data: bodyContent,
			};

			const { data } = await axios.request(reqOptions);
			console.log(data);

			if (!data.token) {
				return toast.error(data.message || "User registration Failed");
			}

			setUsers((prevValue) => [...prevValue, data]);

			// console.log(data);
			setIsLoading(false);
			setIsAddUserModelOpen(false);

			return toast.success(`${data?.message || "Successfully registered!"}`);
		} catch (error) {
			console.log(error);
			setIsLoading(false);
		}
	};

	return (
		<div
			className={`${
				isAddUserModelOpen
					? "fixed left-0 right-0 z-50 items-center justify-center overflow-x-hidden overflow-y-auto top-4 md:inset-0 h-modal sm:h-full flex bg-slate-900 bg-opacity-50 duration-300 ease-out"
					: "fixed left-0 right-0 z-50 items-center justify-center overflow-x-hidden overflow-y-auto top-4 md:inset-0 h-modal sm:h-full hidden "
			}`}
			aria-modal={`${isAddUserModelOpen ? "true" : "false"}`}
			role={`${isAddUserModelOpen ? "dialog" : ""}`}
			aria-hidden={`${isAddUserModelOpen ? "false" : "true"}`}
		>
			<div className='relative w-full h-full max-w-2xl px-4 md:h-auto' ref={ref}>
				<div className='relative bg-white rounded-lg shadow dark:bg-gray-800'>
					<div className='flex items-start justify-between p-5 border-b rounded-t dark:border-gray-700'>
						<h3 className='text-xl font-semibold dark:text-white'>Add new user</h3>
						<button
							type='button'
							className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-700 dark:hover:text-white'
							data-modal-toggle='add-user-modal'
						>
							<span
								className='w-5 h-5 flex justify-center items-center'
								onClick={() => setIsAddUserModelOpen(false)}
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
										Full Name{" "}
										<span className='text-red-600 ml-1 font-medium'>*</span>
									</label>
									<input
										type='text'
										name='fullName'
										id='fullName'
										{...register("fullName", { required: true })}
										className={`${reuseInputClassnames}`}
										placeholder='Full Name'
									/>
									{errors.fullName && (
										<span className='text-red-500 ease-in duration-300 block pt-1 text-start'>
											Full Name is required
										</span>
									)}
								</div>

								<div className='col-span-6 sm:col-span-3'>
									<label
										htmlFor='email'
										className='block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start'
									>
										Email{" "}
										<span className='text-red-600 ml-1 font-medium'>*</span>
									</label>
									<input
										type='email'
										name='email'
										id='email'
										{...register("email", { required: true })}
										className={`${reuseInputClassnames}`}
										placeholder='email@company.com'
									/>
									{errors.email && (
										<span className='text-red-500 ease-in duration-300 block pt-1 text-start'>
											Email is required
										</span>
									)}
								</div>

								<div className='col-span-6 sm:col-span-3'>
									<label
										htmlFor='role'
										className='block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start'
									>
										User Role{" "}
										<span className='text-red-600 ml-1 font-medium'>*</span>
									</label>
									<select
										defaultValue='admin'
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
								<div className='col-span-6 sm:col-span-3 flex items-center justify-center'>
									<div className='col-span-6 sm:col-span-3'>
										<label
											htmlFor='avatar'
											className='flex items-start  text-md ml-1 font-medium text-gray-900 dark:text-white'
										>
											Avatar{" "}
											<span className='text-red-600 ml-1 font-medium'>*</span>
											<span className='text-red-600 ml-1 font-medium'>*</span>
										</label>
										<input
											type='file'
											accept='image/*'
											id='avatar'
											required
											onChange={handleFileInputChange}
											className={`${reuseInputClassnames}`}
											placeholder='Enter your avatar'
										/>
										{errors.avatar && errors.avatar.type === "required" && (
											<span className='text-red-500 ease-in duration-300 block pt-1 text-start'>
												Avatar is required
											</span>
										)}
									</div>

									<div className='preview rounded-full md:mt-7 mt-4 md:ml-[180px] ml-16 absolute h-16 w-16 col-span-3 sm:col-span-2'>
										{previewSource && (
											<img
												src={previewSource}
												alt='Preview'
												className='mb-4 rounded-lg w-24 h-16 sm:mb-0 xl:mb-4 2xl:mb-0'
											/>
										)}
										{!previewSource && (
											<img
												src='https://as2.ftcdn.net/v2/jpg/02/44/43/69/1000_F_244436923_vkMe10KKKiw5bjhZeRDT05moxWcPpdmb.jpg'
												alt='Hello avatar'
												className='rounded-full opacity-60'
											/>
										)}
									</div>
								</div>
								<div className='col-span-6 sm:col-span-3'>
									<label
										htmlFor='password'
										className='flex items-start mb-2 text-md ml-1 font-medium text-gray-900 dark:text-white'
									>
										Password{" "}
										<span className='text-red-600 ml-1 font-medium'>*</span>
										<span className='text-red-600 ml-1 font-medium'>*</span>
									</label>
									<input
										type='password'
										id='password'
										{...register("password", { required: true, minLength: 6 })}
										className={`${reuseInputClassnames}`}
										placeholder='Enter your password'
										autoComplete='off'
									/>
									{errors.password && errors.password.type === "required" && (
										<span className='text-red-500 ease-in duration-300 block pt-1 text-start'>
											Password is required
										</span>
									)}
									{errors.password && errors.password.type === "minLength" && (
										<span className='text-red-500 ease-in duration-300 block pt-1 text-start'>
											Password must have at least 6 characters
										</span>
									)}
								</div>
								<div className='col-span-6 sm:col-span-3'>
									<label
										htmlFor='confirmPassword'
										className='flex items-start mb-2 text-md ml-1 font-medium text-gray-900 dark:text-white'
									>
										Confirm Password{" "}
										<span className='text-red-600 ml-1 font-medium'>*</span>
										<span className='text-red-600 ml-1 font-medium'>*</span>
									</label>
									<input
										type='password'
										id='confirmPassword'
										{...register("confirmPassword", {
											required: true,
											validate: (value) =>
												value === password || "The passwords do not match",
										})}
										className={`${reuseInputClassnames}`}
										placeholder='Confirm your password'
										autoComplete='off'
									/>
									{errors.confirmPassword &&
										errors.confirmPassword.type === "required" && (
											<span className='text-red-500 ease-in duration-300 block pt-1 text-start'>
												Confirm Password is required
											</span>
										)}
									{errors.confirmPassword && (
										<span className='text-red-500 ease-in duration-300 block pt-1 text-start'>
											{errors.confirmPassword.message}
										</span>
									)}
								</div>
							</div>
							<div className='items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-700  flex gap-2 justify-center'>
								<button
									className='text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-pink-700-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-900 dark:focus:ring-blue-800 duration-200 w-28'
									onClick={() => setIsAddUserModelOpen(false)}
								>
									Close
								</button>
								<button
									disabled={isLoading}
									type='submit'
									className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 duration-200 flex justify-center items-center disabled:cursor-wait'
								>
									<span className='ml-1'>Add user</span>
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

export default AddUserModel;
