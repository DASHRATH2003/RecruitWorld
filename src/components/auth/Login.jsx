import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login, checkServerHealth } from "../../services/api";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [serverOnline, setServerOnline] = useState(true);
  const navigate = useNavigate();

  // Check server status on component mount
  useEffect(() => {
    const checkServer = async () => {
      const isOnline = await checkServerHealth();
      setServerOnline(isOnline);
      if (!isOnline) {
        setError("Server is currently unavailable. Please try again later.");
      }
    };
    checkServer();
  }, []);

  const handleChange = (e) => {
    if (!e || !e.target) return;

    const { name, value } = e.target;
    if (!name) return;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    if (!e || !e.preventDefault) return;
    e.preventDefault();

    if (!serverOnline) {
      setError("Server is currently unavailable. Please try again later.");
      return;
    }

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await login(formData.email, formData.password);

      if (response.success) {
        // Store both token and user data
        localStorage.setItem("token", response.token);
        localStorage.setItem("user", JSON.stringify(response.user));
        localStorage.setItem("isAuthenticated", "true");

        // Navigate based on user role
        if (response.user && response.user.role) {
          navigate(
            response.user.role === "admin" ? "/admin/dashboard" : "/dashboard"
          );
        } else {
          setError("Invalid user role received");
        }
      } else {
        setError(response.message || "Login failed. Please try again.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(
        err.message || "Failed to login. Please check your credentials."
      );

      // Re-check server status if login failed
      const isOnline = await checkServerHealth();
      setServerOnline(isOnline);
      if (!isOnline) {
        setError("Server is currently unavailable. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRememberMe = (e) => {
    if (!e || !e.target) return;
    // Handle remember me checkbox if needed
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e6f0ff] to-[#ffffff] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-xl">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-[#033A78]">Welcome Back</h2>
          <Link to="/" className="text-sm text-[#033A78] hover:underline">
            ← Back to Home
          </Link>
        </div>

        {!serverOnline && (
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded">
            <p>⚠ Server connection issues detected</p>
          </div>
        )}

        <form className="space-y-5" onSubmit={handleSubmit} noValidate>
          {error && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <span className="block sm:inline">{error}</span>
            </div>
          )}

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#033A78] focus:border-[#033A78] sm:text-sm"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              disabled={!serverOnline}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#033A78] focus:border-[#033A78] sm:text-sm"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              disabled={!serverOnline}
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-[#033A78] border-gray-300 rounded"
                onChange={handleRememberMe}
                disabled={!serverOnline}
              />
              <span className="ml-2 text-sm text-gray-700">Remember me</span>
            </label>
            <Link
              to="/forgot-password"
              className="text-sm text-[#033A78] hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading || !serverOnline}
            className={`w-full flex justify-center items-center gap-2 py-2 px-4 text-white text-sm font-semibold rounded-lg transition duration-200 ${
              loading || !serverOnline
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-[#033A78] to-[#0A2472] hover:from-[#0A2472] hover:to-[#022658]"
            }`}
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Signing in...
              </>
            ) : (
              <>
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
                Sign in
              </>
            )}
          </button>

          <p className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-[#033A78] font-medium hover:underline"
            >
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
