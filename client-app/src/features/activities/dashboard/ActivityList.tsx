import React from 'react';
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
    Segment
} from 'semantic-ui-react';
import {Activity} from '../../../app/models/activity';


interface Props {
    activities: Activity[]
    selectActivity: (id: string) => void
    deleteActivity: (id: string) => void
}

export default function ActivityList({activities, selectActivity, deleteActivity}: Props) {
    return (
        <Segment>
            <ItemGroup divided>
                {activities.map(act => (
                    <Item key={act.id}>
                        <ItemContent>
                            <ItemHeader as='a'>{act.title}</ItemHeader>
                            <ItemMeta>{act.date}</ItemMeta>
                            <ItemDescription>
                                <div>{act.description}</div>
                                <div>{act.city}, {act.venue}</div>
                            </ItemDescription>
                            <ItemExtra>
                                <Button onClick={() => selectActivity(act.id)} floated='right' content='View' color='blue'></Button>
                                <Button onClick={() => deleteActivity(act.id)} floated='right' content='Delete' color='red'></Button>
                                <Label basic content={act.category}></Label>
                            </ItemExtra>
                        </ItemContent>
                    </Item>
                ))}
            </ItemGroup>
        </Segment>
    )
}