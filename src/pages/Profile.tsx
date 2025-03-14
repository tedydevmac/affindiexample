import React from "react";
import { useAffinidiProfile } from "@affinidi/affinidi-react-auth";
const apiBaseUrl = "http://localhost:5173";

const Profile: React.FC = () => {
  const { isLoading, error, profile, handleLogout } = useAffinidiProfile({
    authCompleteUrl: `${apiBaseUrl}/api/affinidi-auth/complete`,
  });

  async function logout() {
    //clear session cookie
    handleLogout();
    window.location.href = "/";
  }

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Profile</h1>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}
      >
        <h3>User Profile</h3>
        <p style={{ textAlign: "left" }}>{JSON.stringify(profile, null, 4)}</p>
      </div>
      <button
        onClick={logout}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
