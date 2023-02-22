import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from "react-router-dom";


export const PublicRoute = ({children, isAuthenticated}) => {
    return isAuthenticated ? (<Navigate to="/dashboard"/>) : (<div>{children}</div>)
}

const mapStateToProps = (state) =>({
    isAuthenticated: !!state.auth.uid
 })
 
 export default connect(mapStateToProps)(PublicRoute)