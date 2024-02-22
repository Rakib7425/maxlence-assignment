import { useForm } from "react-hook-form";
import { reuseInputClassnames } from "../constants/adminConstants";

const ForgotPassword = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data); // You can replace this with your password reset logic
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
								<p className='text-sm text-red-500'>{errors.email.message}</p>
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
							className='w-full px-5 py-3 bg-slate-600 hover:bg-slate-800 dark:hover:bg-stone-800 duration-200 ease-out dark:bg-zinc-900 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
						>
							Send reset password link
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ForgotPassword;
