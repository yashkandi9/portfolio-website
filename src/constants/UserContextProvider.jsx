import { useState,createContext } from 'react';
import PropTypes from 'prop-types';

export const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
    const [data, setData] = useState(null);
    
    return (
        <UserContext.Provider value={{ data, setData }}>
            {children}
        </UserContext.Provider>
    );
};

UserContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default UserContextProvider;