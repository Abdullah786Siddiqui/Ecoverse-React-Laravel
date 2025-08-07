import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Bell,
  Maximize2,
  ArrowRightCircle,
  ArrowLeftCircle,
  Gauge,
  ShoppingCart,
  Receipt,
  User,
  Plus,
  List,
  CheckSquare,
  Users,
  LogOut,
  ShoppingBag,
  XCircle,
  UserPlus,
  AlertTriangle,
  Package,
} from "lucide-react";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [sidebarActive, setSidebarActive] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "order_received",
      count: 5,
      title: "Orders received",
      desc: "New Orders Placed",
      icon: ShoppingBag,
      color: "#28a745",
    },
    {
      id: 2,
      type: "order_cancelled",
      count: 2,
      title: "Orders cancelled",
      desc: "Check cancellation",
      icon: XCircle,
      color: "#dc3545",
    },
    {
      id: 3,
      type: "new_customer",
      count: 8,
      title: "New customers",
      desc: "Welcome new signups",
      icon: UserPlus,
      color: "#0d6efd",
    },
    {
      id: 4,
      type: "low_stock",
      count: 12,
      title: "Low stock",
      desc: "Replenish inventory soon",
      icon: AlertTriangle,
      color: "#ffc107",
    },
    {
      id: 5,
      type: "out_of_stock",
      count: 3,
      title: "Out of stock",
      desc: "Update or restock items",
      icon: Package,
      color: "#6c757d",
    },
  ]);

  const adminName = "Abdullah";
  const totalNotifications = notifications.reduce(
    (sum, notif) => sum + notif.count,
    0
  );

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };
  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth <= 667) {
        toggleSidebar();
      }
    };

    // Run once on component mount
    checkMobile();

    // Run on every window resize
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handleNotificationClick = (type) => {
    console.log(`Clicked notification: ${type}`);
    // Handle notification click logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Custom Styles */}
      <style jsx>{`
        .rotating-gear i {
          animation: spin 4s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>

      {/* Sidebar */}
      <div
        className={`fixed top-0 ${
          sidebarActive ? "left-0" : "left-[-260px]"
        } w-64 h-full bg-white shadow transition-all duration-300 z-40 overflow-y-auto`}
      >
        {/* Logo */}
        <div className="py-4 px-4 text-2xl font-bold text-blue-600 border-b cursor-pointer">
          <Link
            to={"/"}
            className="text-blue-600 no-underline hover:text-blue-700"
          >
            Adminix
          </Link>
        </div>

        {/* Navigation */}
        <nav className="mt-2">
          <ul className="space-y-1">
            {/* Dashboard */}
            <li>
              <Link
                to={"/"}
                className="flex items-center  py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium no-underline"
              >
                <Gauge className="w-5 h-5 mr-3 " />
                Dashboard
              </Link>
            </li>

            {/* Ecommerce */}
            <li>
              <div>
                <button
                  onClick={() => toggleDropdown("ecommerce")}
                  className="flex items-center w-full py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium"
                >
                  <ShoppingCart className="w-5 h-5 mr-3" />
                  Ecommerce
                </button>
                <div
                  className={`${
                    activeDropdown === "ecommerce" ? "block" : "hidden"
                  } bg-gray-50`}
                >
                  <Link
                    to={"/addProduct"}
                    className="flex items-center px-10 py-2 text-sm text-gray-600 hover:text-blue-600 no-underline"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Product
                  </Link>
                  <Link
                    to={"/productlist"}
                    className="flex items-center px-10 py-2 text-sm text-gray-600 hover:text-blue-600 no-underline"
                  >
                    <List className="w-4 h-4 mr-2" />
                    Product List
                  </Link>
                </div>
              </div>
            </li>

            {/* Orders */}
            <li>
              <div>
                <button
                  onClick={() => toggleDropdown("orders")}
                  className="flex items-center w-full py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium"
                >
                  <Receipt className="w-5 h-5 mr-3" />
                  Order
                </button>
                <div
                  className={`${
                    activeDropdown === "orders" ? "block" : "hidden"
                  } bg-gray-50`}
                >
                  <a
                    href="#"
                    className="flex items-center px-10 py-2 text-sm text-gray-600 hover:text-blue-600 no-underline"
                  >
                    <CheckSquare className="w-4 h-4 mr-2" />
                    Order List
                  </a>
                </div>
              </div>
            </li>

            {/* Users */}
            <li>
              <div>
                <button
                  onClick={() => toggleDropdown("users")}
                  className="flex items-center w-full text-none py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium"
                >
                  <User className="w-5 h-5 mr-3" />
                  User
                </button>
                <div
                  className={`${
                    activeDropdown === "users" ? "block" : "hidden"
                  } bg-gray-50`}
                >
                  <a
                    href="#"
                    className="flex items-center px-10 py-2 text-sm text-gray-600 hover:text-blue-600 no-underline"
                  >
                    <Users className="w-4 h-4 mr-2" />
                    User List
                  </a>
                </div>
              </div>
            </li>

            {/* Divider */}
            <li className="pl-10 ">
              <hr className="border-t border-gray-300 my-4 w-3/4" />
            </li>

            {/* Logout */}
            <li>
              <a
                href="#"
                className="flex items-center  py-1 text-gray-700 hover:bg-red-50 hover:text-red-600 font-medium no-underline"
              >
                <LogOut className="w-5 h-5 mr-3" />
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${
          sidebarActive ? "ml-64" : "ml-0"
        }`}
      >
        {/* Top Navbar */}
        <nav className="sticky top-0 z-30 bg-white shadow-sm px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Left side */}
            <div className="flex items-center">
              {/* Sidebar Toggle */}
              <button
                onClick={toggleSidebar}
                className="p-2 mr-4 text-blue-600 hover:text-blue-700 hover:rotate-180 hover:scale-110 transition-all duration-300"
              >
                {sidebarActive ? (
                  <ArrowLeftCircle className="w-7 h-7" />
                ) : (
                  <ArrowRightCircle className="w-7 h-7" />
                )}
              </button>

              {/* Admin Greeting */}
              <div className="hidden lg:block">
                <h5 className="text-gray-600 font-medium ">Dashboard</h5>
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-3">
              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("notifications")}
                  className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <Bell className="w-6 h-6 text-gray-600" />
                  {totalNotifications > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
                      {totalNotifications}
                    </span>
                  )}
                </button>

                {/* Notifications Dropdown */}
                {activeDropdown === "notifications" && (
                  <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg border z-50">
                    <div className="px-4 py-3 border-b">
                      <span className="font-semibold text-sm">
                        Notifications
                      </span>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map((notification) => {
                        const IconComponent = notification.icon;
                        return (
                          <div
                            key={notification.id}
                            onClick={() =>
                              handleNotificationClick(notification.type)
                            }
                            className="px-3 py-3 border-b hover:bg-gray-50 cursor-pointer"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-start space-x-3">
                                <div
                                  className="rounded-full p-1.5 flex items-center justify-center"
                                  style={{
                                    backgroundColor: notification.color,
                                  }}
                                >
                                  <IconComponent className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                  <div
                                    className="font-semibold text-sm"
                                    style={{
                                      color:
                                        notification.id === 2
                                          ? "#dc3545"
                                          : notification.id === 4
                                          ? "#ffc107"
                                          : notification.id === 5
                                          ? "#6c757d"
                                          : "inherit",
                                    }}
                                  >
                                    {notification.title}
                                  </div>
                                  <div className="text-xs text-gray-500">
                                    {notification.desc}
                                  </div>
                                </div>
                              </div>
                              {notification.count > 0 && (
                                <span className="bg-blue-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs font-bold">
                                  {notification.count}
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Fullscreen Toggle */}
              <button
                onClick={toggleSidebar}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Maximize2 className="w-6 h-6 text-gray-600" />
              </button>

              {/* User Profile */}
              <div className="flex items-center space-x-3 ml-4">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                  alt="Admin"
                  className="w-10 h-10 rounded-full object-cover shadow-sm"
                />
                <div className="hidden sm:block">
                  <div className="text-sm font-semibold">{adminName}</div>
                  <div className="text-xs text-gray-500 font-bold">Admin</div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>

      {/* Click outside to close dropdowns */}
      {activeDropdown && (
        <div
          className="fixed inset-0 z-20"
          onClick={() => setActiveDropdown(null)}
        ></div>
      )}
    </div>
  );
};

export default Dashboard;
