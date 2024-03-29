import React from "react";

import { Box, Link } from "@chakra-ui/react";
import { matchPath, NavLink, useLocation } from "react-router-dom";

import routes from "../../routes/sidebar";

interface LayoutProps {}

const SideBarLayout: React.FC<LayoutProps> = () => {
  let topRoute = [];
  let newRoutes = [];
  let sidebarRoutes = routes;

  let location = useLocation();
  let matchUnicrypt = matchPath(location.pathname, {
    path: [
      "/analytics/unicrypt",
      "/analytics/unicrypt/liquidity",
      "/analytics/unicrypt/prices",
      "/analytics/unicrypt/charts",
    ],
    exact: true,
    strict: false,
  });
  let matchPolygon = matchPath(location.pathname, {
    path: [
      "/analytics/polygon",
      "/analytics/polygon/liquidity",
      "/analytics/polygon/prices",
      "/analytics/unicrpolygonypt/charts",
    ],
    exact: true,
    strict: false,
  });

  if (location.pathname === "/analytics/graphlinq") {
    sidebarRoutes = routes;
  } else if (matchUnicrypt) {
    topRoute = routes.slice(1, 3);
    newRoutes = routes.slice(0, 1);
    sidebarRoutes = topRoute.concat(newRoutes);
  } else if (matchPolygon) {
    topRoute = routes.slice(2, 3);
    newRoutes = routes.slice(0, 2);
    sidebarRoutes = topRoute.concat(newRoutes);
  }

  return (
    <aside id="a">
      <div>
        <a href="/" title="Back to home" className="lo">
          <img
            src="../../../template/img/logo.svg?v=3"
            alt="graphlinq analytics"
          />
        </a>
        <nav id="n">
          <ul>
            <li className="ac">
              <a href="/analytics/graphlinq" title="">
                <i className="fal fa-chart-line" />
                <span>Overview</span>
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://docs.graphlinq.io"
                title="GraphLinq Documentation"
              >
                <i className="fal fa-folder-tree" />
                <span>Documentation</span>
              </a>
            </li>
            <hr />
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://graphlinq.io"
                title="GraphLinq Documentation"
              >
                <i className="fal fa-home" />
                <span>GraphLinq Homepage</span>
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://ide.graphlinq.io"
                title="GraphLinq IDE"
              >
                <i className="fal fa-chart-network" />
                <span>GraphLinq IDE</span>
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://app.graphlinq.io"
                title="GraphLinq Interface"
              >
                <i className="fal fa-tachometer" />
                <span>App Dashboard</span>
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://marketplace.graphlinq.io"
                title="GraphLinq Documentation"
              >
                <i className="fal fa-handshake" />
                <span>MarketPlace</span>
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://status.graphlinq.io"
                title="GraphLinq Documentation"
              >
                <i className="fal fa-eye" />
                <span>GLQ Chain Status</span>
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://explorer.graphlinq.io"
                title="GraphLinq Documentation"
              >
                <i className="fal fa-compass" />
                <span>GLQ Chain Explorer</span>
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://ai.graphlinq.io"
                title="GraphLinq Documentation"
              >
                <i className="fal fa-compass" />
                <span>AI</span>
              </a>
            </li>
          </ul>
        </nav>
        <div id="sl">
          <ul>
            {sidebarRoutes.map((route: any, index: number) => (
              <li key={index}>
                <Link as={NavLink} exact to={route.path}>
                  <Box
                    w="20px"
                    p="2px"
                    mr="15px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <img src={route.imgSrc} alt="Unicrypt" />
                  </Box>
                  <strong>{route.name}</strong>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default SideBarLayout;
