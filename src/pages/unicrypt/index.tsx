import React, { useState, useEffect } from 'react'
import HeaderLayout from './header'
import UnicryptContent from './unicrypt'
interface UnclProps {
}

const Unicrypt: React.FC<UnclProps> = ({ }) => {

  return (
    <div>
      <HeaderLayout />
      <UnicryptContent />
    </div>
  );
}

export default Unicrypt;
