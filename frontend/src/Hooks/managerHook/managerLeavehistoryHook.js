import { useState, useEffect } from "react"
import { fetchManagerLeaveHistory } from "../../services/History/managerHistory.js";
import { toast} from "react-toastify";


const managerLeavehistoryHook = () => {

  const [leavesHistory, setleavesHistory] = useState([]);
  const [addhistory, setaddhistory] = useState(true);



  //fetch usefect:-
  useEffect(() => {
    fetchAllManagerLeaveHistory();
  }, [])
  


  //fetchLeaveHistory:-
  const fetchAllManagerLeaveHistory = async() => {
    try {
      const result = await fetchManagerLeaveHistory();
      
      if(!result.success){
        return toast.error(result.message);
      }
      const leavelists = result.result.fetchAllHistoryManager;
      setleavesHistory(leavelists);
    } catch (error) {
      return toast.error(error.message);
    }
  }
  return (
    {
        leavesHistory,
        addhistory,
        fetchAllManagerLeaveHistory
    }
  )
}

export default managerLeavehistoryHook
