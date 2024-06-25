import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import User from "../components/User";
import { useAuth } from "../contexts/FakeAuthContext";
import classes from "./AppLayout.module.scss";
function AppLayout() {
  const { isAuthenticated } = useAuth();
  return (
    <div className={classes.app}>
      <Sidebar />
      <Map />
      {isAuthenticated && <User />}
    </div>
  );
}

export default AppLayout;
