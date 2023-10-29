"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { Button, Col, Row } from "antd";
import React from "react";

const CreateAdmin = () => {
  const onSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (err: any) {
      console.log(err.message);
    }
  };
  return (
    <div>
      <h1>Create Admin</h1>
      <div>
        <Form submitHandler={onSubmit}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={8}>
              <FormInput
                name="admin.name.firstName"
                type="text"
                size="large"
                label="First Name"
              />
            </Col>
            <Col className="gutter-row" span={8}>
              <FormInput
                name="admin.name.middleName"
                type="text"
                size="large"
                label="Middle Name"
              />
            </Col>
            <Col className="gutter-row" span={8}>
              <FormInput
                name="admin.name.lastName"
                type="text"
                size="large"
                label="Last Name"
              />
            </Col>
            <Col className="gutter-row" span={8}>
              <FormInput
                name="password"
                type="password"
                size="large"
                label="Password"
              />
            </Col>
          </Row>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateAdmin;
