import React from 'react';
import {View} from 'react-native';
import { Switch, Route,MemoryRouter } from "react-router";
import {Home} from '../Pages/home.tsx';
import {Create} from '../Pages/create.tsx';
import {List} from '../Pages/list.tsx';
export default class Router extends React.Component{
    render(){
        return(
            <MemoryRouter>
        <Switch>
            
            

            <Route exact path="/" component={Home} />
            <Route exact  path="/create" component={Create} />
            <Route exact path="/list" component={List} />
            
        </Switch>
        </MemoryRouter>
        );
    }
}