import { signupAPI } from '../../services/authService.js'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const useSignup = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  //HandleSubmitFunction:-
  const onSubmit = async (data) => {
    try {
      const result = await signupAPI(data);
      if (!result.success) {
        return toast.error(result.message);
      }
      toast.success(result.message);
      setTimeout(() => {
        navigate("/login")
      }, 2000);
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

export default useSignup
