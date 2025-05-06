import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppSix from "./AppSix";
// import AppFour from './AppFour'
// import AppTwoOne from './AppTwoOne'
// import App from './App.jsx'
// import AppTwo from './AppTwo.jsx'
// import AppThree from './AppThree.jsx'
// import AppFive from "./AppFive";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <AppTwo /> */}
    {/* <AppTwoOne /> */}
    {/* <AppThree /> */}
    {/* <AppFour /> */}
    {/* <AppFive /> */}
    <AppSix />
  </StrictMode>
);
