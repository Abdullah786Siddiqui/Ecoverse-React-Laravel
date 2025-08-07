import {
  ShoppingCart,
  Receipt,
  Plus,
  CheckSquare,
  Users,
  Package,
} from "lucide-react";
const Adminhome = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Welcome to Admin Dashboard
      </h1>
      <p className="text-gray-600 mb-6">
        This is your admin dashboard where you can manage products, orders,
        users, and view notifications.
      </p>

      {/* Dashboard Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          {
            title: "Total Orders",
            value: "1,234",
            icon: Receipt,
            color: "bg-blue-500",
          },
          {
            title: "Products",
            value: "456",
            icon: Package,
            color: "bg-green-500",
          },
          {
            title: "Users",
            value: "789",
            icon: Users,
            color: "bg-purple-500",
          },
          {
            title: "Revenue",
            value: "$12,345",
            icon: ShoppingCart,
            color: "bg-orange-500",
          },
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-full`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow p-6 border">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              {
                action: "New order received",
                time: "2 minutes ago",
                type: "order",
              },
              {
                action: "Product added to inventory",
                time: "1 hour ago",
                type: "product",
              },
              {
                action: "User registered",
                time: "3 hours ago",
                type: "user",
              },
              {
                action: "Order cancelled",
                time: "5 hours ago",
                type: "cancel",
              },
            ].map((activity, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-3 bg-gray-50 rounded"
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    activity.type === "order"
                      ? "bg-green-500"
                      : activity.type === "product"
                      ? "bg-blue-500"
                      : activity.type === "user"
                      ? "bg-purple-500"
                      : "bg-red-500"
                  }`}
                ></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow p-6 border">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                title: "Add Product",
                icon: Plus,
                color: "bg-blue-500 hover:bg-blue-600",
              },
              {
                title: "View Orders",
                icon: Receipt,
                color: "bg-green-500 hover:bg-green-600",
              },
              {
                title: "Manage Users",
                icon: Users,
                color: "bg-purple-500 hover:bg-purple-600",
              },
              {
                title: "Reports",
                icon: CheckSquare,
                color: "bg-orange-500 hover:bg-orange-600",
              },
            ].map((action, index) => (
              <button
                key={index}
                className={`${action.color} text-white p-4 rounded-lg transition-colors flex flex-col items-center space-y-2`}
              >
                <action.icon className="w-6 h-6" />
                <span className="text-sm font-medium">{action.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminhome;
