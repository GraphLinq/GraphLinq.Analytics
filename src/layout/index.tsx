import React, { Suspense } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom';
import { Flex, Box } from '@chakra-ui/react';

import routes from '../routes';
import { SuspenseSpinner } from '../components/suspenseSpinner';
import SideBarLayout from './sidebar';

interface LayoutProps {

}

const IndexLayout: React.FC<LayoutProps> = ({ }) => {
    return (
    <div id="app">
        <SideBarLayout />
         Main Layout
    </div>
    );
}

export default IndexLayout;