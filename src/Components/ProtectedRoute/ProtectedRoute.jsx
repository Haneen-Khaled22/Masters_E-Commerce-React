import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../Context/AuthContext";

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="flex justify-center items-center py-20">
          <span className="loader"></span>
        </div>; // أو spinner
  }

  if (!user) {
    toast.error("You must login first to see your cart");
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
