import { useForm } from "react-hook-form";
import { BsTwitterX } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import { reuseInputClassnames } from "../constants/adminConstants";
import { useEffect, useState } from "react";
import axios from "axios";
import { registerUserApi } from "../constants/apiUrls";
import Spinner from "../components/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setUser } from "../store/slices/userSlice";

const Register = () => {
	const [previewSource, setPreviewSource] = useState("");
	const [avatar, setAvatar] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [userData, setUserData] = useState([]);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const user = useSelector((store) => store.user.userDetails);

	useEffect(() => {
		if (userData?.token || user?.token) {
			navigate("/");
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm();

	const password = watch("password");

	const onSubmit = async (localData) => {
		try {
			setIsLoading(true);

			// console.log(previewSource);

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

			dispatch(setUser(data));
			setUserData(data);
			// console.log(data);
			setIsLoading(false);
			return toast.success(`${data?.message || "Successfully registered!"}`);
		} catch (error) {
			console.log(error);
			setIsLoading(false);
		}
	};

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

						<div className='flex items-center md:gap-14 gap-3'>
							<div className='left'>
								<label
									htmlFor='avatar'
									className='flex items-start mb-2 text-md ml-1 font-medium text-gray-900 dark:text-white'
								>
									Avatar <span className='text-red-600 ml-1 font-medium'>*</span>
								</label>
								<input
									type='file'
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
							<div className='preview rounded-full mt-5 h-14 w-14'>
								{previewSource && (
									<img
										src={previewSource}
										alt='Preview'
										className='rounded-full'
									/>
								)}
								{!previewSource && (
									<img
										src='https://as2.ftcdn.net/v2/jpg/02/44/43/69/1000_F_244436923_vkMe10KKKiw5bjhZeRDT05moxWcPpdmb.jpg'
										alt='Hello avatar'
										className='rounded-full'
									/>
								)}
							</div>
						</div>
						<div>
							<label
								htmlFor='role'
								className='flex items-start mb-2 text-md ml-1 font-medium text-gray-900 dark:text-white '
							>
								User Role
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

						<button
							disabled={isLoading}
							type='submit'
							className='min-w-full min px-5 py-3 text-base font-medium text-center text-white bg-slate-600 hover:bg-slate-800 dark:hover:bg-stone-800 duration-200 ease-out dark:bg-zinc-900 rounded-lg  focus:ring-4 focus:ring-blue-300 sm:w-auto   dark:focus:ring-blue-800 flex justify-center items-center disabled:cursor-wait'
						>
							<span className='mr-2 '>Register</span>
							{isLoading && (
								<span className='pt-1'>
									<Spinner />
								</span>
							)}
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
							<Link to={"/login"} className='dark:text-white hover:underline '>
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
