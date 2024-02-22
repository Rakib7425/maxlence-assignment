import { useNavigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner.jsx";

const App = () => {
	const navigate = useNavigate();
	const user = useSelector((store) => store.user.userDetails);
	// console.log(user);
	const isLoading = useSelector((store) => store.user.isLoading);

	useEffect(() => {
		if (!user) {
			toast.warn(`You are not logged in!`);
			navigate("/login");
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);

	return (
		<>
			{isLoading ? <Spinner /> : ""}
			<Dashboard />
		</>
	);
};

export default App;
