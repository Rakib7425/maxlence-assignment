import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAvatarApi } from "../constants/apiUrls";
import { toast } from "react-toastify";
import { setUser } from "../store/slices/userSlice";
import Spinner from "../components/Spinner";
import ProfilePasswordInformation from "../components/ProfilePasswordInformation";
import ProfileGeneralInformation from "../components/ProfileGeneralInformation";

const Profile = () => {
	const [previewSource, setPreviewSource] = useState("");
	const [avatar, setAvatar] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const dispatch = useDispatch();

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

	const loggedInUser = useSelector((store) => store.user.userDetails);

	const handleAvatarChange = async () => {
		try {
			console.log("changing.....");
			if (!avatar || !loggedInUser) {
				return toast.warn(`Please Select avatar file!`);
			}
			setIsLoading(true);
			const headersList = {
				Accept: "*/*",
				Authorization: `Bearer ${loggedInUser?.token}`,
			};

			const formData = new FormData();
			formData.append("avatar", avatar);
			const bodyContent = formData;

			const reqOptions = {
				url: updateUserAvatarApi,
				method: "PUT",
				headers: headersList,
				data: bodyContent,
			};

			const response = await axios.request(reqOptions);
			// console.log(response.data);
			dispatch(setUser(response.data));
			setIsLoading(false);
			return toast.success("Avatar Changed Successfully!");
		} catch (error) {
			console.log(error);
			setIsLoading(false);
			return toast.error(error.message || "Error Occurred");
		}
	};

	return (
		<div className='min-h-full min-w-full md:px-32 block'>
			<div className='grid grid-cols-2 px-4 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900'>
				<div className='mt-16 col-span-full xl:mb-2'>
					<h1 className='text-xl mb-3 font-semibold text-gray-900 sm:text-2xl dark:text-white text-start'>
						User settings
					</h1>
				</div>
				{/* Left Content */}
				<div className='col-span-full xl:col-auto'>
					<div className='p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800'>
						<div className='items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4'>
							{previewSource && (
								<img
									src={previewSource}
									alt='Preview'
									className='mb-4 rounded-lg w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0'
								/>
							)}
							{!previewSource && (
								<img
									src={`${loggedInUser?.avatar}`}
									className='mb-4 rounded-lg w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0'
								/>
							)}

							<div>
								<h3 className='mb-1 text-xl font-bold text-gray-900 dark:text-white'>
									Profile picture
								</h3>
								<div className='mb-4 text-sm text-gray-500 dark:text-gray-400'>
									JPG, GIF or PNG. Max size of 800K
								</div>
								<div className='flex items-center space-x-4'>
									<span>
										<input
											type='file'
											className={`inline-flex items-center px-2 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  ${
												isLoading ? "w-28" : "w-36"
											}`}
											required
											onChange={handleFileInputChange}
										/>
									</span>

									<button
										type='button'
										className='py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 flex items-center justify-center duration-150 ease-out disabled:cursor-not-allowed'
										onClick={handleAvatarChange}
										disabled={isLoading}
									>
										<span className='ml-1'>Upload</span>
										{isLoading && (
											<span className='ml-1'>
												<Spinner />
											</span>
										)}
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='col-span-2'>
					<>
						<ProfileGeneralInformation />
					</>
					<div className='p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800'>
						<h3 className='mb-4 text-xl font-semibold dark:text-white'>
							Password information
						</h3>
						<ProfilePasswordInformation />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
