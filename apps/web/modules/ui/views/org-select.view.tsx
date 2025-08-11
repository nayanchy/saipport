import { OrganizationList } from "@clerk/nextjs";
import React from "react";

export const OrganizationSelectView = () => {
  return (
    <OrganizationList
      afterCreateOrganizationUrl="/"
      afterSelectOrganizationUrl="/"
      hidePersonal
      skipInvitationScreen
    />
  );
};
