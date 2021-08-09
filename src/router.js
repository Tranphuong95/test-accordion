import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import GridData from "./component/GridData";
import ProjectDetail from './component/ProjectDetail'
const Routers=(props)=>{
    return (
        <Switch>
            <Route path="/grid-data" component={GridData}/>
            <Route path="/:id" component={ProjectDetail}/>
        </Switch>  
    )
}
export default Routers;