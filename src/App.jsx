import React from 'react';
import { AuthProvider } from './components/AuthContext';
import ChildComponent from './components/childComponent';

const App = () => {
  return (
    <AuthProvider>
      <ChildComponent/>
    </AuthProvider>
  );
};

export default App;