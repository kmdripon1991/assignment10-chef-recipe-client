import React, { createContext } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
     const userInfo = {name:'ripon'}
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;