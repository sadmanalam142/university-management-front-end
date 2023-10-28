"use client";
import Contents from "@/components/ui/Contents";
import SideBar from "@/components/ui/SideBar";
import { isLoggedIn } from "@/services/auth.service";
import { Layout } from "antd";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const user = isLoggedIn();
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [router]);
  return (
    <Layout hasSider>
      <SideBar></SideBar>
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
