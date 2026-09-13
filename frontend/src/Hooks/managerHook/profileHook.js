import { useState, useEffect } from "react"
import { toast} from "react-toastify"
import { createManager, fetchManager, updateManager } from "../../services/managerServices.js";

const profileHook = () => {

  const [createProfile, setcreateProfile] = useState({ name: "", department: "", designation: "" });
  const [isProfileCreated, setisProfileCreated] = useState(false);
  const [EditProfile, setEditProfile] = useState(false);
  const [managerId, setmanagerId] = useState(null);


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
      const result = await createManager(createProfile);
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
      const result = await fetchManager();
      if (!result.success) {
        return toast.error(result.message);
      }
      const profile = result.result.managerFetch;
      setmanagerId(profile.managerid);
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
  const HandleUpdateProfile = async (managerId) => {
    try {
      const result = await updateManager(createProfile, managerId);
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
        managerId,
        HandleInputValidation,
        HandleSaveprofileSubmit,
        HandleFetchProfile,
        HandleEditMode,
        HandleUpdateProfile
    }
  )
}

export default profileHook
