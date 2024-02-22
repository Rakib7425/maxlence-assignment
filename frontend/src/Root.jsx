import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import "./app.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store.js";
import { ToastContainer } from "react-toastify";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import NavBar from "./components/NavBar.jsx";
import Register from "./pages/Register.jsx";
import UserProfile from "./components/UserProfile.jsx";
import Profile from "./pages/Profile.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<NavBar />
				<App />
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

const Root = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={<h1>Loading...</h1>} persistor={persistor}>
				<ToastContainer
					theme='colored'
					toastStyle={{ color: "black", fontSize: "1.09rem" }}
					closeButton
					draggable
					position='top-right'
					autoClose={2000}
				/>
				<div className='dark:bg-gray-900 h-full min-h-screen duration-500 pb-5'>
					{/* max-w-[1280px] dark:border-red-500 border-pink-600*/}
					<section className='mx-auto h-full  pb-4'>
						<RouterProvider router={router} />
					</section>
				</div>
			</PersistGate>
		</Provider>
	);
};

export default Root;
