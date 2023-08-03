import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Header, List, ListItem } from "semantic-ui-react";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/activities").then((res) => {
      console.log(res);
      setActivities(res.data);
    });
  }, []);

  return (
    <div>
      <Header as="h2" icon="users" content="Reactivities"></Header>
      <List>
        {activities.map((act: any) => (
          <ListItem key={act.id}>{act.title}</ListItem>
        ))}
      </List>
    </div>
  );
}

export default App;
