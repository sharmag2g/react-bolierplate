import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import Loader from "../components/utilities/Loader";
import SuperAdminRoutes from "./SuperAdminRoutes";
import AdminRoutes from "./AdminRoutes";
import UserRoutes from "./UserRoutes";
import PublicRoutes from './PublicRoutes'

const index = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Route path="/" element={UserRoutes} />
      {/* <Route path="/" element={SuperAdminRoutes} />
      <Route path="/" element={AdminRoutes} /> */}
    </Suspense>
  );
};

export default index;


// const routes = ({ isAuthenticated, userType }) => {
//   return (
//     <Suspense fallback={<Loader />}>
//       {
//         (isAuthenticated === true && userType === "SUPERADMIN")
//           ? <Route path="/" element={SuperAdminRoutes} /> :
//           (isAuthenticated === true && userType === "ADMIN")
//             ? <Route path="/" element={AdminRoutes} /> :
//             (isAuthenticated === true && userType === "USER")
//               ? <Route path="/" element={UserRoutes} /> :
//               <Route path="/" element={PublicRoutes} />
//       }
//     </Suspense>
//   )
// }

// export default routes;