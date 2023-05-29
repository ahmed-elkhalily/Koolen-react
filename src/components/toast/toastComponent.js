import { toast } from 'react-toastify';

const autoClose = 5000;
const theme = 'light';

const toastData = {
    position: 'bottom-center',
    autoClose,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme,
};

export function toastSuccess(msg) {
    toast.success(msg, toastData);
}

export function toastError(msg) {
    toast.error(msg, toastData);
}
