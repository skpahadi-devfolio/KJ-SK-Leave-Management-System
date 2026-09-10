import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { loginAPI } from '../../services/authService.js';
import { toast } from 'react-toastify';

const useLogin = () => {

    const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  //HandleSubmitFunction:-
  const onSubmit = async (data) => {
    try {
      const result = await loginAPI(data);
      if (!result.success) {
        return toast.error(result.message);
      }
      toast.success(result.message);

      //check role and than open dashboard according to role:-
      const role = result.result.user.role;

      if(role === 'manager'){
        setTimeout(() => {
        navigate("/manager-Dashboard");
      }, 3000);
      }
      else{
        setTimeout(() => {
          navigate("/employee-Dashboard");
        }, 3000);
      }
    } catch (errors) {
      return toast.error(errors.message);
    }
  }
  return (
    {
        register,
        handleSubmit,
        errors,
        isSubmitting,
        onSubmit
    }
  )
}

export default useLogin
