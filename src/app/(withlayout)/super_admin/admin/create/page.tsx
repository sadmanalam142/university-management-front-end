"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormInputTextArea from "@/components/Forms/FormInputTextArea";
import FormSelectField from "@/components/Forms/FormSelectField";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UploadImage from "@/components/ui/UploadImage";
import {
  bloodGroupOptions,
  departmentOptions,
  genderOptions,
} from "@/constants/global";
import { getUserInfo } from "@/services/auth.service";
import { Button, Col, Row } from "antd";
import { useState, useEffect } from "react";

const CreateAdmin = () => {
  const [role, setRole] = useState("");
  const userInfo = getUserInfo() as any;

  useEffect(() => {
    if (userInfo) {
      const userRole = userInfo?.role;
      setRole(userRole);
    }
  }, [userInfo]);

  const onSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <UMBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
          {
            label: "admin",
            link: `/${role}/admin`,
          },
        ]}
      />
      <h1>Create Admin</h1>
      <div>
        <Form submitHandler={onSubmit}>
          <div
            style={{
              border: "1px solid lightBlue",
              width: "100%",
              padding: "10px",
              marginBottom: "20px",
            }}
          >
            <h3>Admin Information</h3>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                style={{ marginTop: "10px" }}
                className="gutter-row"
                span={8}
              >
                <FormInput
                  name="admin.name.firstName"
                  type="text"
                  size="large"
                  label="First Name"
                />
              </Col>
              <Col
                style={{ marginTop: "10px" }}
                className="gutter-row"
                span={8}
              >
                <FormInput
                  name="admin.name.middleName"
                  type="text"
                  size="large"
                  label="Middle Name"
                />
              </Col>
              <Col
                style={{ marginTop: "10px" }}
                className="gutter-row"
                span={8}
              >
                <FormInput
                  name="admin.name.lastName"
                  type="text"
                  size="large"
                  label="Last Name"
                />
              </Col>
              <Col
                style={{ marginTop: "10px" }}
                className="gutter-row"
                span={8}
              >
                <FormInput
                  name="password"
                  type="password"
                  size="large"
                  label="Password"
                />
              </Col>
              <Col
                style={{ marginTop: "10px" }}
                className="gutter-row"
                span={8}
              >
                <FormSelectField
                  name="admin.gender"
                  size="large"
                  options={genderOptions}
                  label="Gender"
                  placeholder="select"
                />
              </Col>
              <Col
                style={{ marginTop: "10px" }}
                className="gutter-row"
                span={8}
              >
                <FormSelectField
                  name="admin.managementDepartment"
                  size="large"
                  options={departmentOptions}
                  label="Department"
                  placeholder="select"
                />
              </Col>
              <Col
                style={{ marginTop: "10px" }}
                className="gutter-row"
                span={8}
              >
                <UploadImage />
              </Col>
            </Row>
          </div>
          <div
            style={{
              border: "1px solid lightBlue",
              width: "100%",
              padding: "10px",
            }}
          >
            <h3>Basic Information</h3>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                style={{ marginTop: "10px" }}
                className="gutter-row"
                span={8}
              >
                <FormInput
                  name="admin.email"
                  type="email"
                  size="large"
                  label="Email"
                />
              </Col>
              <Col
                style={{ marginTop: "10px" }}
                className="gutter-row"
                span={8}
              >
                <FormInput
                  name="admin.contactNo"
                  type="text"
                  size="large"
                  label="Contact Number"
                />
              </Col>
              <Col
                style={{ marginTop: "10px" }}
                className="gutter-row"
                span={8}
              >
                <FormInput
                  name="admin.emergencyContactNo"
                  type="text"
                  size="large"
                  label="Emergency Contact Number"
                />
              </Col>
              <Col
                style={{ marginTop: "10px" }}
                className="gutter-row"
                span={8}
              >
                <FormInput
                  name="password"
                  type="password"
                  size="large"
                  label="Password"
                />
              </Col>
              <Col
                style={{ marginTop: "10px" }}
                className="gutter-row"
                span={8}
              >
                <FormSelectField
                  name="admin.bloodGroup"
                  size="large"
                  options={bloodGroupOptions}
                  label="Blood Group"
                  placeholder="select"
                />
              </Col>
              <Col
                style={{ marginTop: "10px" }}
                className="gutter-row"
                span={8}
              >
                <FormInput
                  name="admin.designation"
                  type="text"
                  size="large"
                  label="Designation"
                />
              </Col>
              <Col
                style={{ marginTop: "10px" }}
                className="gutter-row"
                span={12}
              >
                <FormInputTextArea
                  name="admin.presentAddress"
                  size="large"
                  row={3}
                  maxLength={6}
                  label="Present Address"
                />
              </Col>
              <Col
                style={{ marginTop: "10px" }}
                className="gutter-row"
                span={12}
              >
                <FormInputTextArea
                  name="admin.parmanentAddress"
                  size="large"
                  row={3}
                  maxLength={6}
                  label="Parmanent Address"
                />
              </Col>
            </Row>
          </div>
          <Button
            style={{ marginTop: "10px" }}
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateAdmin;
