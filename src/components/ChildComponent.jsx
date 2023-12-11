import React, { useContext } from 'react';
import AuthContext from './AuthContext';

const ChildComponent = () => {
    const  isAuthenticated  = useContext(AuthContext);

    return (
      <div>
        <h2>hello</h2>
        <p>User is {isAuthenticated ? 'authenticated' : 'not authenticated'}</p>
      </div>
    );
  };

export default ChildComponent
