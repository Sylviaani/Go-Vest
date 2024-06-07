import React from "react";

const StartupDashboard = () => {
  return (
    <div>
      <h2>Welcome to the Startup Dashboard 👋</h2>
      <p>This page is still under development 😔</p>
      <br />
      Watch this cooking video instead 😄
      <video
        src="public/cooking.mp4"
        alt="cooking video"
        width="500px"
        controls
      ></video>
    </div>
  );
};

export default StartupDashboard;
