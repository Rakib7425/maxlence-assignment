import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import NavBar from "./components/NavBar.jsx";
import Register from "./pages/Register.jsx";
import UserProfile from "./components/UserProfile.jsx";
import Profile from "./pages/Profile.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import Dashboard from "./pages/Dashboard.jsx";

const App = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<>
					<NavBar />
					<Dashboard />
				</>
			),
		},
		{
			path: "/login",
			element: (
				<>
					<NavBar />
					<Login />
				</>
			),
		},
		{
			path: "/register",
			element: (
				<>
					<NavBar />
					<Register />
				</>
			),
		},
		{
			path: "/user",
			element: (
				<>
					<NavBar />
					<Profile />
				</>
			),
			children: [
				{
					path: "profile",
					element: <UserProfile />,
				},
			],
		},
		{
			path: "/forgot-password",
			element: (
				<>
					<NavBar />
					<ForgotPassword />
				</>
			),
		},
	]);

	return (
		<div className='dark:bg-gray-900 h-full min-h-screen duration-500 pb-5'>
			{/* max-w-[1280px] dark:border-red-500 border-pink-600*/}
			<section className='mx-auto h-full  pb-4'>
				{/* WARN: Don't Change or edit this */}
				{/* <NavBar /> */}
				<RouterProvider router={router} />
			</section>
		</div>
	);
};

export default App;
