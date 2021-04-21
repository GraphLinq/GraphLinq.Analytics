import React, { useEffect } from 'react'
import SideBarLayout from './sidebar';
import HeaderLayout from './header';

interface LayoutProps {

}

const IndexLayout: React.FC<LayoutProps> = ({children}) => {
    useEffect(() => {
        let vendor = document.createElement("script")
        vendor.src = `/template/js/vendor.js?v=3`
        document.body.appendChild(vendor)

        let app = document.createElement("script")
        app.src = `/template/js/app.js?v=2`
        document.body.appendChild(app)
    }, [])

    return (
    <div id="app">
        <SideBarLayout />
        <HeaderLayout />
         {children}
        <div id="x"><div id="xx"></div></div>
    </div>
    );
}

export default IndexLayout;
