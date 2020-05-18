import { toast } from "react-toastify";
import { generate } from "shortid";

export const generateId: number | string = generate();

export const toastShow = (text: string, typeToast: string): void => {
  toast[typeToast](`${text}`, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
  });
};
