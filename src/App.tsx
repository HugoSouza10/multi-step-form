import ReactDOM from 'react-dom';
import React from 'react';

import {FormProvider } from './contexts/formContext';
import {Router} from './Router';


function App() {
  return (
    <FormProvider>
        <Router/>
    </FormProvider>
    
  );
}

export default App;
