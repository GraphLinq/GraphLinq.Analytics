import React, { useState, useEffect } from 'react'
// import { Alert, AlertIcon, Grid, Heading } from '@chakra-ui/react';
import { POST_SELECTED_UNCX } from '../../store/actionNames/glqAction';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';

interface UnclProps {
  unclSelect: Object,
}

const Unicrypt: React.FC<UnclProps> = ({ }) => {

  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.uncxSelect);

  const [unclData, setUncldata] = useState(state);

  useEffect(() => {
    dispatch({ type: POST_SELECTED_UNCX, payLoad: { partient: 2 } })
  }, [])
  
  return (
    <main id="m">
      <div>
        <div className="cl">
          <div className="blc cl50">
            <div>
              <div className="top">
                <small>Unicrypt data</small>
                <h2>
                  <strong>"ath": {state.ath}</strong> <span className="gr">+4.73%</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl50">
            <div>
              <div className="top">
                <small>Unicrypt data</small>
                <h2>
                  <strong>"market_cap": {state.market_cap}</strong> <span className="re">-4.73%</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl33">
            <div>
              <div className="top">
                <small>Unicrypt data</small>
                <h2>
                  <strong>"volume": {state.volume}</strong> <span className="re">-4.73%</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl66">
            <div>
              <div className="top">
                <small>Unicrypt data</small>
                <h2>
                  <strong>"total_supply": {state.total_supply}</strong> <span className="gr">-4.73%</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl66">
            <div>
              <div className="top">
                <small>Unicrypt data</small>
                <h2>
                  <strong>"price": {state.price}</strong> <span className="gr">-4.73%</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl66">
            <div>
              <div className="top">
                <small>Unicrypt data</small>
                <h2>
                  <strong>"holders": {state.holders}</strong> <span className="gr">-4.73%</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Unicrypt;
