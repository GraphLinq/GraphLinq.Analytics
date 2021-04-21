import React, { Suspense, useEffect } from 'react'

import { Image, Box, Link } from '@chakra-ui/react';
import { NavLink, Route } from 'react-router-dom';

import routes from '../../routes/sidebar';

interface LayoutProps {

}

const SideBarLayout: React.FC<LayoutProps> = ({ }) => {

    return (
        <aside id="a">
        <div>
          <a href="index.html" title="Back to home" className="lo">
            <img src="../../../template/img/logo.svg?v=3" alt="graphlinq analytics" />
          </a>
          <nav id="n">
            <ul>
              <li className="ac"><a href="/analytics/graphlinq" title=""><i className="fal fa-chart-line" /><span>Overview</span></a></li>
              <li><a href="https://ide.graphlinq.io" title="GraphLinq IDE"><i className="fal fa-chart-network" /><span>Graph IDE</span></a></li>
              <li><a href="https://app.graphlinq.io" title="GraphLinq Interface"><i className="fal fa-tachometer" /><span>Dashboard</span></a></li>
              <li><a href="https://docs.graphlinq.io" title="GraphLinq Documentation"><i className="fal fa-folder-tree" /><span>Documentation</span></a></li>
            </ul>
          </nav>
          <div id="sl">
            <ul>
            {routes.map((route: any, index) => (
              <li key={index}>
                <Link
                as={NavLink}
                exact
                to={route.path}
                >
                  <Box w="20px" p="2px" mr="15px" display="flex" alignItems="center" justifyContent="center">
                    <Image maxH="full" maxW="full" src={route.imgSrc} alt="Unicrypt" />
                  </Box>
                <strong>{route.name}</strong>
                </Link>
              </li>
            ))}
              {/* <li className="sl"><a data-href=""><div className="illu"><img src="/template/img/unicrypt.svg" alt="Unicrypt" /></div><strong>Unicrypt</strong></a></li>
              <li><a data-href=""><div className="illu"><img src="/template/img/unicrypt.svg" alt="Unicrypt" /></div><strong>Projet</strong></a></li> */}
            </ul>
          </div>
        </div>
      </aside>
    );
}

export default SideBarLayout;
