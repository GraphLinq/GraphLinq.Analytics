import React, { Suspense, useEffect } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom';
import { Flex, Box } from '@chakra-ui/react';

import routes from '../../routes/sidebar';
import { SuspenseSpinner } from '../suspenseSpinner';

interface LayoutProps {

}

const SideBarLayout: React.FC<LayoutProps> = ({ }) => {

    useEffect(() => {

    }, [])

    return (
        <aside id="a">
        <div>
          <a href="index.html" title="Back to home" className="lo">
            <img src="./template/img/logo.svg?v=3" alt="graphlinq analytics" />
          </a>
          <nav id="n">
            <ul>
              <li className="ac"><a href="" title=""><i className="fal fa-chart-line" /><span>Overview</span></a></li>
              <li><a href="" title=""><i className="fal fa-chart-network" /><span>Graph IDE</span></a></li>
              <li><a href="" title=""><i className="fal fa-tachometer" /><span>Dashboard</span></a></li>
              <li><a href="" title=""><i className="fal fa-folder-tree" /><span>Documentation</span></a></li>
            </ul>
          </nav>
          <div id="sl">
            <ul>
              <li className="sl"><a data-href=""><div className="illu"><img src="/template/img/unicrypt.svg" alt="Unicrypt" /></div><strong>Unicrypt</strong></a></li>
              <li><a data-href=""><div className="illu"><img src="/template/img/unicrypt.svg" alt="Unicrypt" /></div><strong>Projet</strong></a></li>
              <li><a data-href=""><div className="illu"><img src="/template/img/unicrypt.svg" alt="Unicrypt" /></div><strong>Projet</strong></a></li>
              <li><a data-href=""><div className="illu"><img src="/template/img/unicrypt.svg" alt="Unicrypt" /></div><strong>Projet</strong></a></li>
              <li><a data-href=""><div className="illu"><img src="/template/img/unicrypt.svg" alt="Unicrypt" /></div><strong>Projet</strong></a></li>
              <li><a data-href=""><div className="illu"><img src="/template/img/unicrypt.svg" alt="Unicrypt" /></div><strong>Projet</strong></a></li>
              <li><a data-href=""><div className="illu"><img src="/template/img/unicrypt.svg" alt="Unicrypt" /></div><strong>Projet</strong></a></li>
            </ul>
          </div>
        </div>
      </aside>
    );
}

export default SideBarLayout;