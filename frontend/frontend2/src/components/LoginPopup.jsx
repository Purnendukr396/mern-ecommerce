import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const LoginPopup = () => {
  const navigate = useNavigate();

  const showLoginPopup = () => {
    Swal.fire({
      icon: "warning",
      title: "Login Required",
      text: "Please login first to continue.",
      confirmButtonText: "Login",
      showCancelButton: true,
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login");
      }
    });
  };

  return { showLoginPopup };
};

export default LoginPopup;