import React from "react";
import NotRegistered from "./components/notRegistered/NotRegistered";
import Donor from "./components/donor/Donor";
import Distributor from "./components/distributor/Distributor";

const Home = () => {
  const logout = true;

  const userType = "donor";

  return (
    <div>
      {logout ? (
        <NotRegistered />
      ) : userType === "donor" ? (
        <Donor />
      ) : (
        <Distributor />
      )}
    </div>
  );
};

export default Home;
