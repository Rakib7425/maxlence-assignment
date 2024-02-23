import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { reuseInputClassnames } from "../constants/adminConstants";
import Spinner from "./Spinner";
import { useSelector } from "react-redux";
import { changeUserPasswordApi } from "../constants/apiUrls";
import { toast } from "react-toastify";

const ProfilePasswordInformation = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm();

	const [isLoading, setIsLoading] = useState(false);

	const password = watch("password");
	const loggedInUser = useSelector((store) => store.user.userDetails);

	const onSubmit = async (localData) => {
		try {
			setIsLoading(true);

			let headersList = {
				Accept: "*/*",
				Authorization: `Bearer ${loggedInUser.token}`,
				"Content-Type": "application/json",
			};

			let bodyContent = JSON.stringify({
				newPassword: localData.confirmPassword,
			});

			let reqOptions = {
				url: changeUserPasswordApi,
				method: "PATCH",
				headers: headersList,
				data: bodyContent,
			};

			let response = await axios.request(reqOptions);
			// console.log(response);

			setIsLoading(false);
			return toast.success(response?.data?.message);
		} catch (error) {
			setIsLoading(false);
			console.log(error);

			toast.error(
				error.response.data?.data.message || "Error occurred during changing Pass."
			);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className='grid grid-cols-6 gap-6'>
				<div className='col-span-6 sm:col-span-3'>
					<label
						htmlFor='password'
						className='flex items-start mb-2 text-md ml-1 font-medium text-gray-900 dark:text-white'
					>
						Password <span className='text-red-600 ml-1 font-medium'>*</span>
					</label>
					<input
						type='password'
						id='password'
						{...register("password", { required: true, minLength: 6 })}
						className={`${reuseInputClassnames}`}
						placeholder='Enter your new password'
						autoComplete='off'
					/>
					{errors.password && errors.password.type === "required" && (
						<span className='text-red-500 ease-in duration-300 block pt-1 text-start'>
							New Password is required
						</span>
					)}
					{errors.password && errors.password.type === "minLength" && (
						<span className='text-red-500 ease-in duration-300 block pt-1 text-start'>
							New Password must have at least 6 characters
						</span>
					)}
				</div>
				<div className='col-span-6 sm:col-span-3'>
					<label
						htmlFor='confirmPassword'
						className='flex items-start mb-2 text-md ml-1 font-medium text-gray-900 dark:text-white'
					>
						New Confirm Password{" "}
						<span className='text-red-600 ml-1 font-medium'>*</span>
					</label>
					<input
						type='password'
						id='confirmPassword'
						{...register("confirmPassword", {
							required: true,
							validate: (value) => value === password || "The passwords do not match",
						})}
						className={`${reuseInputClassnames}`}
						placeholder='Confirm your new password'
						autoComplete='off'
					/>
					{errors.confirmPassword && errors.confirmPassword.type === "required" && (
						<span className='text-red-500 ease-in duration-300 block pt-1 text-start'>
							New Confirm Password is Required
						</span>
					)}
					{errors.confirmPassword && (
						<span className='text-red-500 ease-in duration-300 block pt-1 text-start'>
							{errors.confirmPassword.message}
						</span>
					)}
				</div>
				<div className='col-span-6 sm:col-full'>
					<button
						className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex justify-center items-center duration-200 disabled:opacity-80 disabled:cursor-not-allowed'
						type='submit'
						disabled={isLoading}
					>
						<span className='ml-1'>Change my password</span>
						{isLoading && (
							<span className='mt-0.5 ml-1'>
								<Spinner />
							</span>
						)}
					</button>
				</div>
			</div>
		</form>
	);
};

export default ProfilePasswordInformation;
