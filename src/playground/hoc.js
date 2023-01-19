
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
      <h1>Info</h1>
      <p>The info is:{props.info}</p>
    
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
           {props.isAdmin && <p>This is a confidental information</p>}
           <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) =>(
        <div>
          {props.isAuth ? <WrappedComponent {...props} /> : <p>Pleace write your email</p>}
        
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);


// ReactDOM.render(<AdminInfo isAdmin={true} info='some interesting facts'/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuth={false} info='some interesting facts'/>, document.getElementById('app'));