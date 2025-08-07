import { Outlet } from "react-router-dom";
// import Dashboard from "./pages/Dashboard/dashboard";
import { Toaster } from 'react-hot-toast';
function App() {
  return(
    <>
  <Toaster
        position="top-right"
        reverseOrder={false}
      />
   <Outlet />
   </>
  )
}

export default App;
