import { useState, useEffect } from "react"
import { fetchManagerApproval, updateManagerApproval } from "../../services/Leave/managerLeaveService.js";
import { toast} from "react-toastify";
const managerApprovalHook = () => {

    const [allleavesApproved, setallleavesApproved] = useState([]);
  const [leaveApproved, setleaveApproved] = useState({});

  //fetch all employees leaves:-
  const fetchAllEmployeeleavesAproved = async() => {
    try {
      const result = await fetchManagerApproval();
      if(!result.success){
        return toast.error(result.message);
      }
      const fetchingLeaves = result.result.fetchleavesControl;
      setallleavesApproved(fetchingLeaves);
      console.log(fetchingLeaves)
    } catch (error) {
      return toast.error(error.message);
    }
  }


  //fetch ALl leaves:-
  useEffect(() => {
    fetchAllEmployeeleavesAproved();
  }, []);
  

  //InputValid:-
  const UpdateInputHandle = (leaveId, value) => {
    setleaveApproved({...leaveApproved, [leaveId]:value});
  }

  //HandleUpdateSubmit:-
  const HandleInputUpdateSubmit = async(leaveId, status) => {
    try {
      const result = await updateManagerApproval({status: status, leaveApproval: leaveApproved[leaveId] || ""}, leaveId);
      if(!result.success){
        return toast.error(result.message);
      }
      toast.success(result.message);
      setleaveApproved({...leaveApproved,[leaveId]: ""});
    } catch (error) {
      return toast.error(error.message);
    }
  }
  return (
    {
        allleavesApproved,
        leaveApproved,
        fetchAllEmployeeleavesAproved,
        UpdateInputHandle,
        HandleInputUpdateSubmit
    }
  )
}

export default managerApprovalHook
