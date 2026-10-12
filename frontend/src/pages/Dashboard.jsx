import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">User Dashboard</h1>
        <p className="text-sm text-gray-600 mt-1">
          Welcome back, <span className="font-semibold text-gray-800">{user?.name}</span>!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* User Profile Card */}
        <div className="md:col-span-2 bg-white rounded-lg border border-gray-200 shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            Account Details
          </h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-gray-500 font-medium">Full Name</dt>
              <dd className="text-gray-900 font-semibold mt-1">{user?.name}</dd>
            </div>
            <div>
              <dt className="text-gray-500 font-medium">Email Address</dt>
              <dd className="text-gray-900 font-semibold mt-1">{user?.email}</dd>
            </div>
            <div>
              <dt className="text-gray-500 font-medium">Assigned Role</dt>
              <dd className="mt-1">
                <span
                  className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold capitalize ${
                    user?.role === 'admin'
                      ? 'bg-purple-100 text-purple-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}
                >
                  {user?.role}
                </span>
              </dd>
            </div>
            <div>
              <dt className="text-gray-500 font-medium">User ID</dt>
              <dd className="text-gray-600 font-mono text-xs mt-1 truncate">{user?._id}</dd>
            </div>
          </dl>

          <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-3">
            <Link
              to="/profile"
              className="text-sm bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              Edit Profile
            </Link>
            {user?.role === 'admin' && (
              <Link
                to="/admin"
                className="text-sm bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Go to Admin Panel
              </Link>
            )}
          </div>
        </div>

        {/* Security & Access Card */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">
            Security Overview
          </h2>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span>JWT session active</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span>Server-verified identity</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span>Bcrypt hashed password</span>
            </li>
          </ul>

          <div className="mt-6 p-3 bg-gray-50 rounded-md text-xs text-gray-600 border border-gray-200">
            <p className="font-semibold text-gray-700 mb-1">Access Level:</p>
            {user?.role === 'admin' ? (
              <p>You have full administrative privileges to view and manage registered users.</p>
            ) : (
              <p>You have standard user privileges with access to your private profile and dashboard.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
