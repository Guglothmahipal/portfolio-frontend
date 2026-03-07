import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Profile = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useUser();

  if (!isAuthenticated || !user) {
    return (
      <section className="min-h-screen pt-28 pb-16">
        <div className="max-w-md mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">Please login to view profile.</p>
          <button
            onClick={() => navigate("/auth?redirect=/profile")}
            className="rounded-full px-5 py-2.5 bg-black text-white dark:bg-white dark:text-black"
          >
            Login
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen pt-28 pb-16">
      <div className="max-w-2xl mx-auto px-4">
        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-neutral-950 p-6">
          <h1 className="text-2xl font-bold mb-4">My Profile</h1>
          <div className="space-y-2 text-sm">
            <p><span className="font-semibold">Name:</span> {user.name}</p>
            <p><span className="font-semibold">Email:</span> {user.email}</p>
          </div>

          <button
            onClick={() => {
              logout();
              navigate("/");
            }}
            className="mt-6 rounded-full px-5 py-2.5 border border-gray-300 dark:border-gray-700"
          >
            Logout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
