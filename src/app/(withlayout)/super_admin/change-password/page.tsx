"use client"
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import { useState, useEffect } from "react";

const ChangePasswordPage = () => {
    const [role, setRole] = useState('');
  const userInfo = getUserInfo() as any;

  useEffect(() => {
    if (userInfo) {
      const userRole = userInfo?.role;
      setRole(userRole);
    }
  }, [userInfo]);
    return (
        <div>
            <UMBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
        ]}
      />
            <h1>Change Password Page</h1>
        </div>
    );
};

export default ChangePasswordPage;