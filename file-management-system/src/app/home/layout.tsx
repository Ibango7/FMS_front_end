'use client';
import React from "react";
import { Layout, Menu } from "antd";
import {
  FileOutlined,
  SolutionOutlined,
  FolderOutlined,
} from "@ant-design/icons";

const { Sider, Content } = Layout;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Layout style={{ minHeight: "100vh" }}>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          <Menu.Item key="1" icon={<FileOutlined />}>
            All Files
          </Menu.Item>
          <Menu.Item key="2" icon={<SolutionOutlined />}>
            Signatures
          </Menu.Item>
          <Menu.Item key="3" icon={<FolderOutlined />}>
            Archived Files
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ padding: "0 24px 24px" }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          Content
          {children}
        </Content>
      </Layout>
    </Layout>
      </body>
    </html>
  );
}
