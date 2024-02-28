
const handleModelClose = (setterFunction, ref) => {
    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setterFunction(false);
        }
    };

    const handleEscapeKey = (event) => {
        if (event.key === "Escape") {
            setterFunction(false);
        }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("keydown", handleEscapeKey);
    };
}

export default handleModelClose;