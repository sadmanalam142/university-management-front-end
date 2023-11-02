"use client"
import ActionBar from '@/components/ui/ActionBar';
import UMBreadCrumb from '@/components/ui/UMBreadCrumb';
import { getUserInfo } from '@/services/auth.service';
import { Button } from 'antd';
import Link from 'next/link';
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
        <div style={{ padding: "20px" }}>
            <UMBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
        ]}
      />
            <ActionBar title="Admin List">
            <Link href="/super_admin/admin/create">
            <Button type="primary">Create</Button>
            </Link>
            </ActionBar>
        </div>
    );
};

export default AdminPage;