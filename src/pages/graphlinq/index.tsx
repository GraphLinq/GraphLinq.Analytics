import React from 'react';
import GraphLinqContent from './graphlinq';
import HeaderLayout from './header'

interface GlqLinqProps {

}

const GraphLinq: React.FC<GlqLinqProps> = ({ }) => {

  return (
    <div>
      <HeaderLayout />
      <GraphLinqContent />
    </div>
  );
}

export default GraphLinq;