import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/styles.css'
import { ExampleComponent } from './lib';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <ExampleComponent
      isFocused={true}
      isDisabled={false}
      buttonText={'Button'}
      onClick={()=>{alert('Example Component.')}}
    />
  </>,
);