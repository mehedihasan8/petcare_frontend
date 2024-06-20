"use client";
import React from "react";
import { Card, Col, Row, Spin } from "antd";
import { useGetMetaQuery } from "@/redux/features/meta/meta.api";

const UserDashboardHome = () => {
  const { data, isFetching } = useGetMetaQuery(undefined);

  if (isFetching) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-100px)]">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2 className="text-2xl font-semibold border-b-2 mb-5 py-2 text-center">
        Customer Dashboard
      </h2>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="My Adoption Requests" bordered={false}>
            <p className="text-2xl font-bold">
              {data?.data?.totalAdoptionRequest}
            </p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Total Pets" bordered={false}>
            <p className="text-2xl font-bold">{data?.data?.totalPet}</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Total Users" bordered={false}>
            <p className="text-2xl font-bold">{data?.data?.totalUser}</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default UserDashboardHome;
