import React, { useState, SyntheticEvent } from "react";
import {
  Button,
  Item,
  ItemContent,
  ItemDescription,
  ItemExtra,
  ItemGroup,
  ItemHeader,
  ItemMeta,
  Label,
  Segment,
} from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

export default observer(function ActivityList() {
  const { activityStore } = useStore();
  const { deleteActivity, activitiesByDate, loading } = activityStore;

  const [target, setTarget] = useState("");

  function handleActivityDelete(
    e: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) {
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  }

  return (
    <Segment>
      <ItemGroup divided>
        {activitiesByDate.map((act) => (
          <Item key={act.id}>
            <ItemContent>
              <ItemHeader as="a">{act.title}</ItemHeader>
              <ItemMeta>{act.date}</ItemMeta>
              <ItemDescription>
                <div>{act.description}</div>
                <div>
                  {act.city}, {act.venue}
                </div>
              </ItemDescription>
              <ItemExtra>
                <Button
                  as={Link}
                  to={`/activities/${act.id}`}
                  floated="right"
                  content="View"
                  color="blue"
                ></Button>
                <Button
                  name={act.id}
                  loading={loading && target === act.id}
                  onClick={(e) => handleActivityDelete(e, act.id)}
                  floated="right"
                  content="Delete"
                  color="red"
                ></Button>
                <Label basic content={act.category}></Label>
              </ItemExtra>
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
    </Segment>
  );
});
