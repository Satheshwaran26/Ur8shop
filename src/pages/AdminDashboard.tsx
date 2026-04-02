import { useState } from "react";
import { Link } from "react-router-dom";
import { Package, Users, ShoppingBag, TrendingUp, Eye, Settings, LogOut, BarChart3, Box } from "lucide-react";
import { products } from "@/data/products";

const stats = [
  { label: "Total Revenue", value: "₹12,45,890", change: "+12.5%", icon: TrendingUp },
  { label: "Orders", value: "342", change: "+8.2%", icon: ShoppingBag },
  { label: "Products", value: "156", change: "+3", icon: Package },
  { label: "Customers", value: "1,847", change: "+15.1%", icon: Users },
];

const recentOrders = [
  { id: "UR8-1042", customer: "Rahul M.", total: "₹4,498", status: "Delivered", date: "Mar 28" },
  { id: "UR8-1041", customer: "Arjun S.", total: "₹2,499", status: "Shipped", date: "Mar 27" },
  { id: "UR8-1040", customer: "Vikram K.", total: "₹7,998", status: "Processing", date: "Mar 27" },
  { id: "UR8-1039", customer: "Amit P.", total: "₹1,499", status: "Delivered", date: "Mar 26" },
  { id: "UR8-1038", customer: "Rohan D.", total: "₹5,999", status: "Delivered", date: "Mar 25" },
];

const navItems = [
  { label: "Dashboard", icon: BarChart3, active: true },
  { label: "Products", icon: Box },
  { label: "Orders", icon: ShoppingBag },
  { label: "Customers", icon: Users },
  { label: "Settings", icon: Settings },
];

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-secondary flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? "w-56" : "w-16"} bg-background border-r border-border flex flex-col transition-all duration-200 hidden lg:flex`}>
        <div className="p-4 border-b border-border">
          <Link to="/" className="font-heading text-lg font-bold text-foreground">
            {sidebarOpen ? "Ur8shop" : "U8"}
          </Link>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded text-sm transition-colors ${
                item.active ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              <item.icon size={18} />
              {sidebarOpen && item.label}
            </button>
          ))}
        </nav>
        <div className="p-3 border-t border-border">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
            <LogOut size={18} />
            {sidebarOpen && "Logout"}
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 overflow-auto">
        <header className="bg-background border-b border-border px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="font-heading text-xl font-semibold">Dashboard</h1>
            <p className="text-xs text-muted-foreground">Welcome back, Admin</p>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
              <Eye size={16} /> View Store
            </Link>
          </div>
        </header>

        <div className="p-6 space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-background rounded-lg border border-border p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">{s.label}</span>
                  <s.icon size={16} className="text-muted-foreground" />
                </div>
                <p className="text-2xl font-semibold text-foreground">{s.value}</p>
                <p className="text-xs text-luxury-accent mt-1">{s.change} from last month</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Recent orders */}
            <div className="lg:col-span-2 bg-background rounded-lg border border-border">
              <div className="px-5 py-4 border-b border-border flex items-center justify-between">
                <h2 className="font-heading text-base font-semibold">Recent Orders</h2>
                <button className="text-xs text-muted-foreground hover:text-foreground transition-colors">View All</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-xs text-muted-foreground tracking-widest uppercase border-b border-border">
                      <th className="text-left px-5 py-3 font-medium">Order</th>
                      <th className="text-left px-5 py-3 font-medium">Customer</th>
                      <th className="text-left px-5 py-3 font-medium">Total</th>
                      <th className="text-left px-5 py-3 font-medium">Status</th>
                      <th className="text-left px-5 py-3 font-medium">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((o) => (
                      <tr key={o.id} className="border-b border-border last:border-0">
                        <td className="px-5 py-3 text-sm font-medium">{o.id}</td>
                        <td className="px-5 py-3 text-sm text-muted-foreground">{o.customer}</td>
                        <td className="px-5 py-3 text-sm">{o.total}</td>
                        <td className="px-5 py-3">
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                            o.status === "Delivered" ? "bg-accent text-accent-foreground" :
                            o.status === "Shipped" ? "bg-secondary text-secondary-foreground" :
                            "bg-muted text-muted-foreground"
                          }`}>
                            {o.status}
                          </span>
                        </td>
                        <td className="px-5 py-3 text-sm text-muted-foreground">{o.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Top products */}
            <div className="bg-background rounded-lg border border-border">
              <div className="px-5 py-4 border-b border-border">
                <h2 className="font-heading text-base font-semibold">Top Products</h2>
              </div>
              <div className="p-5 space-y-4">
                {products.slice(0, 5).map((p) => (
                  <div key={p.id} className="flex items-center gap-3">
                    <div className="w-10 h-12 bg-secondary rounded overflow-hidden flex-shrink-0">
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{p.name}</p>
                      <p className="text-xs text-muted-foreground">{p.reviews} sold</p>
                    </div>
                    <p className="text-sm font-medium">₹{p.price.toLocaleString()}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
