import React from 'react';
import { connect } from 'react-redux';
import { Route , Redirect } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import Header from "../components/Header";

export const PrivateRoute = ({children, isAuthenticated}) =>{
  return isAuthenticated ? (
      <div>
        <Header />
        {children}
      </div>
       ) : (
      <Navigate to="/" />
      );
}
// export const PrivateRoute = ({isAuthenticated,component:Component,...rest}) =>(
//    <Route {...rest} component={(props)=>{
//       isAuthenticated ? (<Component {...props}/>) : (<Redirect to='/'/>)
//    }}/>
// )
const mapStateToProps = (state) =>({
   isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute)