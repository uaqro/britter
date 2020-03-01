import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {MyContext} from '../contexts/context'

export const ProtectedRoute = ({ component: Component, ...rest}) => {
    return (
        <MyContext.Consumer>
        {context => (
            <Route 
            {...rest}
            render = {props =>{
                if(context.state.loggedUser){
                    return <Component {...props}/>;
                } else{
                    return (
                        <Redirect
                        to={{
                            pathname: "/login",
                            state: {
                              from: props.location
                            }
                        }}
                        />
                    );
                }
            }}
            />
        )}
        </MyContext.Consumer>
    );
}