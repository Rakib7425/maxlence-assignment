import { NavLink, useNavigate } from "react-router-dom";
import ToggleDarkMode from "./ToggleDarkMode";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/slices/userSlice";
import { toast } from "react-toastify";

const NavBar = () => {
	const [isMobileOpenMenu, setIsMobileOpenMenu] = useState(false);
	const [isUserDropdown, setIsUserDropdown] = useState(false);
	const navigate = useNavigate();

	const user = useSelector((store) => store.user.userDetails);
	const dispatch = useDispatch();

	const handleIsMobileOpenMenu = () => {
		setIsMobileOpenMenu(!isMobileOpenMenu);
		setIsUserDropdown(false);
	};

	const handleIsUserDropdown = () => {
		setIsUserDropdown(!isUserDropdown);
		setIsMobileOpenMenu(false);
	};
	const handleProfileClick = () => {
		setIsMobileOpenMenu(false);
		setIsUserDropdown(false);
	};

	const handleSignOut = () => {
		navigate("/login");
		handleIsUserDropdown();
		handleIsMobileOpenMenu();
		console.log("handleSignOut");
		dispatch(setUser(null));
		toast.success("Successfully logged out!");
	};

	return (
		<div className='w-full fixed top-0 shadow-lg '>
			<nav className='bg-white border-gray-200 dark:bg-gray-900 relative w-full'>
				<div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
					<NavLink
						to={"/"}
						className={({ isActive, isPending }) =>
							isPending
								? "pending"
								: isActive
								? "flex items-center space-x-3 rtl:space-x-reverse"
								: "flex gap-3"
						}
					>
						{/* <img src='/maxlence-logo.png' className='h-8' alt='Maxlence Logo' /> */}
						<span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white hover:opacity-60 duration-300'>
							Maxlence Logo
						</span>
					</NavLink>
					<div className='flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-2'>
						{user?.avatar && (
							<button
								type='button'
								className='flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600'
								id='user-menu-button'
								aria-expanded='false'
								data-dropdown-toggle='user-dropdown'
								data-dropdown-placement='bottom'
								onClick={handleIsUserDropdown}
							>
								<span className='sr-only'>Open user menu</span>
								<img
									className='w-9 h-9 rounded-full bg-clip-text '
									src={`${
										user?.avatar ||
										"https://as2.ftcdn.net/v2/jpg/02/44/43/69/1000_F_244436923_vkMe10KKKiw5bjhZeRDT05moxWcPpdmb.jpg"
									}`}
									alt='user avatar'
								/>
							</button>
						)}
						<ToggleDarkMode />
						{user?.avatar && (
							<div
								className={`${
									isUserDropdown ? "" : "hidden"
								} z-50 absolute ease-out duration-500 top-12 right-20 md:top-10 md:right-32 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600'
							id='user-dropdown `}
							>
								<div className='px-4 py-3'>
									<span className='block text-sm text-gray-900 dark:text-white'>
										{user?.fullName}
									</span>
									<span className='block text-sm  text-gray-500 truncate dark:text-gray-400'>
										{user?.email}
									</span>
								</div>
								<ul className='py-2' aria-labelledby='user-menu-button'>
									<li>
										<NavLink
											to={"/user/profile"}
											className={({ isActive, isPending }) =>
												isPending
													? "pending"
													: isActive
													? "font-bold mb-1 underline-offset-1 text-black dark:text-yellow-500"
													: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
											}
											onClick={handleProfileClick}
										>
											Profile
										</NavLink>
									</li>
									<li onClick={handleSignOut}>
										<NavLink
											to={"/"}
											className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
										>
											Sign out
										</NavLink>
									</li>
								</ul>
							</div>
						)}
						<button
							data-collapse-toggle='navbar-user'
							type='button'
							className={`inline-flex  items-center p-1 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`}
							aria-controls='navbar-user'
							aria-expanded='false'
							onClick={handleIsMobileOpenMenu}
						>
							<span className='sr-only'>Open main menu</span>
							{/* <span className='w-5 h-5'> */}
							<GiHamburgerMenu size={20} />
							{/* </span> */}
						</button>
					</div>

					<div
						className={`${
							isMobileOpenMenu ? "" : "hidden"
						} items-center  justify-between  w-full md:flex md:w-auto md:order-1`}
						id='navbar-user'
					>
						<ul className='flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
							<li>
								<NavLink
									to={"/"}
									className={({ isActive, isPending }) =>
										isPending
											? "pending"
											: isActive
											? "font-bold md:text-xl bg-blue-700 md:bg-transparent py-2 px-3  md:p-0 underline-offset-1 text-black dark:text-yellow-200 block md:inline rounded duration-300 ease-out"
											: "block py-2 px-3 text-white rounded  md:text-blue-700 md:p-0 md:dark:text-blue-500 md:text-xl duration-300 ease-out"
									}
									aria-current='page'
								>
									Dashboard
								</NavLink>
							</li>

							<li>
								<NavLink
									to={"/login"}
									className={({ isActive, isPending }) =>
										isPending
											? "pending"
											: isActive
											? "font-bold md:text-xl bg-blue-700 md:bg-transparent py-2 px-3 underline-offset-1 text-black dark:text-yellow-200 block md:inline rounded duration-300 ease-out"
											: "block md:inline py-2 px-3 text-white rounded  md:text-blue-700 md:p-0 md:dark:text-blue-500 md:text-xl duration-300 ease-out"
									}
								>
									Login
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
