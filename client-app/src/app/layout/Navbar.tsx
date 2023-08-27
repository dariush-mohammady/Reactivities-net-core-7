import React, { Fragment } from "react";
import { Button, Container, Menu, MenuItem } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Fragment>
      {/* @ts-ignore */}
      <Menu inverted fixed="top">
        <Container>
          {/* @ts-ignore */}
          <MenuItem exact as={NavLink} to="/" header>
            <img
              src="./assets/logo.png"
              alt="logo"
              style={{ marginRight: "10px" }}
            />
            Reactivities
          </MenuItem>
          {/* @ts-ignore */}
          <MenuItem as={NavLink} to="/activities" name="Activities"></MenuItem>
          {/* @ts-ignore */}
          <MenuItem>
          {/* @ts-ignore */}
            <Button
              as={NavLink}
              to="/createActivity"
              positive
              content="Create Activity"
            ></Button>
          </MenuItem>
        </Container>
      </Menu>
    </Fragment>
  );
}
