import React, { useState, useEffect } from "react";
import {
  User,
  DollarSign,
  Calendar,
  FileText,
  Bell,
  Settings,
  Users,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Upload,
  Calculator,
  CreditCard,
  PieChart,
  BarChart3,
  Download,
  Eye,
  Edit,
  Trash2,
  Plus,
  Search,
  Filter,
  Menu,
  X,
  Home,
  LogOut,
  Shield,
  EyeOff,
  FileCheck,
  Star,
  Award,
  TrendingDown,
} from "lucide-react";

// Demo passwords for the application
const demoCredentials = [
  { email: "john@example.com", password: "user123", role: "user" },
  { email: "jane@example.com", password: "user456", role: "user" },
  { email: "admin@loanplatform.com", password: "admin123", role: "admin" },
];

const FinTechLoanPlatform = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [activeView, setActiveView] = useState("login");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loans, setLoans] = useState([
    {
      id: 1,
      userId: 1,
      amount: 50000,
      tenure: 12,
      interestRate: 2.5,
      status: "active",
      appliedDate: "2024-01-15",
      approvedDate: "2024-01-17",
      startDate: "2024-02-01",
      nextDue: "2024-09-01",
      paidEMIs: 7,
      totalEMIs: 12,
      emiAmount: 4458,
      documents: {
        idProof: "passport_john.pdf",
        incomeProof: "salary_slip.pdf",
      },
    },
    {
      id: 2,
      userId: 2,
      amount: 25000,
      tenure: 6,
      interestRate: 2.5,
      status: "pending",
      appliedDate: "2024-08-20",
      approvedDate: null,
      startDate: null,
      nextDue: null,
      paidEMIs: 0,
      totalEMIs: 6,
      emiAmount: 4458,
      documents: {
        idProof: "license_jane.pdf",
        incomeProof: "bank_statement.pdf",
      },
    },
  ]);

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "+1234567890",
      idProof: "passport_john.pdf",
      role: "user",
      status: "active",
      joinedDate: "2024-01-10",
      creditScore: 750,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+1234567891",
      idProof: "license_jane.pdf",
      role: "user",
      status: "pending",
      joinedDate: "2024-08-15",
      creditScore: 680,
    },
    {
      id: 3,
      name: "Admin User",
      email: "admin@loanplatform.com",
      phone: "+1234567892",
      role: "admin",
      status: "active",
      joinedDate: "2023-12-01",
      creditScore: null,
    },
  ]);

  const [interestRate, setInterestRate] = useState(2.5);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "EMI due in 3 days",
      type: "warning",
      date: "2024-08-26",
      read: false,
    },
    {
      id: 2,
      message: "Loan application approved",
      type: "success",
      date: "2024-08-25",
      read: false,
    },
    {
      id: 3,
      message: "New feature: Auto-pay enabled",
      type: "info",
      date: "2024-08-24",
      read: true,
    },
  ]);

  // Login Component with Enhanced UI
  const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      setError("");

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const credential = demoCredentials.find(
        (cred) => cred.email === email && cred.password === password
      );

      if (!credential) {
        setError("Invalid email or password");
        setIsLoading(false);
        return;
      }

      if (isAdmin && credential.role !== "admin") {
        setError("Admin access required");
        setIsLoading(false);
        return;
      }

      if (!isAdmin && credential.role === "admin") {
        setError('Please check "Login as Admin" for admin access');
        setIsLoading(false);
        return;
      }

      const user = users.find((u) => u.email === email);
      if (user) {
        setCurrentUser(user);
        setActiveView(
          credential.role === "admin" ? "admin-dashboard" : "user-dashboard"
        );
      }

      setIsLoading(false);
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-10 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-md border border-white/20 relative z-10">
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <DollarSign className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">FinLend Pro</h1>
            <p className="text-blue-200">Smart Loan Management Platform</p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-200 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-blue-100 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-blue-100 mb-2">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 pr-12 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-blue-200 hover:text-white transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="admin"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded bg-white/10"
              />
              <label
                htmlFor="admin"
                className="ml-2 block text-sm text-blue-100"
              >
                Login as Administrator
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-xl hover:from-blue-600 hover:to-purple-700 transition duration-300 font-semibold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Signing In...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <p className="text-sm text-blue-100 mb-3 font-medium">
                Demo Credentials:
              </p>
              <div className="space-y-2 text-xs">
                {demoCredentials.map((cred, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center text-blue-200"
                  >
                    <span>{cred.email}</span>
                    <span className="font-mono bg-white/10 px-2 py-1 rounded">
                      {cred.password}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Enhanced Sidebar Component
  const Sidebar = ({ isOpen, onClose, userRole }) => {
    const userMenuItems = [
      { id: "user-dashboard", label: "Dashboard", icon: Home, badge: null },
      { id: "apply-loan", label: "Apply for Loan", icon: Plus, badge: "New" },
      {
        id: "emi-calculator",
        label: "EMI Calculator",
        icon: Calculator,
        badge: null,
      },
      {
        id: "payment-history",
        label: "Payment History",
        icon: CreditCard,
        badge: null,
      },
      {
        id: "notifications",
        label: "Notifications",
        icon: Bell,
        badge: notifications.filter((n) => !n.read).length || null,
      },
    ];

    const adminMenuItems = [
      { id: "admin-dashboard", label: "Dashboard", icon: Home, badge: null },
      {
        id: "loan-applications",
        label: "Loan Applications",
        icon: FileText,
        badge: loans.filter((l) => l.status === "pending").length || null,
      },
      {
        id: "customer-management",
        label: "Customers",
        icon: Users,
        badge: null,
      },
      {
        id: "loan-management",
        label: "Active Loans",
        icon: DollarSign,
        badge: null,
      },
      {
        id: "interest-settings",
        label: "Interest Settings",
        icon: Settings,
        badge: null,
      },
      { id: "reports", label: "Reports", icon: BarChart3, badge: null },
    ];

    const menuItems = userRole === "admin" ? adminMenuItems : userMenuItems;

    return (
      <>
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden backdrop-blur-sm"
            onClick={onClose}
          />
        )}
        <div
          className={`
          fixed left-0 top-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-all duration-300 ease-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:z-0 border-r border-gray-100
        `}
        >
          <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
                  <DollarSign className="w-7 h-7 text-white" />
                </div>
                <div className="ml-3">
                  <h2 className="text-xl font-bold text-gray-900">
                    FinLend Pro
                  </h2>
                  <p className="text-xs text-gray-500">v2.0 Enhanced</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="lg:hidden p-2 hover:bg-white/50 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>

          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-900 text-sm">
                  {currentUser?.name}
                </div>
                <div className="text-xs text-gray-500 capitalize flex items-center">
                  {currentUser?.role}
                  {currentUser?.role === "admin" && (
                    <Shield className="w-3 h-3 ml-1" />
                  )}
                </div>
              </div>
            </div>
          </div>

          <nav className="p-4 flex-1">
            <ul className="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        setActiveView(item.id);
                        onClose();
                      }}
                      className={`
                        w-full flex items-center justify-between px-4 py-3 text-left rounded-xl transition-all duration-200 group
                        ${
                          activeView === item.id
                            ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105"
                            : "text-gray-700 hover:bg-gray-50 hover:scale-102"
                        }
                      `}
                    >
                      <div className="flex items-center">
                        <Icon
                          className={`w-5 h-5 mr-3 ${
                            activeView === item.id
                              ? "text-white"
                              : "text-gray-400 group-hover:text-gray-600"
                          }`}
                        />
                        <span className="font-medium">{item.label}</span>
                      </div>
                      {item.badge && (
                        <span
                          className={`
                          px-2 py-1 text-xs font-bold rounded-full
                          ${
                            activeView === item.id
                              ? "bg-white/20 text-white"
                              : item.badge === "New"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }
                        `}
                        >
                          {item.badge}
                        </span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="p-4 border-t border-gray-100">
            <button
              onClick={() => {
                setCurrentUser(null);
                setActiveView("login");
              }}
              className="w-full flex items-center px-4 py-3 text-left rounded-xl text-red-600 hover:bg-red-50 transition-all duration-200 font-medium"
            >
              <LogOut className="w-5 h-5 mr-3" />
              Logout
            </button>
          </div>
        </div>
      </>
    );
  };

  // Enhanced Header Component
  const Header = () => {
    const unreadCount = notifications.filter((n) => !n.read).length;

    return (
      <header className=" shadow-sm border-b border-gray-100 px-6 py-4 sticky top-0 z-30 backdrop-blur-sm bg-white/95">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden mr-4 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {currentUser?.role === "admin"
                  ? "Admin Dashboard"
                  : "My Dashboard"}
              </h1>
              <p className="text-sm text-gray-500">
                Welcome back, {currentUser?.name}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200"
                onClick={() => setActiveView("notifications")}
              >
                <Bell className="w-6 h-6" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold animate-pulse">
                    {unreadCount}
                  </span>
                )}
              </button>
            </div>

            <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <User className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-sm font-semibold text-gray-900">
                  {currentUser?.name}
                </span>
                <div className="text-xs text-gray-500 capitalize flex items-center">
                  {currentUser?.role}
                  {currentUser?.role === "admin" && (
                    <Shield className="w-3 h-3 ml-1" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  };

  // Enhanced User Dashboard
  const UserDashboard = () => {
    const userLoan = loans.find((loan) => loan.userId === currentUser?.id);
    const user = users.find((u) => u.id === currentUser?.id);

    return (
      <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-2">
                Welcome back, {currentUser?.name}! 👋
              </h2>
              <p className="text-blue-100">
                Manage your loans and track your financial journey
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-blue-100">Credit Score</div>
              <div className="text-2xl font-bold flex items-center">
                {user?.creditScore || "N/A"}
                <Star className="w-5 h-5 ml-1" />
              </div>
            </div>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-green-400 to-green-600 p-4 rounded-xl shadow-lg">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Loan</p>
                <p className="text-3xl font-bold text-gray-900">
                  ₹{userLoan?.amount?.toLocaleString() || "0"}
                </p>
                <p className="text-xs text-green-600 mt-1">
                  {userLoan
                    ? `${userLoan.tenure} months tenure`
                    : "No active loan"}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-4 rounded-xl shadow-lg">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">
                  Next EMI Due
                </p>
                <p className="text-xl font-bold text-gray-900">
                  {userLoan?.nextDue
                    ? new Date(userLoan.nextDue).toLocaleDateString("en-IN")
                    : "N/A"}
                </p>
                <p className="text-xs text-blue-600 mt-1">
                  {userLoan && userLoan.nextDue
                    ? `In ${Math.ceil(
                        (new Date(userLoan.nextDue) - new Date()) /
                          (1000 * 60 * 60 * 24)
                      )} days`
                    : "No upcoming dues"}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-purple-400 to-purple-600 p-4 rounded-xl shadow-lg">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Monthly EMI</p>
                <p className="text-3xl font-bold text-gray-900">
                  ₹{userLoan?.emiAmount?.toLocaleString() || "0"}
                </p>
                <p className="text-xs text-purple-600 mt-1">
                  @ {userLoan?.interestRate || 0}% interest
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Loan Progress */}
        {userLoan && (
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Loan Progress
              </h3>
              <div className="text-right">
                <div className="text-3xl font-bold text-green-600">
                  {Math.round((userLoan.paidEMIs / userLoan.totalEMIs) * 100)}%
                </div>
                <div className="text-sm text-gray-500">Complete</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between text-sm text-gray-600">
                <span>
                  EMIs Paid: {userLoan.paidEMIs}/{userLoan.totalEMIs}
                </span>
                <span>
                  Remaining: {userLoan.totalEMIs - userLoan.paidEMIs} EMIs
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 shadow-inner">
                <div
                  className="bg-gradient-to-r from-green-400 to-green-600 h-4 rounded-full shadow-lg transition-all duration-1000 ease-out"
                  style={{
                    width: `${(userLoan.paidEMIs / userLoan.totalEMIs) * 100}%`,
                  }}
                />
              </div>
              <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-gray-100">
                <div className="text-center">
                  <div className="text-sm text-gray-600">Amount Paid</div>
                  <div className="font-bold text-green-600">
                    ₹{(userLoan.paidEMIs * userLoan.emiAmount).toLocaleString()}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600">Remaining</div>
                  <div className="font-bold text-orange-600">
                    ₹
                    {(
                      (userLoan.totalEMIs - userLoan.paidEMIs) *
                      userLoan.emiAmount
                    ).toLocaleString()}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600">Total Interest</div>
                  <div className="font-bold text-purple-600">
                    ₹
                    {(
                      userLoan.totalEMIs * userLoan.emiAmount -
                      userLoan.amount
                    ).toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              id: "apply-loan",
              label: "Apply New Loan",
              icon: Plus,
              color: "from-blue-500 to-blue-600",
              disabled: !!userLoan,
            },
            {
              id: "emi-calculator",
              label: "EMI Calculator",
              icon: Calculator,
              color: "from-purple-500 to-purple-600",
            },
            {
              id: "payment-history",
              label: "Payment History",
              icon: CreditCard,
              color: "from-green-500 to-green-600",
            },
            {
              id: "notifications",
              label: "Notifications",
              icon: Bell,
              color: "from-orange-500 to-orange-600",
            },
          ].map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.id}
                onClick={() => !action.disabled && setActiveView(action.id)}
                disabled={action.disabled}
                className={`
                  p-6 rounded-2xl shadow-lg border border-gray-100 transition-all duration-200 hover:shadow-xl group
                  ${
                    action.disabled
                      ? "opacity-50 cursor-not-allowed bg-gray-100"
                      : `bg-gradient-to-r ${action.color} hover:scale-105`
                  }
                `}
              >
                <div className="flex flex-col items-center text-center">
                  <Icon
                    className={`w-8 h-8 mb-3 ${
                      action.disabled ? "text-gray-400" : "text-white"
                    }`}
                  />
                  <span
                    className={`font-medium ${
                      action.disabled ? "text-gray-500" : "text-white"
                    }`}
                  >
                    {action.label}
                  </span>
                  {action.disabled && (
                    <span className="text-xs text-gray-400 mt-1">
                      Active loan exists
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Recent Notifications */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">
              Recent Notifications
            </h3>
            <button
              onClick={() => setActiveView("notifications")}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              View All
            </button>
          </div>
          <div className="space-y-4">
            {notifications.slice(0, 3).map((notification) => (
              <div
                key={notification.id}
                className={`flex items-center p-4 rounded-xl transition-all ${
                  !notification.read
                    ? "bg-blue-50 border border-blue-100"
                    : "bg-gray-50"
                }`}
              >
                <div
                  className={`p-3 rounded-full ${
                    notification.type === "warning"
                      ? "bg-yellow-100"
                      : notification.type === "success"
                      ? "bg-green-100"
                      : "bg-blue-100"
                  }`}
                >
                  {notification.type === "warning" ? (
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                  ) : notification.type === "success" ? (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  ) : (
                    <Bell className="w-5 h-5 text-blue-600" />
                  )}
                </div>
                <div className="ml-4 flex-1">
                  <p
                    className={`text-sm font-medium ${
                      !notification.read ? "text-gray-900" : "text-gray-700"
                    }`}
                  >
                    {notification.message}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(notification.date).toLocaleDateString("en-IN")}
                  </p>
                </div>
                {!notification.read && (
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Enhanced Loan Application Form with File Upload
  const LoanApplicationForm = () => {
    const [formData, setFormData] = useState({
      name: currentUser?.name || "",
      email: currentUser?.email || "",
      phone: currentUser?.phone || "",
      amount: "",
      tenure: "",
      purpose: "",
      income: "",
      idProof: null,
      incomeProof: null,
    });

    const [uploadedFiles, setUploadedFiles] = useState({
      idProof: null,
      incomeProof: null,
    });

    const [dragActive, setDragActive] = useState({
      idProof: false,
      incomeProof: false,
    });

    const handleFileUpload = (type, file) => {
      if (file) {
        setUploadedFiles((prev) => ({ ...prev, [type]: file }));
        setFormData((prev) => ({ ...prev, [type]: file }));
      }
    };

    const handleDrag = (e, type) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.type === "dragenter" || e.type === "dragover") {
        setDragActive((prev) => ({ ...prev, [type]: true }));
      } else if (e.type === "dragleave") {
        setDragActive((prev) => ({ ...prev, [type]: false }));
      }
    };

    const handleDrop = (e, type) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive((prev) => ({ ...prev, [type]: false }));

      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleFileUpload(type, e.dataTransfer.files[0]);
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const newLoan = {
        id: loans.length + 1,
        userId: currentUser.id,
        amount: parseFloat(formData.amount),
        tenure: parseInt(formData.tenure),
        interestRate: interestRate,
        status: "pending",
        appliedDate: new Date().toISOString().split("T")[0],
        approvedDate: null,
        startDate: null,
        nextDue: null,
        paidEMIs: 0,
        totalEMIs: parseInt(formData.tenure),
        emiAmount: calculateEMI(
          parseFloat(formData.amount),
          interestRate,
          parseInt(formData.tenure)
        ),
        documents: {
          idProof: uploadedFiles.idProof?.name || "No file uploaded",
          incomeProof: uploadedFiles.incomeProof?.name || "No file uploaded",
        },
      };

      setLoans([...loans, newLoan]);
      alert(
        "Loan application submitted successfully! You will be notified once it is reviewed."
      );
      setActiveView("user-dashboard");
    };

    const calculateEMI = (amount, rate, tenure) => {
      const monthlyRate = rate / 100;
      const emi =
        (amount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
        (Math.pow(1 + monthlyRate, tenure) - 1);
      return Math.round(emi);
    };

    const FileUploadArea = ({ type, label, accept }) => (
      <div
        className={`border-2 border-dashed rounded-xl p-6 text-center transition-all duration-200 ${
          dragActive[type]
            ? "border-blue-400 bg-blue-50"
            : uploadedFiles[type]
            ? "border-green-400 bg-green-50"
            : "border-gray-300 hover:border-gray-400 hover:bg-gray-50"
        }`}
        onDragEnter={(e) => handleDrag(e, type)}
        onDragLeave={(e) => handleDrag(e, type)}
        onDragOver={(e) => handleDrag(e, type)}
        onDrop={(e) => handleDrop(e, type)}
      >
        {uploadedFiles[type] ? (
          <div className="flex flex-col items-center">
            <FileCheck className="w-8 h-8 text-green-500 mb-2" />
            <p className="text-sm font-medium text-green-700">
              {uploadedFiles[type].name}
            </p>
            <p className="text-xs text-green-600 mt-1">
              File uploaded successfully
            </p>
            <button
              type="button"
              onClick={() => {
                setUploadedFiles((prev) => ({ ...prev, [type]: null }));
                setFormData((prev) => ({ ...prev, [type]: null }));
              }}
              className="text-xs text-red-600 hover:text-red-700 mt-2"
            >
              Remove file
            </button>
          </div>
        ) : (
          <>
            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-700">{label}</p>
            <p className="text-xs text-gray-500 mt-1">
              Click to upload or drag and drop
            </p>
            <p className="text-xs text-gray-400 mt-1">
              PDF, PNG, JPG up to 10MB
            </p>
          </>
        )}
        <input
          type="file"
          className="hidden"
          accept={accept}
          onChange={(e) =>
            e.target.files[0] && handleFileUpload(type, e.target.files[0])
          }
          onClick={(e) => (e.target.value = null)}
        />
      </div>
    );

    const estimatedEMI =
      formData.amount && formData.tenure
        ? calculateEMI(
            parseFloat(formData.amount),
            interestRate,
            parseInt(formData.tenure)
          )
        : 0;

    return (
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Apply for Loan
              </h2>
              <p className="text-gray-600">
                Fill in the details below to submit your loan application
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <User className="w-5 h-5 mr-2 text-blue-600" />
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Monthly Income *
                    </label>
                    <input
                      type="number"
                      value={formData.income}
                      onChange={(e) =>
                        setFormData({ ...formData, income: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter your monthly income"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Loan Details */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <DollarSign className="w-5 h-5 mr-2 text-green-600" />
                  Loan Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Loan Amount (₹) *
                    </label>
                    <input
                      type="number"
                      value={formData.amount}
                      onChange={(e) =>
                        setFormData({ ...formData, amount: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter loan amount"
                      min="1000"
                      max="1000000"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tenure (Months) *
                    </label>
                    <select
                      value={formData.tenure}
                      onChange={(e) =>
                        setFormData({ ...formData, tenure: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    >
                      <option value="">Select tenure</option>
                      <option value="3">3 Months</option>
                      <option value="6">6 Months</option>
                      <option value="12">12 Months</option>
                      <option value="24">24 Months</option>
                      <option value="36">36 Months</option>
                    </select>
                  </div>
                </div>

                {estimatedEMI > 0 && (
                  <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">
                          Estimated Monthly EMI
                        </p>
                        <p className="text-2xl font-bold text-blue-600">
                          ₹{estimatedEMI.toLocaleString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Total Amount</p>
                        <p className="text-lg font-semibold text-purple-600">
                          ₹
                          {(
                            estimatedEMI * parseInt(formData.tenure || 0)
                          ).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Purpose *
                  </label>
                  <textarea
                    value={formData.purpose}
                    onChange={(e) =>
                      setFormData({ ...formData, purpose: e.target.value })
                    }
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Describe the purpose of the loan (e.g., business expansion, medical expenses, education)"
                    required
                  />
                </div>
              </div>

              {/* Document Upload */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-purple-600" />
                  Required Documents
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      ID Proof *
                    </label>
                    <div
                      className="cursor-pointer"
                      onClick={() =>
                        document
                          .querySelector('input[data-type="idProof"]')
                          .click()
                      }
                    >
                      <FileUploadArea
                        type="idProof"
                        label="Upload ID Proof"
                        accept=".pdf,.png,.jpg,.jpeg"
                      />
                    </div>
                    <input
                      data-type="idProof"
                      type="file"
                      className="hidden"
                      accept=".pdf,.png,.jpg,.jpeg"
                      onChange={(e) =>
                        e.target.files[0] &&
                        handleFileUpload("idProof", e.target.files[0])
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Income Proof *
                    </label>
                    <div
                      className="cursor-pointer"
                      onClick={() =>
                        document
                          .querySelector('input[data-type="incomeProof"]')
                          .click()
                      }
                    >
                      <FileUploadArea
                        type="incomeProof"
                        label="Upload Income Proof"
                        accept=".pdf,.png,.jpg,.jpeg"
                      />
                    </div>
                    <input
                      data-type="incomeProof"
                      type="file"
                      className="hidden"
                      accept=".pdf,.png,.jpg,.jpeg"
                      onChange={(e) =>
                        e.target.files[0] &&
                        handleFileUpload("incomeProof", e.target.files[0])
                      }
                    />
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  * Accepted documents: Passport, Driver's License, PAN Card for
                  ID proof. Salary slips, bank statements, ITR for income proof.
                </p>
              </div>

              {/* Submit Buttons */}
              <div className="flex justify-end space-x-4 pt-6 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setActiveView("user-dashboard")}
                  className="px-8 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 font-medium transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 font-medium shadow-lg transition-all hover:shadow-xl"
                  disabled={
                    !uploadedFiles.idProof || !uploadedFiles.incomeProof
                  }
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  // Enhanced EMI Calculator
  const EMICalculator = () => {
    const [principal, setPrincipal] = useState("");
    const [tenure, setTenure] = useState("");
    const [emi, setEmi] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);

    const calculateEMI = () => {
      if (principal && tenure) {
        const P = parseFloat(principal);
        const r = interestRate / 100;
        const n = parseInt(tenure);

        const emiAmount =
          (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        const totalAmt = emiAmount * n;
        const totalInt = totalAmt - P;

        setEmi(Math.round(emiAmount));
        setTotalAmount(Math.round(totalAmt));
        setTotalInterest(Math.round(totalInt));
      }
    };

    useEffect(() => {
      calculateEMI();
    }, [principal, tenure, interestRate]);

    return (
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              EMI Calculator
            </h2>
            <p className="text-gray-600">
              Calculate your monthly loan payments instantly
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator Input */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Calculator className="w-6 h-6 mr-3 text-blue-600" />
                Loan Details
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Loan Amount (₹)
                  </label>
                  <input
                    type="number"
                    value={principal}
                    onChange={(e) => setPrincipal(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg"
                    placeholder="Enter loan amount"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Tenure (Months)
                  </label>
                  <input
                    type="number"
                    value={tenure}
                    onChange={(e) => setTenure(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg"
                    placeholder="Enter tenure in months"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Interest Rate (% per month)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={interestRate}
                      disabled
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-100 text-lg"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <span className="text-sm text-gray-500">Fixed</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Current rate set by admin
                  </p>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
                <h3 className="text-xl font-semibold mb-6">
                  Calculation Results
                </h3>

                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Monthly EMI:</span>
                    <span className="text-2xl font-bold">
                      ₹{emi.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Total Amount Payable:</span>
                    <span className="text-xl font-semibold">
                      ₹{totalAmount.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Total Interest:</span>
                    <span className="text-xl font-semibold">
                      ₹{totalInterest.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {emi > 0 && (
                <>
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Payment Breakdown
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Principal Amount:</span>
                        <span className="font-medium">
                          ₹{parseFloat(principal || 0).toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          Interest Component:
                        </span>
                        <span className="font-medium">
                          ₹{totalInterest.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          Interest Percentage:
                        </span>
                        <span className="font-medium">
                          {(
                            (totalInterest / parseFloat(principal || 1)) *
                            100
                          ).toFixed(1)}
                          %
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Quick Tips
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Choose shorter tenure to save on total interest
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Ensure EMI is less than 40% of your monthly income
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Consider prepayment to reduce interest burden
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Enhanced Admin Dashboard
  const AdminDashboard = () => {
    const totalLoans = loans.length;
    const activeLoans = loans.filter((loan) => loan.status === "active").length;
    const pendingApplications = loans.filter(
      (loan) => loan.status === "pending"
    ).length;
    const totalAmount = loans.reduce((sum, loan) => sum + loan.amount, 0);
    const collectionTarget = 250000;
    const monthlyCollection = 189000;

    const statsCards = [
      {
        title: "Total Loans",
        value: totalLoans,
        icon: FileText,
        color: "from-blue-500 to-blue-600",
        change: "+12%",
      },
      {
        title: "Active Loans",
        value: activeLoans,
        icon: CheckCircle,
        color: "from-green-500 to-green-600",
        change: "+8%",
      },
      {
        title: "Pending Applications",
        value: pendingApplications,
        icon: Clock,
        color: "from-yellow-500 to-yellow-600",
        change: "+3",
      },
      {
        title: "Total Amount",
        value: `₹${(totalAmount / 100000).toFixed(1)}L`,
        icon: DollarSign,
        color: "from-purple-500 to-purple-600",
        change: "+15%",
      },
    ];

    return (
      <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl p-8 text-white shadow-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-2">Admin Dashboard</h2>
              <p className="text-purple-100">
                Welcome back! Here's what's happening with your loan platform.
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-purple-100">Collection Progress</div>
              <div className="text-2xl font-bold">
                {Math.round((monthlyCollection / collectionTarget) * 100)}%
              </div>
              <div className="text-sm text-purple-200">
                ₹{monthlyCollection.toLocaleString()} / ₹
                {collectionTarget.toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsCards.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div
                      className={`bg-gradient-to-r ${stat.color} p-3 rounded-xl shadow-lg`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">
                        {stat.title}
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {stat.value}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium text-green-600">
                      {stat.change}
                    </span>
                    <p className="text-xs text-gray-500">vs last month</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Recent Applications Table */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Recent Loan Applications
            </h3>
            <button
              onClick={() => setActiveView("loan-applications")}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg"
            >
              View All
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tl-xl">
                    Customer
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tenure
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Applied Date
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-xl">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {loans.map((loan) => {
                  const user = users.find((u) => u.id === loan.userId);
                  return (
                    <tr
                      key={loan.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">
                              {user?.name?.charAt(0)}
                            </span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {user?.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {user?.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-semibold text-gray-900">
                          ₹{loan.amount.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-500">
                          @ {loan.interestRate}% interest
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        {loan.tenure} months
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                            loan.status === "active"
                              ? "bg-green-100 text-green-800"
                              : loan.status === "pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {loan.status.charAt(0).toUpperCase() +
                            loan.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {new Date(loan.appliedDate).toLocaleDateString("en-IN")}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                        <button className="text-blue-600 hover:text-blue-900 p-2 hover:bg-blue-50 rounded-lg transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        {loan.status === "pending" && (
                          <>
                            <button className="text-green-600 hover:text-green-900 p-2 hover:bg-green-50 rounded-lg transition-colors">
                              <CheckCircle className="w-4 h-4" />
                            </button>
                            <button className="text-red-600 hover:text-red-900 p-2 hover:bg-red-50 rounded-lg transition-colors">
                              <X className="w-4 h-4" />
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
              Monthly Collection Target
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Target Collection:</span>
                <span className="font-semibold text-lg">
                  ₹{collectionTarget.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Collected:</span>
                <span className="font-semibold text-green-600 text-lg">
                  ₹{monthlyCollection.toLocaleString()}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${(monthlyCollection / collectionTarget) * 100}%`,
                  }}
                />
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">
                  {Math.round((monthlyCollection / collectionTarget) * 100)}% of
                  monthly target achieved
                </span>
                <span className="text-gray-500">
                  ₹{(collectionTarget - monthlyCollection).toLocaleString()}{" "}
                  remaining
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 mr-2 text-purple-600" />
              Payment Performance
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">On-time Payments:</span>
                <span className="font-semibold text-green-600">92%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Late Payments:</span>
                <span className="font-semibold text-yellow-600">6%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Defaults:</span>
                <span className="font-semibold text-red-600">2%</span>
              </div>
              <div className="pt-2 border-t border-gray-100">
                <div className="flex items-center text-sm text-gray-600">
                  <Award className="w-4 h-4 mr-1 text-green-500" />
                  Excellent collection performance this month
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Enhanced Loan Applications Management
  const LoanApplicationsManagement = () => {
    const [selectedStatus, setSelectedStatus] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredLoans = loans.filter((loan) => {
      const user = users.find((u) => u.id === loan.userId);
      const matchesStatus =
        selectedStatus === "all" || loan.status === selectedStatus;
      const matchesSearch =
        !searchTerm ||
        user?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user?.email.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesStatus && matchesSearch;
    });

    const handleApprove = (loanId) => {
      setLoans(
        loans.map((loan) =>
          loan.id === loanId
            ? {
                ...loan,
                status: "active",
                approvedDate: new Date().toISOString().split("T")[0],
                startDate: new Date().toISOString().split("T")[0],
                nextDue: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
                  .toISOString()
                  .split("T")[0],
              }
            : loan
        )
      );

      // Add notification
      const newNotification = {
        id: notifications.length + 1,
        message: "Loan application has been approved",
        type: "success",
        date: new Date().toISOString().split("T")[0],
        read: false,
      };
      setNotifications([newNotification, ...notifications]);

      alert("Loan application approved successfully!");
    };

    const handleReject = (loanId) => {
      setLoans(
        loans.map((loan) =>
          loan.id === loanId ? { ...loan, status: "rejected" } : loan
        )
      );

      // Add notification
      const newNotification = {
        id: notifications.length + 1,
        message: "Loan application has been rejected",
        type: "warning",
        date: new Date().toISOString().split("T")[0],
        read: false,
      };
      setNotifications([newNotification, ...notifications]);

      alert("Loan application rejected.");
    };

    return (
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Loan Applications
              </h2>
              <p className="text-gray-600 mt-1">
                Review and manage loan applications
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search customers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="active">Active</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer Details
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Loan Details
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    EMI Amount
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Applied Date
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredLoans.map((loan) => {
                  const user = users.find((u) => u.id === loan.userId);
                  return (
                    <tr
                      key={loan.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold">
                              {user?.name?.charAt(0)}
                            </span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {user?.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {user?.email}
                            </div>
                            <div className="text-sm text-gray-500">
                              {user?.phone}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-semibold text-gray-900">
                          ₹{loan.amount.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-500">
                          {loan.tenure} months @ {loan.interestRate}%
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                          Documents: {loan.documents?.idProof ? "✓" : "✗"} ID,{" "}
                          {loan.documents?.incomeProof ? "✓" : "✗"} Income
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-semibold text-gray-900">
                          ₹{loan.emiAmount.toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-500">per month</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                            loan.status === "active"
                              ? "bg-green-100 text-green-800"
                              : loan.status === "pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {loan.status.charAt(0).toUpperCase() +
                            loan.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {new Date(loan.appliedDate).toLocaleDateString("en-IN")}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                        <button
                          className="text-blue-600 hover:text-blue-900 p-2 hover:bg-blue-50 rounded-lg transition-colors"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        {loan.status === "pending" && (
                          <>
                            <button
                              onClick={() => handleApprove(loan.id)}
                              className="text-green-600 hover:text-green-900 p-2 hover:bg-green-50 rounded-lg transition-colors"
                              title="Approve"
                            >
                              <CheckCircle className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleReject(loan.id)}
                              className="text-red-600 hover:text-red-900 p-2 hover:bg-red-50 rounded-lg transition-colors"
                              title="Reject"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {filteredLoans.length === 0 && (
              <div className="text-center py-12">
                <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No loan applications found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Enhanced Interest Settings
  const InterestSettings = () => {
    const [newRate, setNewRate] = useState(interestRate);
    const [rateHistory] = useState([
      {
        date: "2024-08-01",
        rate: 2.5,
        changedBy: "Admin User",
        reason: "Market adjustment",
      },
      {
        date: "2024-07-01",
        rate: 2.3,
        changedBy: "Admin User",
        reason: "Promotional rate",
      },
      {
        date: "2024-06-01",
        rate: 2.0,
        changedBy: "Admin User",
        reason: "Initial rate setting",
      },
    ]);

    const handleUpdateRate = () => {
      if (newRate < 0.5 || newRate > 10) {
        alert("Interest rate must be between 0.5% and 10%");
        return;
      }

      setInterestRate(newRate);
      alert(`Interest rate updated to ${newRate}% successfully!`);
    };

    return (
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Interest Rate Management
              </h2>
              <p className="text-gray-600">
                Configure and manage loan interest rates
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Current Rate & Update */}
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-semibold mb-4">
                    Current Interest Rate
                  </h3>
                  <div className="text-5xl font-bold mb-2">{interestRate}%</div>
                  <p className="text-blue-100">per month</p>
                  <div className="mt-4 text-sm text-blue-100">
                    Effective for all new loan applications
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Settings className="w-5 h-5 mr-2 text-gray-600" />
                    Update Interest Rate
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        New Monthly Interest Rate (%)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        min="0.5"
                        max="10"
                        value={newRate}
                        onChange={(e) => setNewRate(parseFloat(e.target.value))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Rate must be between 0.5% and 10%
                      </p>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <div className="flex items-start">
                        <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" />
                        <div className="text-sm text-yellow-800">
                          <p className="font-medium mb-1">Important Notice:</p>
                          <p>
                            This will affect all new loan applications. Existing
                            loans will continue with their original rates.
                          </p>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={handleUpdateRate}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-xl hover:from-blue-600 hover:to-purple-700 font-semibold shadow-lg transition-all"
                    >
                      Update Interest Rate
                    </button>
                  </div>
                </div>
              </div>

              {/* Rate History */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-gray-600" />
                  Rate Change History
                </h3>
                <div className="space-y-4">
                  {rateHistory.map((entry, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-semibold text-gray-900 text-lg">
                            {entry.rate}%
                          </div>
                          <div className="text-sm text-gray-500">
                            Changed by {entry.changedBy}
                          </div>
                          <div className="text-xs text-gray-400 mt-1">
                            {entry.reason}
                          </div>
                        </div>
                        <div className="text-sm text-gray-500">
                          {new Date(entry.date).toLocaleDateString("en-IN")}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <h4 className="font-medium text-blue-900 mb-2">
                    Rate Impact Analysis
                  </h4>
                  <div className="text-sm text-blue-800 space-y-1">
                    <p>• Current rate is competitive in the market</p>
                    <p>• Average monthly collection: ₹1,89,000</p>
                    <p>• Default rate: 2% (Excellent)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Enhanced Reports Component
  const Reports = () => {
    const monthlyData = [
      { month: "Jan", disbursed: 450000, collected: 185000, target: 200000 },
      { month: "Feb", disbursed: 520000, collected: 210000, target: 220000 },
      { month: "Mar", disbursed: 680000, collected: 240000, target: 250000 },
      { month: "Apr", disbursed: 560000, collected: 225000, target: 230000 },
      { month: "May", disbursed: 720000, collected: 245000, target: 260000 },
      { month: "Jun", disbursed: 820000, collected: 270000, target: 280000 },
      { month: "Jul", disbursed: 950000, collected: 285000, target: 300000 },
      { month: "Aug", disbursed: 450000, collected: 189000, target: 250000 },
    ];

    const totalDisbursed = monthlyData.reduce(
      (sum, data) => sum + data.disbursed,
      0
    );
    const totalCollected = monthlyData.reduce(
      (sum, data) => sum + data.collected,
      0
    );
    const totalOutstanding = totalDisbursed - totalCollected;
    const overdueAmount = 250000;

    return (
      <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Reports & Analytics
            </h2>
            <p className="text-gray-600">
              Comprehensive business insights and performance metrics
            </p>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[
              {
                title: "Total Disbursed",
                value: `₹${(totalDisbursed / 1000000).toFixed(1)}M`,
                color: "from-blue-500 to-blue-600",
                icon: DollarSign,
              },
              {
                title: "Collected This Month",
                value: "₹1.89L",
                color: "from-green-500 to-green-600",
                icon: TrendingUp,
              },
              {
                title: "Outstanding",
                value: `₹${(totalOutstanding / 1000000).toFixed(1)}M`,
                color: "from-yellow-500 to-yellow-600",
                icon: Clock,
              },
              {
                title: "Overdue",
                value: "₹2.50L",
                color: "from-red-500 to-red-600",
                icon: TrendingDown,
              },
            ].map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-r ${card.color} rounded-2xl p-6 text-white shadow-lg`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm opacity-90">{card.title}</div>
                      <div className="text-2xl font-bold">{card.value}</div>
                    </div>
                    <Icon className="w-8 h-8 opacity-80" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Collection Chart */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Monthly Performance Overview
            </h3>
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="space-y-4">
                {monthlyData.map((data) => (
                  <div key={data.month} className="flex items-center space-x-4">
                    <div className="w-12 text-sm font-medium text-gray-700">
                      {data.month}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span>Collection vs Target</span>
                        <span>
                          {Math.round((data.collected / data.target) * 100)}%
                        </span>
                      </div>
                      <div className="bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full transition-all duration-500"
                          style={{
                            width: `${Math.min(
                              (data.collected / data.target) * 100,
                              100
                            )}%`,
                          }}
                        />
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 w-40 text-right">
                      <div>
                        ₹{(data.collected / 1000).toFixed(0)}K / ₹
                        {(data.target / 1000).toFixed(0)}K
                      </div>
                      <div className="text-xs text-gray-500">
                        Disbursed: ₹{(data.disbursed / 1000).toFixed(0)}K
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Export Options */}
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 shadow-lg transition-all font-medium">
              <Download className="w-4 h-4 mr-2" />
              Export Collection Report
            </button>
            <button className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 shadow-lg transition-all font-medium">
              <Download className="w-4 h-4 mr-2" />
              Export Defaulters List
            </button>
            <button className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-purple-700 shadow-lg transition-all font-medium">
              <Download className="w-4 h-4 mr-2" />
              Export Outstanding Loans
            </button>
            <button className="flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 shadow-lg transition-all font-medium">
              <BarChart3 className="w-4 h-4 mr-2" />
              Generate Analytics Report
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Enhanced Notifications Component
  const NotificationsView = () => {
    const [filter, setFilter] = useState("all");

    const markAsRead = (notificationId) => {
      setNotifications(
        notifications.map((n) =>
          n.id === notificationId ? { ...n, read: true } : n
        )
      );
    };

    const markAllAsRead = () => {
      setNotifications(notifications.map((n) => ({ ...n, read: true })));
    };

    const filteredNotifications = notifications.filter((n) => {
      if (filter === "unread") return !n.read;
      if (filter === "read") return n.read;
      return true;
    });

    return (
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Notifications
                </h2>
                <p className="text-gray-600 mt-1">
                  Stay updated with your account activities
                </p>
              </div>
              <div className="flex space-x-3">
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Notifications</option>
                  <option value="unread">Unread Only</option>
                  <option value="read">Read Only</option>
                </select>
                <button
                  onClick={markAllAsRead}
                  className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium"
                >
                  Mark All Read
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {filteredNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-6 rounded-xl border transition-all cursor-pointer ${
                    !notification.read
                      ? "bg-blue-50 border-blue-200 shadow-md"
                      : "bg-gray-50 border-gray-200"
                  }`}
                  onClick={() =>
                    !notification.read && markAsRead(notification.id)
                  }
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`p-3 rounded-full ${
                        notification.type === "warning"
                          ? "bg-yellow-100"
                          : notification.type === "success"
                          ? "bg-green-100"
                          : "bg-blue-100"
                      }`}
                    >
                      {notification.type === "warning" ? (
                        <AlertTriangle className="w-6 h-6 text-yellow-600" />
                      ) : notification.type === "success" ? (
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      ) : (
                        <Bell className="w-6 h-6 text-blue-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p
                          className={`font-medium ${
                            !notification.read
                              ? "text-gray-900"
                              : "text-gray-700"
                          }`}
                        >
                          {notification.message}
                        </p>
                        {!notification.read && (
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        )}
                      </div>
                      <p className="text-sm text-gray-500 mt-2">
                        {new Date(notification.date).toLocaleDateString(
                          "en-IN",
                          {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredNotifications.length === 0 && (
              <div className="text-center py-12">
                <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">No notifications found</p>
                <p className="text-gray-400 text-sm mt-2">
                  {filter === "unread"
                    ? "All notifications have been read"
                    : "No notifications available"}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Payment History Component (Placeholder)
  const PaymentHistory = () => {
    const userLoan = loans.find((loan) => loan.userId === currentUser?.id);
    const paymentHistory = userLoan
      ? Array.from({ length: userLoan.paidEMIs }, (_, i) => ({
          id: i + 1,
          date: new Date(
            Date.now() - (userLoan.paidEMIs - i) * 30 * 24 * 60 * 60 * 1000
          )
            .toISOString()
            .split("T")[0],
          amount: userLoan.emiAmount,
          status: "Paid",
          method: "Bank Transfer",
        }))
      : [];

    return (
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Payment History
              </h2>
              <p className="text-gray-600">
                Track all your loan payments and transactions
              </p>
            </div>

            {!userLoan ? (
              <div className="text-center py-12">
                <CreditCard className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">No active loan found</p>
                <p className="text-gray-400 text-sm mt-2">
                  Apply for a loan to view payment history
                </p>
              </div>
            ) : (
              <>
                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm opacity-90">Total Paid</div>
                        <div className="text-2xl font-bold">
                          ₹
                          {(
                            userLoan.paidEMIs * userLoan.emiAmount
                          ).toLocaleString()}
                        </div>
                      </div>
                      <CheckCircle className="w-8 h-8 opacity-80" />
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm opacity-90">Payments Made</div>
                        <div className="text-2xl font-bold">
                          {userLoan.paidEMIs}
                        </div>
                      </div>
                      <Calendar className="w-8 h-8 opacity-80" />
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm opacity-90">Remaining</div>
                        <div className="text-2xl font-bold">
                          ₹
                          {(
                            (userLoan.totalEMIs - userLoan.paidEMIs) *
                            userLoan.emiAmount
                          ).toLocaleString()}
                        </div>
                      </div>
                      <Clock className="w-8 h-8 opacity-80" />
                    </div>
                  </div>
                </div>

                {/* Payment Table */}
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Payment #
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Amount
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Method
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {paymentHistory.map((payment) => (
                        <tr
                          key={payment.id}
                          className="hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            EMI #{payment.id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {new Date(payment.date).toLocaleDateString("en-IN")}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                            ₹{payment.amount.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                            {payment.method}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                              {payment.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Main render function
  const renderContent = () => {
    switch (activeView) {
      case "login":
        return <LoginForm />;
      case "user-dashboard":
        return <UserDashboard />;
      case "apply-loan":
        return <LoanApplicationForm />;
      case "emi-calculator":
        return <EMICalculator />;
      case "payment-history":
        return <PaymentHistory />;
      case "notifications":
        return <NotificationsView />;
      case "admin-dashboard":
        return <AdminDashboard />;
      case "loan-applications":
        return <LoanApplicationsManagement />;
      case "customer-management":
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Customer Management
              </h2>
              <p className="text-gray-600">
                Advanced customer management features coming soon
              </p>
            </div>
          </div>
        );
      case "loan-management":
        return (
          <div className="p-6 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Active Loan Management
              </h2>
              <p className="text-gray-600">
                Comprehensive loan management tools coming soon
              </p>
            </div>
          </div>
        );
      case "interest-settings":
        return <InterestSettings />;
      case "reports":
        return <Reports />;
      default:
        return <LoginForm />;
    }
  };

  if (!currentUser) {
    return <LoginForm />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        userRole={currentUser.role}
      />

      <div className="flex-1 lg:ml-0">
        <Header />
        <main className="flex-1">{renderContent()}</main>
      </div>
    </div>
  );
};

export default FinTechLoanPlatform;
