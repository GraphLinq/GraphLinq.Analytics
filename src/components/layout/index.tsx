import React, { Suspense, useEffect } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom';
import { Flex, Box } from '@chakra-ui/react';

import routes from '../../routes/index';
import { SuspenseSpinner } from '../suspenseSpinner';
import SideBarLayout from './sidebar';
import HeaderLayout from './header';

interface LayoutProps {

}

const IndexLayout: React.FC<LayoutProps> = ({ }) => {
    useEffect(() => {
        let vendor = document.createElement("script")
        vendor.src = `/template/js/vendor.js?v=3`
        document.body.appendChild(vendor)

        let app = document.createElement("script")
        app.src = `/template/js/app.js?v=2`
        document.body.appendChild(app)
        console.log('loaded')
    }, [])

    return (
    <div id="app">
        <SideBarLayout />
        <HeaderLayout />
         Main Layout
         <div id="x"><div id="xx"></div></div>
    </div>
    );
}

export default IndexLayout;