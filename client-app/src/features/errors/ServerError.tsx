import React from "react";
import { useStore } from "../../app/stores/store";
import { Container, Header, Segment } from "semantic-ui-react";
import { observer } from "mobx-react-lite";

export default observer(function ServerError() {
  const { commonStore } = useStore();

  return (
    <Container>
      <Header as="h1" content="Server Error"></Header>
      <Header
        sub
        as="h4"
        color="red"
        content={commonStore.error?.message}
      ></Header>
      {commonStore.error?.details && (
        <Segment>
          <Header as="h4" content="Stack Trace" color="teal"></Header>
          <code style={{ marginTop: "10px" }}>{commonStore.error.details}</code>
        </Segment>
      )}
    </Container>
  );
});
