import axios from "axios";
import { useForm } from "react-hook-form";
import { reuseInputClassnames } from "../constants/adminConstants";
import { resetPasswordApi } from "../constants/apiUrls";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
	const {
		register,
		handleSubmit,
		resetField,
		formState: { errors, isSubmitting },
	} = useForm();

	const { resetToken } = useParams();
	const navigate = useNavigate();

	const onSubmit = async (data) => {
		try {
			const headersList = {
				Accept: "*/*",
				"Content-Type": "application/json",
			};

			const bodyContent = JSON.stringify({
				password: data.password,
			});

			// const resetToken = "6a5eb357-31a6-4837-8f19-877f54b7a1e3"; // You might want to handle token retrieval differently
			const reqOptions = {
				url: `${resetPasswordApi}/${resetToken}`,
				method: "POST",
				headers: headersList,
				data: bodyContent,
			};

			const response = await axios.request(reqOptions);
			console.log(response.data);

			resetField("password");
			navigate("/login");
			return toast.success(`${response.data?.message || "Password Reset successfully"}`);
		} catch (error) {
			// Handle errors
			console.error("Password reset failed:", error);
			return toast.error(
				error.response?.data?.message || "Failed to reset password. Please try again later."
			);
		}
	};

	return (
		<div className='flex justify-center items-center'>
			<div className='w-full bg-white mt-32 rounded-lg shadow sm:max-w-md dark:bg-gray-800'>
				<div className='w-full p-6 sm:p-8'>
					<h2 className='mb-3 text-2xl font-bold text-gray-900 dark:text-white'>
						Reset your password
					</h2>
					<p className='text-base font-normal text-gray-500 dark:text-gray-400'>
						Do not fret! Just type in your new password!
					</p>
					<form className='mt-8 space-y-6' onSubmit={handleSubmit(onSubmit)}>
						<div>
							<label
								htmlFor='password'
								className='flex items-start mb-2 text-md ml-1 font-medium text-gray-900 dark:text-white '
							>
								New Password
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
								<span className='text-red-500 ease-in duration-300 block pt-1 text-start pl-1'>
									New password is required
								</span>
							)}
							{errors.password && errors.password.type === "minLength" && (
								<span className='text-red-500 ease-in duration-300 block pt-1 pl-1 text-start'>
									New password must have at least 6 characters
								</span>
							)}
						</div>
						<div className='flex items-start'>
							<div className='flex items-center h-5'>
								<input
									id='remember'
									aria-describedby='remember'
									name='remember'
									type='checkbox'
									className='w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600'
									defaultChecked={true}
								/>
							</div>
							<div className='ml-3 text-sm'>
								<label
									htmlFor='remember'
									className='font-medium text-gray-900 dark:text-white'
								>
									I accept the{" "}
									<a
										href='#'
										className='text-blue-700 hover:underline dark:text-blue-500'
									>
										Terms and Conditions
									</a>
								</label>
							</div>
						</div>

						<button
							type='submit'
							className='w-full px-5 py-3 bg-slate-600 hover:bg-slate-800 dark:hover:bg-stone-800 duration-200 ease-out dark:bg-zinc-900 text-base font-medium text-center text-white  rounded-lg  focus:ring-4 focus:ring-blue-300 sm:w-auto dark:focus:ring-blue-800 inline-flex justify-center items-center disabled:cursor-not-allowed disabled:opacity-50'
							disabled={isSubmitting}
						>
							<span className='mr-2 '>Reset your Password</span>
							{isSubmitting && (
								<span className='pt-1'>
									<Spinner />
								</span>
							)}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ResetPassword;
