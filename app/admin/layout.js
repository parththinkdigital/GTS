export const metadata = {
  title: "GTS Admin Portal",
  description: "GTS Lead Management",
};

import "./admin.css";

export default function AdminLayout({ children }) {
  return <div className="admin-root">{children}</div>;
}
