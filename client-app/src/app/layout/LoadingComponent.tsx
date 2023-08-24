import React, { Fragment } from "react";
import { Dimmer, Loader } from "semantic-ui-react";

interface Props {
  inverted?: boolean;
  content?: string;
}

export default function LoadingComponent({
  inverted = true,
  content = "Loading...",
}: Props) {
  return (
    <Fragment>
      <Dimmer active={true} inverted={inverted}>
        <Loader content={content}></Loader>
      </Dimmer>
    </Fragment>
  );
}
