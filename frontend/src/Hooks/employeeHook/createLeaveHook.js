import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import { createEmployeeleaves, updateEmployeeLeave } from "../../services/Leave/employeLeaveService";
import { useLocation } from "react-router-dom";

const createLeaveHook = () => {

  const location = useLocation();
  const [applyleave, setapplyleave] = useState({leaveReason: ""});
  const [leaveID, setleaveID] = useState(null);
  const [isEditing, setisEditing] = useState(false);


  //useffect for editing of leave check:-
  useEffect(() => {
    if(location.state?.leaveId){
      setleaveID(location.state.leaveId);
      setapplyleave({leaveReason: location.state.leaveReason});
      setisEditing(true);
    }
  }, [location.state]);
  

  //HandleInputValidation:-
  const HandleInputValidation = (e) => {
    setapplyleave({...applyleave, [e.target.name]:e.target.value});
  }


  //HandleSubmit:-
  const HandleLeaveSubmit = async() => {
    try {
      if(!applyleave.leaveReason){
        return toast.error("Please Field Leave Column");
      }
      const result = await createEmployeeleaves(applyleave);
      if(!result.success){
        return toast.error(result.message);
      }
      toast.success(result.message);
      setapplyleave({leaveReason: ""});
    } catch (error) {
      return toast.error(error.message);
    }
  }



  //Handle Update:-
  const HandleUpdate = async(leaveId, leaveReason) => {
    try {
      const result = await updateEmployeeLeave(applyleave, leaveId, leaveReason);
      if(!result.success){
        return toast.error(result.message);
      }
      toast.success(result.message);
      setapplyleave({leaveReason: ""});
    } catch (error) {
      return toast.error(error.message);
    }
  }
  return (
    {
        applyleave,
        leaveID, 
        isEditing,
        HandleInputValidation,
        HandleLeaveSubmit,
        HandleUpdate
    }
  )
}

export default createLeaveHook
