import React from "react";
import { Link } from "react-router-dom";
import { Button, Header, Icon, Segment } from "semantic-ui-react";

export default function NotFound() {
  return (
    <Segment placeholder>
      <Header icon>
        {/* @ts-ignore */}
        <Icon name="search"></Icon>
        Oops - we've looked everywhere and could not find this!
      </Header>
      <Segment.Inline>
        {/* @ts-ignore */}
        <Button as={Link} to="/activities" primary>
          Return to activities page
        </Button>
      </Segment.Inline>
    </Segment>
  );
}
