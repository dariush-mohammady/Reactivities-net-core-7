import React, { useEffect } from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import ActivityFilters from "./ActivityFilters";

export default observer(function ActivityDashboard() {
  const { activityStore } = useStore();
  const { loadActivities, activityRegistery } = activityStore;

  useEffect(() => {
    if (activityRegistery.size <= 1) loadActivities();
  }, [activityRegistery.size, loadActivities]);

  if (activityStore.loadingInitial)
    return <LoadingComponent content="Loading app"></LoadingComponent>;

  return (
    <Grid>
      <GridColumn width="10">
        <ActivityList />
      </GridColumn>
      <GridColumn width="6">
        <ActivityFilters />
      </GridColumn>
    </Grid>
  );
});
