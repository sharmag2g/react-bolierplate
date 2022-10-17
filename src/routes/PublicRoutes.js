import React from 'react'
import { Routes } from 'react-router-dom'
import Home from '../components/landingpage/Home'
import AuthLayout from '../components/layout/AuthLayout'
import RouteWithLayout from './RouteWithLayout'

const PublicRoutes = () => {
    return (
        <Routes>
            <RouteWithLayout
                path="/"
                component={<Home />}
                layout={AuthLayout}
            />
        </Routes>
    )
}

export default PublicRoutes