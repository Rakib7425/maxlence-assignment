import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { reuseInputClassnames } from "../constants/adminConstants";

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
		// Perform login logic with data
	};

	return (
		<div className='flex justify-center items-center '>
			<div className='w-full max-w-xl p-6 mt-32 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:shadow shadow-slate-600 dark:bg-gray-800'>
				<h2 className='text-2xl font-bold text-gray-900 dark:text-white'>
					Sign in to Maxlence
				</h2>
				<form className='mt-8 space-y-6' onSubmit={handleSubmit(onSubmit)}>
					<div>
						<label
							htmlFor='email'
							className='flex items-start mb-2 text-md ml-1 font-medium text-gray-900 dark:text-white '
						>
							Your email <span className='text-red-600 ml-1 font-medium'>*</span>
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
							<span className='text-red-500'>This field is required</span>
						)}
					</div>
					<div>
						<label
							htmlFor='password'
							className='flex items-start mb-2 text-md ml-1 font-medium text-gray-900 dark:text-white '
						>
							Your password <span className='text-red-600 ml-1 font-medium'>*</span>
						</label>
						<input
							autoComplete='off'
							type='password'
							name='password'
							id='password'
							{...register("password", { required: true })}
							placeholder='Enter your password'
							className={`${reuseInputClassnames}`}
						/>
						{errors.password && (
							<span className='text-red-500'>This field is required</span>
						)}
					</div>
					<div className='flex items-start'>
						<div className='flex items-center h-5'>
							<input
								id='remember'
								aria-describedby='remember'
								name='remember'
								type='checkbox'
								className='w-4 h-4 border-gray-500 outline-none rounded bg-gray-100 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600'
							/>
						</div>
						<div className='ml-3 text-sm'>
							<label
								htmlFor='remember'
								className='font-medium text-gray-900 dark:text-white'
							>
								Remember me
							</label>
						</div>
						<Link
							to={"/forgot-password"}
							className='ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500'
						>
							Lost Password?
						</Link>
					</div>
					<button
						type='submit'
						className='w-full px-5 py-3 bg-slate-600 hover:bg-slate-800 dark:hover:bg-stone-800 duration-200 ease-out dark:bg-zinc-900 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
					>
						Login to your account
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
						Not registered?{" "}
						<Link
							to={"/register"}
							className='dark:text-white hover:underline dark:text-blue-500'
						>
							Create an account
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
