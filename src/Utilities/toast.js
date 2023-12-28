import { toast } from "react-toastify";

// Success toast
const showToast = (message, type) => {
   showToastMsg(message, type);
};

// Toast initialize
const showToastMsg = (message, type, loading) => {
   const toastMsg = toast.loading("");
   toast.update(toastMsg, {
      render: message,
      type: type,
      isLoading: loading ? true : false,
      autoClose: 1500,
   });
};

export { showToast };
