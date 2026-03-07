import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <Outlet />
    </div>
  );
};

export default AdminLayout;

