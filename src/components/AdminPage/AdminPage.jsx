import { Link } from "react-router-dom";
import React from "react";
import {
  Layout,
  Menu,
  Breadcrumb,
  Card,
  Statistic,
  Flex,
  Popover,
  Table,
} from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Ім'я",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Вік",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Адреса",
    dataIndex: "address",
    key: "address",
  },
];

const data = [
  {
    key: "1",
    id: 1,
    name: "Petro Sertyev ",
    age: 28,
    address: "123 Street Peremoty, Odesa",
  },
  {
    key: "2",
    id: 2,
    name: "Jane Dasyev",
    age: 24,
    address: "456 Park Ave, Dnipro",
  },
  {
    key: "3",
    id: 3,
    name: "Bob Johnson",
    age: 32,
    address: "789 Broad St, Lviv",
  },
];

class AdminPage extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: "100vh" }}>
          <div className="logo" />
          <Menu defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Dashboard
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Orders
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Users">
              <Menu.Item key="3">Nazar</Menu.Item>
              <Menu.Item key="4">Oleg</Menu.Item>
              <Menu.Item key="5">Serhii</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Teams">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />} />
          </Menu>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0, color: "#fff" }}>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "0 24px", minHeight: 64, backgroundColor: "#000" }}>
              <span>Admin Panel</span>
              <Link to="/">Назад</Link>
            </div>
          </Header>
          <Content style={{ margin: "0 16px", backgroundColor: "#91dea9" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Nazarii</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Flex wrap="wrap" gap={10}>
                <Popover title="User card">
                  <Card
                    title="Карточка користувача"
                    extra={<a href="#">Більше</a>}
                    style={{ width: 300 }}
                  >
                    <p>Інформація про користувача</p>
                  </Card>
                </Popover>
                <Card
                  title="Карточка користувача"
                  extra={<a href="#">Більше</a>}
                  style={{ width: 300 }}
                >
                  <p>Інформація про користувача</p>
                </Card>
                <Card
                  title="Карточка користувача"
                  extra={<a href="#">Більше</a>}
                  style={{ width: 300 }}
                >
                  <p>Інформація про користувача</p>
                </Card>
                <Card
                  title="Карточка користувача"
                  extra={<a href="#">Більше</a>}
                  style={{ width: 300 }}
                >
                  <p>Інформація про користувача</p>
                </Card>
              </Flex>


              <Flex wrap="wrap" justify="space-between">
                <Statistic
                  title="Час в системі"
                  value={20}
                  prefix={<ClockCircleOutlined />}
                />
              </Flex>

              <Table columns={columns} dataSource={data} />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design Admin Page ©2023 Kiriiak Nazarii
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default AdminPage;