import { Avatar, Button, Dropdown, Layout, Row, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { useRouter } from 'next/navigation';
import { removeFromLocalStorage } from '@/services/auth.service';
import { authKey } from '@/constants/storage';
const { Header: AntHeader } = Layout;

const Header = () => {
    const router = useRouter();

    const logOut = () => {
        removeFromLocalStorage(authKey)
        router.push('/login')
    }
    const items: MenuProps['items'] = [
        {
          key: '0',
          label: (
            <Button type='text' danger onClick={logOut}>Log Out</Button>
          ),
        }
      ];
    return (
        <AntHeader style={{backgroundColor: "lightBlue"}}>
            <Row justify='end' align='middle'>
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