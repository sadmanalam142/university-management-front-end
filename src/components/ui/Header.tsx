import { Avatar, Button, Dropdown, Layout, Row, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { useRouter } from "next/navigation";
import { getUserInfo, removeFromLocalStorage } from "@/services/auth.service";
import { authKey } from "@/constants/storage";
import { useState, useEffect } from "react";
const { Header: AntHeader } = Layout;

const Header = () => {
  const router = useRouter();
  const [role, setRole] = useState("");
  const userInfo = getUserInfo() as any;

  useEffect(() => {
    if (userInfo) {
      const userRole = userInfo?.role;
      setRole(userRole);
    }
  }, [userInfo]);

  const logOut = () => {
    removeFromLocalStorage(authKey);
    router.push("/login");
  };
  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Button type="text" danger onClick={logOut}>
          Log Out
        </Button>
      ),
    },
  ];
  return (
    <AntHeader style={{ backgroundColor: "lightBlue" }}>
      <Row justify="end" align="middle">
        <p style={{ marginRight: "10px" }}>{role}</p>
        <Dropdown menu={{ items }}>
          <Space wrap size={16}>
            <Avatar size="large" icon={<UserOutlined />} />
          </Space>
        </Dropdown>
      </Row>
    </AntHeader>
  );
};

export default Header;
