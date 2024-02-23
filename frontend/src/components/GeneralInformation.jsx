/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import axios from "axios";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { reuseInputClassnames } from "../constants/adminConstants";
import { updateUserDetailsApi } from "../constants/apiUrls";
import { useState } from "react";
import { setUser } from "../store/slices/userSlice";
import Spinner from "./Spinner";
import { toast } from "react-toastify";

const GeneralInformation = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm();
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);

	const email = watch("email");

	const user = useSelector((store) => store.user.userDetails);

	const onSubmit = async (localData) => {
		try {
			const headersList = {
				Accept: "*/*",
				Authorization: `Bearer ${user.token}`,
				"Content-Type": "application/json",
			};

			const bodyContent = JSON.stringify({
				fullName: localData.fullName,
				email: localData.email,
				role: localData?.role || "admin",
			});

			const reqOptions = {
				url: updateUserDetailsApi,
				method: "PATCH",
				headers: headersList,
				data: bodyContent,
			};

			const response = await axios.request(reqOptions);
			console.log(response.data);
			dispatch(setUser(response.data));
			setIsLoading(false);

			return toast.success("User details updated successfully!");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800'>
			<h3 className='mb-4 text-xl font-semibold dark:text-white'>General information</h3>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='grid grid-cols-6 gap-6'>
					<div className='col-span-6 sm:col-span-3'>
						<label
							htmlFor='fullName'
							className='block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start'
						>
							Full Name
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
							htmlFor='email'
							className='block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start'
						>
							Email
						</label>
						<input
							defaultValue={user?.email}
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
							User Role
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
					<div className='col-span-6 sm:col-full'>
						<button
							className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex justify-center items-center disabled:cursor-not-allowed disabled:opacity-70 duration-300 ease-out'
							type='submit'
							disabled={isLoading}
						>
							<span className='ml-1'>Save all</span>
							{isLoading && (
								<span className='ml-1'>
									<Spinner />
								</span>
							)}
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default GeneralInformation;
