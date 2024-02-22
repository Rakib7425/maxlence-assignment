import { useForm } from "react-hook-form";
import { BsTwitterX } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
import { Link } from "react-router-dom";
import { reuseInputClassnames } from "../constants/adminConstants";

const Register = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
		// Perform registration logic with data
	};

	const password = watch("password");

	return (
		<div className='h-full'>
			<div className='flex  justify-center items-center mt-10'>
				<div className='w-full max-w-xl p-6 mt-32 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:shadow shadow-slate-600 dark:bg-gray-800'>
					<h2 className='text-2xl font-bold text-gray-900 dark:text-white'>
						Register for Maxlence
					</h2>
					<form className='mt-8 space-y-6' onSubmit={handleSubmit(onSubmit)}>
						<div>
							<label
								htmlFor='fullName'
								className='flex items-start mb-2 text-md ml-1 font-medium text-gray-900 dark:text-white'
							>
								Full Name <span className='text-red-600 ml-1 font-medium'>*</span>
							</label>
							<input
								type='text'
								id='fullName'
								{...register("fullName", { required: true })}
								className={`${reuseInputClassnames}`}
								placeholder='Enter your full name'
							/>
							{errors.fullName && (
								<span className='text-red-500 ease-in duration-300 block pt-1 text-start'>
									Full Name is required
								</span>
							)}
						</div>
						<div>
							<label
								htmlFor='email'
								className='flex items-start mb-2 text-md ml-1 font-medium text-gray-900 dark:text-white'
							>
								Email <span className='text-red-600 ml-1 font-medium'>*</span>
							</label>
							<input
								type='email'
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
						<div>
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
								placeholder='Enter your password'
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
						<div>
							<label
								htmlFor='confirmPassword'
								className='flex items-start mb-2 text-md ml-1 font-medium text-gray-900 dark:text-white'
							>
								Confirm Password{" "}
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
						<div>
							<label
								htmlFor='userRole'
								className='flex items-start mb-2 text-md ml-1 font-medium text-gray-900 dark:text-white '
							>
								User Role
							</label>
							<select
								id='userRole'
								{...register("userRole", { required: true })}
								className={`${reuseInputClassnames} `}
							>
								<option value='' className='m-3'>
									Select Role
								</option>
								<option selected value='admin' className='m-3'>
									Admin
								</option>
								<option value='user' className='m-3'>
									User
								</option>
							</select>
							{errors.userRole && (
								<span className='text-red-500 ease-in duration-300 block pt-1 text-start'>
									Please select a user role
								</span>
							)}
						</div>
						<button
							type='submit'
							className='min-w-full min px-5 py-3 text-base font-medium text-center text-white bg-slate-600 hover:bg-slate-800 dark:hover:bg-stone-800 duration-200 ease-out dark:bg-zinc-900 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
						>
							Register
						</button>
						<div className='social-accounts flex w-full items-center justify-center gap-6 md:gap-6'>
							<div id='google' className='cursor-pointer' title='Login with Google'>
								{/* onClick={loginWithGoogle} */}
								<FcGoogle size={35} />
							</div>
							<div
								id='github'
								className='cursor-pointer dark:text-white text-black'
								title='Login with Github'
							>
								{/* onClick={loginWithGitHub} */}
								<ImGithub size={35} />
							</div>
							<div id='twitter' className='cursor-pointer' title='Login with Twitter'>
								{/* onClick={loginWithTwitter} */}
								<BsTwitterX size={30} />
							</div>
						</div>
						<div className='text-sm font-medium text-gray-800 dark:text-gray-400'>
							Already have an account?{" "}
							<Link
								to={"/login"}
								className='dark:text-white hover:underline dark:text-blue-500'
							>
								Login here
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
