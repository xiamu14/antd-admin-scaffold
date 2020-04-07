import React from "react";
import { Modal } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

interface Iprops {
  pastDelay: boolean;
  timedOut: boolean;
  error: boolean;
}

const Loading = (props: Iprops) => {
  const { pastDelay, timedOut, error } = props;
  if (pastDelay) {
    return (
      <Modal
        visible
        wrapClassName="backgroundNone"
        closable={false}
        footer={null}
        bodyStyle={{ background: "rgba(208, 164, 34, 0)" }}
        style={{ textAlign: "center", background: "none" }}
      >
        <LoadingOutlined style={{ fontSize: 32, color: "#1890ff" }} />
        <p>加载中...</p>
      </Modal>
    );
  }
  if (timedOut) {
    return <div>稍等一下！...</div>;
  }
  if (error) {
    return <div>网络异常，请刷新页面</div>;
  }
  return null;
};

export default Loading;
