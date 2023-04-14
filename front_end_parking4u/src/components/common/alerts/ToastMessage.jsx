import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function ToastMessage({ message, type }) {

    const showToast = () => {
        const toastId = 'my-toast-id'; // <= agrega un ID para el mensaje

        switch (type) {
            case 'success':
                toast.success(message, { toastId }); // <= especifica el mismo ID para ambos mensajes
                break;
            case 'error':
                toast.error(message, {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    toastId // <= especifica el mismo ID para ambos mensajes
                });
                break;
            case 'warning':
                toast.warning(message, { toastId });
                break;
            default:
                toast.info(message, { toastId });
                break;
        }
    };

    showToast();

    return (
        <div>
            <ToastContainer />
        </div>
    );
}