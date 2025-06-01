import { toast, ToastOptions } from "react-toastify";

const defaultOptions: ToastOptions = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};

export const showToast = {
  success: (message: string, options?: ToastOptions) => {
    toast.success(message, { ...defaultOptions, ...options });
  },

  error: (message: string, options?: ToastOptions) => {
    toast.error(message, { ...defaultOptions, ...options });
  },

  info: (message: string, options?: ToastOptions) => {
    toast.info(message, { ...defaultOptions, ...options });
  },

  warning: (message: string, options?: ToastOptions) => {
    toast.warning(message, { ...defaultOptions, ...options });
  },

  custom: (message: string, options?: ToastOptions) => {
    toast(message, { ...defaultOptions, ...options });
  },

  dismiss: () => {
    toast.dismiss();
  },

  customStyled: (message: string, options?: ToastOptions) => {
    toast(message, {
      ...defaultOptions,
      ...options,
      style: {
        background: "#333",
        color: "#fff",
        borderRadius: "8px",
        padding: "16px",
        fontSize: "14px",
        ...options?.style,
      },
    });
  },

  promise: (
    promise: Promise<any>,
    messages: {
      pending: string;
      success: string;
      error: string;
    }
  ) => {
    return toast.promise(promise, messages, defaultOptions);
  },
};

export default showToast;
