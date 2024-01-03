
import { useContext } from 'react';
import { Navigate,  } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';



const PrivetRoutes = ({children}) => {
  
    const {user} =  useContext(AuthContext);


    return user ? (
        children
    ):(

        <Navigate to="/signup" replace> 
             
        </Navigate>
    )
};

export default PrivetRoutes;