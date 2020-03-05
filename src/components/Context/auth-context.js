import React from 'react';

// export const session = {
//     session:'',
//     user:''
//   };
  
  export const SessionContext = React.createContext({
    token: 'null',
    user:'none',
    startLoginSession: () => {},  // default value
  });