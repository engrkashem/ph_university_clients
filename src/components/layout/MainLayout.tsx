import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";

const { Header, Content } = Layout;

/**

const items: MenuProps["items"] = [
  {
    key: "Dashboard",
    label: <NavLink to={"/admin/dashboard"}>Dashboard</NavLink>,
  },
  {
    key: "User management",
    label: "User management",
    children: [
      {
        key: "Create Admin",
        label: <NavLink to={"/admin/create-admin"}>create admin</NavLink>,
      },
      {
        key: "Create Student",
        label: <NavLink to={"/admin/create-student"}>create student</NavLink>,
      },
      {
        key: "Create Faculty",
        label: <NavLink to={"/admin/create-faculty"}>create faculty</NavLink>,
      },
    ],
  },
];


 */

const MainLayout = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <Layout style={{ height: "100%" }}>
      <SideBar />
      <Layout>
        <Header>
          <Button onClick={handleLogout}>Logout</Button>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
