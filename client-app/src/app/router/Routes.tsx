import { BrowserRouter  } from "react-router-dom";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityDetails from "../../features/activities/details/ActivityDetails";
import ActivityForm from "../../features/activities/form/ActivityForm";
import App from "../layout/App";

export const routes: RouteObject[] = [
    {
        path: '/',
        component: <App />,
        children: [
            {path: 'activities', component: <ActivityDashboard />},
            {path: 'activities/:id', component: <ActivityDetails />},
            {path: 'createActivity', component: <ActivityForm key='create' />},
            {path: 'manage/:id', component: <ActivityForm key='manage' />},
        ]
    }
]

export const router = createBrowserRouter(routes);