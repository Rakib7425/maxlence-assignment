import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store.js";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import "./app.css";

const Root = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={<h1>Loading...</h1>} persistor={persistor}>
				<ToastContainer theme='colored' position='top-right' autoClose={2000} />
				<App />
			</PersistGate>
		</Provider>
	);
};

export default Root;
