import { useState, useEffect } from "react"
import { deleteEmployeeLeave, fetchEmployeeLeave } from "../../services/Leave/employeLeaveService.js";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const myLeavesHook = () => {

    const navigate = useNavigate();
      const [myLeaves, setmyLeaves] = useState([]);
    
    
      //Fetching leaves:-
      const allLeavesshow = async () => {
        try {
          const result = await fetchEmployeeLeave();
          if (!result.success) {
            return toast.error(result.message);
          }
          setmyLeaves(result.result.fetchLeaves);
        } catch (error) {
          return toast.error(error.message);
        }
      }
    
    
      //fetchleaves:-
      useEffect(() => {
        allLeavesshow();
      }, [])
    
      
      //handle Edit Mode:-
      const HandleEditMode = (leaveId, leaveReason) => {
        toast.info("Edit Mode Enabled and Redirect your message to Input field section");
        navigate("/employee-Dashboard/applyleave", {state: {leaveId, leaveReason}})
      }
    
    
      //Handle Delete:-
      const HandleDelete = async(leaveId) => {
        try {
          const result = await deleteEmployeeLeave(leaveId);
          if(!result.success){
            return toast(result.message);
          }
          toast.success(result.message);
          await allLeavesshow();
        } catch (error) {
          return toast.error(error.message);
        }
      }
    
    
  return (
    {
        myLeaves,
        allLeavesshow,
        HandleEditMode,
        HandleDelete
    }
  )
}

export default myLeavesHook
