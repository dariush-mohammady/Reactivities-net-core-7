import React, { Fragment } from "react";
import {
  Button,
  Container,
  Menu,
  MenuItem,
  Image,
  Dropdown,
} from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";

export default observer(function Navbar() {
  const {
    userStore: { user, logout },
  } = useStore();

  return (
    // @ts-ignore
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
          {/* @ts-ignore */}
          <Menu.Item position="right">
            <Image
              src={user?.image || "/assets/user.png"}
              avatar
              spaced="right"
            />
            {/* @ts-ignore */}
            <Dropdown pointing="top left" text={user?.displayName}>
              <Dropdown.Menu>
                {/* @ts-ignore */}
                <Dropdown.Item
                  as={Link}
                  to={`/profile/${user?.username}`}
                  text="My Profile"
                  icon="user"
                />
                {/* @ts-ignore */}
                <Dropdown.Item onClick={logout} text="Logout" icon="power" />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        </Container>
      </Menu>
    </Fragment>
  );
});
