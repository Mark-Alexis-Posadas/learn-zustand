import React from "react";
import { userUserProfile } from "./useUserProfile";

export const UserProfile = () => {
  const { userProfile, setUserProfile } = userUserProfile();
  console.log(userProfile);

  const handleProfileChange = () => {
    setUserProfile({
      firstName: "Juan",
      lastName: "Tamad",
      email: "juantamad@gmail.com",
    });
  };
  return (
    <div>
      <h1>User Profile</h1>
      <p>first name: {userProfile.firstName}</p>
      <p>middle name: {userProfile.middleName}</p>
      <p>last name: {userProfile.lastName}</p>
      <p>Email: {userProfile.email}</p>
      <button onClick={handleProfileChange}>Change Profile</button>
    </div>
  );
};
