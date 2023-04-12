import { Navigate } from 'react-router-dom'

export const PrivateRoutes = ({ children }) => {
    const getTokenFromLoaclStrorage = JSON.parse(localStorage.getItem('customer'))
    return getTokenFromLoaclStrorage?.token !== null ? children : (<Navigate to='/login' replace={true} />)
}