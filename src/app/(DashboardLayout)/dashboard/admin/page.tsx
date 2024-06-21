"use client";
import { useGetMetaQuery } from "@/redux/features/meta/meta.api";
import { Card, Col, Row, Spin } from "antd";
import React from "react";

const DashboardHome = () => {
  const { data, isFetching } = useGetMetaQuery(undefined);

  if (isFetching) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-100px)]">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="px-2">
      <h2 className="text-2xl font-bold border-b-2 mb-5 py-4 text-center">
        Admin Dashboard
      </h2>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Total Adoption Requests" bordered={false}>
            <p className="text-2xl font-bold text-primary">
              {data?.data?.totalAdoptionRequest}
            </p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Total Pets" bordered={false}>
            <p className="text-2xl font-bold text-primary">
              {data?.data?.totalPet}
            </p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Total Users" bordered={false}>
            <p className="text-2xl font-bold text-primary">
              {data?.data?.totalUser}
            </p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardHome;
