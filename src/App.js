//single selection
//multiple selection
import { Button } from "@mui/material";

import { useState } from "react";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/profile";
export default function App() {


  return (
    <>
    <UserContextProvider>
<Login/>
<Profile/>
    </UserContextProvider>
     </>
  );
}