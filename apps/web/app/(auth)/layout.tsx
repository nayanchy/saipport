import { AuthLayout } from "@/modules/ui/layouts/auth.layout";
import React from "react";

const AuthenticationLayout = ({ children }: { children: React.ReactNode }) => {
  return <AuthLayout>{children}</AuthLayout>;
};

export default AuthenticationLayout;
