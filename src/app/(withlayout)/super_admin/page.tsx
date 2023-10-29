"use client"
import UMBreadCrumb from '@/components/ui/UMBreadCrumb';
import { getUserInfo } from '@/services/auth.service';
import React from 'react';
import { useState, useEffect } from "react";

const AdminPage = () => {
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
            <h1>This is super admin page</h1>
        </div>
    );
};

export default AdminPage;