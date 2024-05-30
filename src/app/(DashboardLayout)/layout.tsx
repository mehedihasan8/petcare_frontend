import DashboardLayout from "@/components/layout/DashboardLayout";
import React from "react";

const AdminDashboard = ({ children }: { children: React.ReactNode }) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default AdminDashboard;
