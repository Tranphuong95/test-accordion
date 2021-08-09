import { Button } from '@material-ui/core';
import React from 'react';
const ProjectDetail=(props)=>{
    const goBack=()=>{
        props.history.goBack()
    }
    return (
        <div>
            <h1>Hello Id {props.match.params.id}</h1>
            <Button onClick={goBack}>Trở về</Button>
        </div>
    )
}
export default ProjectDetail;