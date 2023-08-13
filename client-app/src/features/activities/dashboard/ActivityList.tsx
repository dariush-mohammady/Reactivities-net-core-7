import React, {useState} from 'react';
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
import {
    SyntheticEvent
} from "../../../../../../Rider/JetBrains Rider 2022.2.4/plugins/JavaScriptLanguage/jsLanguageServicesImpl/external/react";



interface Props {
    activities: Activity[]
    selectActivity: (id: string) => void
    deleteActivity: (id: string) => void
    submitting: boolean
}

export default function ActivityList({activities, selectActivity, deleteActivity, submitting}: Props) {
    
    const [target, setTarget] = useState('')
    
    function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name)
        deleteActivity(id)
    }
    
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
                                <Button
                                    name={act.id}    
                                    loading={submitting && target === act.id} 
                                    onClick={(e) => handleActivityDelete(e, act.id)} 
                                    floated='right' content='Delete' color='red'></Button>
                                <Label basic content={act.category}></Label>
                            </ItemExtra>
                        </ItemContent>
                    </Item>
                ))}
            </ItemGroup>
        </Segment>
    )
}