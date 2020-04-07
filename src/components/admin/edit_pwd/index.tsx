import React, { useState, useEffect } from "react";
import {
  SchemaForm,
  createFormActions,
  Submit,
  FormButtonGroup,
} from "@formily/antd";
import { PageHeader } from "antd";
/**
 * @description 修改密码组件
 */

const actions = createFormActions();

const schema = {
  type: "object",
  properties: {
    oldPwd: {
      type: "string",
      title: "原密码",
      required: true,
    },
    newPwd: {
      type: "string",
      title: "新密码",
      required: true,
    },
    repeatPwd: {
      type: "string",
      title: "确认新密码",
      required: true,
    },
  },
};

interface FormData {
  newPwd: string;
  oldPwd: string;
  repeatPwd: string;
}

export default function EditPwd() {
  const [formData, setFormData] = useState<FormData>();

  useEffect(() => {
    // TODO: 此处提交请求即可
    console.log(
      "%c修改密码提交表单内容",
      "background: #69c0ff; color: white; padding: 4px",
      formData
    );
  });

  return (
    <div className="edit_box">
      <PageHeader title="修改密码" />
      {/*
  // @ts-ignore */}
      <SchemaForm
        actions={actions}
        labelCol={6}
        wrapperCol={6}
        schema={schema}
        onSubmit={(v: FormData) => setFormData(v)}
      >
        <FormButtonGroup offset={6}>
          <Submit />
        </FormButtonGroup>
      </SchemaForm>
    </div>
  );
}
