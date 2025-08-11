import { AuthGuard } from "@/modules/ui/components/auth-guard";
import { OrganizationGuard } from "@/modules/ui/components/organization-guard";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthGuard>
      <OrganizationGuard>{children}</OrganizationGuard>
    </AuthGuard>
  );
};

export default DashboardLayout;
