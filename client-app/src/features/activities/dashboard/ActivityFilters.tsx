import React, { Fragment } from "react";
import Calendar from "react-calendar";
import { Menu, Header } from "semantic-ui-react";

export default function ActivityFilters() {
  return (
    <Fragment>
        {/* @ts-ignore */}
      <Menu vertical size="large" style={{ width: "100%", marginTop: 25 }}>
        <Header icon="filter" attached color="teal" content="Filters">
          {" "}
        </Header>
        {/* @ts-ignore */}
        <Menu.Item content="All Activities"></Menu.Item>
        {/* @ts-ignore */}
        <Menu.Item content="I'm going"></Menu.Item>
        {/* @ts-ignore */}
        <Menu.Item content="I'm hosting"></Menu.Item>
      </Menu>
      <Header></Header>
      <Calendar />
    </Fragment>
  );
}
