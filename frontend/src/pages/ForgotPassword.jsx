import axios from "axios";
import { useForm } from "react-hook-form";
import { reuseInputClassnames } from "../constants/adminConstants";
import { forgotPasswordApi } from "../constants/apiUrls";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
	const {
		register,
		handleSubmit,
		resetField,
		formState: { errors, isSubmitting },
	} = useForm();
	const navigate = useNavigate();

	const onSubmit = async (data) => {
		try {
			// console.log(data);

			let headersList = {
				Accept: "*/*",
				"Content-Type": "application/json",
			};

			let bodyContent = JSON.stringify({
				email: data.email,
			});

			let reqOptions = {
				url: forgotPasswordApi,
				method: "POST",
				headers: headersList,
				data: bodyContent,
			};

			let response = await axios.request(reqOptions);

			console.log(response.data);
			resetField("email");
			navigate("/login");
			return toast.success(
				`${response.data?.message + " check your email" || "Reset link has been sent"}`
			);
		} catch (error) {
			console.log(error);
			return toast.error(
				`${error.response?.data?.error || error?.message || "Reset link not send!"}`
			);
		}
	};

	return (
		<div className='flex justify-center items-center'>
			<div className='w-full bg-white mt-32 rounded-lg shadow sm:max-w-md dark:bg-gray-800'>
				<div className='w-full p-6 sm:p-8'>
					<h2 className='mb-3 text-2xl font-bold text-gray-900 dark:text-white'>
						Forgot your password?
					</h2>
					<p className='text-base font-normal text-gray-500 dark:text-gray-400'>
						Do not fret! Just type in your email and we will send you a code to reset
						your password!
					</p>
					<form className='mt-8 space-y-6' onSubmit={handleSubmit(onSubmit)}>
						<div>
							<label
								htmlFor='email'
								className='flex items-start mb-2 text-md ml-1 font-medium text-gray-900 dark:text-white '
							>
								Your email
							</label>
							<input
								type='email'
								name='email'
								id='email'
								{...register("email", { required: "Email is required" })}
								className={`${reuseInputClassnames}`}
								placeholder='name@company.com'
							/>
							{errors.email && (
								<p className='text-base text-red-500 mt-1 '>
									{errors.email.message}
								</p>
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
							disabled={isSubmitting}
							className='w-full px-5 py-3 bg-slate-600 hover:bg-slate-800 dark:hover:bg-stone-800 duration-200 ease-out dark:bg-zinc-900 text-base font-medium text-center text-white  rounded-lg  focus:ring-4 focus:ring-blue-300 sm:w-auto dark:focus:ring-blue-800 inline-flex justify-center items-center disabled:cursor-not-allowed disabled:opacity-50'
						>
							<span className='mr-2 '>Send reset password link</span>
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

export default ForgotPassword;
