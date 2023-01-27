import React, {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useState,
} from "react";
import "../styles/snackbar.css";

export type SnackBarHandle = {
    show: (msg: string) => void;
};

type SnackBarProps = {};

const SnackBar = forwardRef<SnackBarHandle, SnackBarProps>((props, ref) => {
    const [show, setShow] = useState<boolean>(false);
    const [notification, setNotification] = useState<string>("");

    // Imperative Handle hook so the parent component can get accessed to the following childre-function.
    useImperativeHandle(
        ref,
        () => {
            return {
                show(msg) {
                    setNotification(msg);
                    setShow(true);
                },
            };
        },
        []
    );

    // Run effect so the snackbar is auto-closed within few seconds.
    useEffect(() => {
        console.log('Snackbar is active.');
        
        // After 3 seconds, the snackbar is auto-closed.
        const id = setTimeout(() => {
            setShow(false);
        }, 3000);

        // Clean up timeout.
        return () => {
            clearTimeout(id);
            console.log('Snackbar is deactivated.')
        };
    }, [notification]);

    // At the beginning, this component will not be rendered.
    if (!show) {
        return null;
    }

    return (
        <div className="snack-container">
            <span>Snack time: {notification}</span>
        </div>
    );
});

export default SnackBar;
