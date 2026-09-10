import { useState, useEffect } from "react"
import { createEmployee, fetchEmployees, updateEmployee } from "../../services/employeeServices.js";
import { toast } from "react-toastify";

const profileHook = () => {

    const [createProfile, setcreateProfile] = useState({ name: "", department: "", designation: "" });
  const [isProfileCreated, setisProfileCreated] = useState(false);
  const [EditProfile, setEditProfile] = useState(false);
  const [employeeId, setemployeeId] = useState(null);
  


  //HandleInputValidation:-
  const HandleInputValidation = (e) => {
    setcreateProfile({ ...createProfile, [e.target.name]: e.target.value });
  }

  //HandleSubmit:-
  const HandleSaveprofileSubmit = async () => {
    try {
      if (!createProfile.name || !createProfile.department || !createProfile.designation) {
        return toast.error("Please Field Empty Column");
      }
      const result = await createEmployee(createProfile);
      if (!result.success) {
        return toast.error(result.message);
      }
      toast.success(result.message);
      setisProfileCreated(true);
      setEditProfile(false);
      await HandleFetchProfile();
    } catch (error) {
      return toast.error(error.message);
    }
  }



  //HandleFetchProfile:-
  const HandleFetchProfile = async () => {
    try {
      const result = await fetchEmployees();
      if (!result.success) {
        return toast.error(result.message);
      }
      const profile = result.result.fetchEmployee;
      setemployeeId(profile.empid);
      setcreateProfile({ name: profile.name, department: profile.department, designation: profile.designation });
      setisProfileCreated(true);
    } catch (error) {
      return toast.error(error.message);
    }
  }


  //Fetchprofile:-
  useEffect(() => {
    HandleFetchProfile();
  }, [])

  // HandleEditMode:-
  const HandleEditMode = () => {
    setEditProfile(true);
  }

  // //HandleUpdateProfile:-
  const HandleUpdateProfile = async (empId) => {
    try {
      const result = await updateEmployee(createProfile, empId);
      if (!result.success) {
        return toast.error(result.message);
      }
      toast.success(result.message);
      setEditProfile(false);
      await HandleFetchProfile();
    } catch (error) {
      return toast.error(error.message);
    }
  }
  return (
    {
        createProfile,
        isProfileCreated,
        EditProfile,
        employeeId,
        HandleInputValidation,
        HandleSaveprofileSubmit,
        HandleFetchProfile,
        HandleEditMode,
        HandleUpdateProfile
    }
  )
}

export default profileHook
