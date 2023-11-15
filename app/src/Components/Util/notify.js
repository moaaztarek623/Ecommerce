import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const notify = (message, type) => {
    const information = {
      position: "top-center",
      autoClose: 7000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      progress: undefined,
      theme: "colored",
    }
    if (type === "success") {        
      toast.success(message, information)
    }else if (type === "error") {
      toast.error(message, information)
    }else if (type === "warning") {
      toast.warning(message, information)
    }
  };