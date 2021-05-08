import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import '../../app.css'
import { Box } from '@chakra-ui/react';

interface PolygonProps {
}

const PolygonContent: React.FC<PolygonProps> = ({ }) => {

  return (
    <main id="m">
      <div className="blc cl50">
        <div>
          <div className="top">
            <h2>
              <strong>
                Coming Soon...
              </strong>
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PolygonContent;
