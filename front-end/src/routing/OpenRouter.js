import { Navigate } from 'react-router-dom'

export const OpenRoutes = ({ children }) => {
    const getTokenFromLoaclStrorage = JSON.parse(localStorage.getItem('customer'))
    return getTokenFromLoaclStrorage?.token === null ? children : (<Navigate to='/' replace={true} />)
}