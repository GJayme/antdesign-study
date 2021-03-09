import React from "react";
import { AutoComplete, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router";

const SideNav = () => {
  const history = useHistory();

  const handleUserClick = () => {
    history.push("/list");
  };

  const handleVideosClick = () => {
    history.push("/videos");
  };

  const handleFileClick = () => {
    history.push("/files");
  };

  return (
    <div>
      <div
        style={{
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Dashboard
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" onClick={handleUserClick}>
          <UserOutlined />
          <span> Users</span>
        </Menu.Item>
        <Menu.Item key="2" onClick={handleVideosClick}>
          <VideoCameraOutlined />
          <span> Videos</span>
        </Menu.Item>
        <Menu.Item key="3" onClick={handleFileClick}>
          <UploadOutlined />
          <span> Files</span>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default SideNav;
