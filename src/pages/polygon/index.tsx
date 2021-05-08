import React, { useState, useEffect } from 'react'
import HeaderLayout from './header'
import PolygonContent from './polygon'
interface PolygonProps {
}

const Polygon: React.FC<PolygonProps> = ({ }) => {

  return (
    <div>
      <HeaderLayout />
      <PolygonContent />
    </div>
  );
}

export default Polygon;
