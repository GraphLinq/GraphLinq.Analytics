import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { POST_SELECTED_GLQ } from '../../store/actionNames/glqAction';
import { RootState } from '../../store/reducers';

interface GlqProps {

}

const GraphLinqContent: React.FC<GlqProps> = ({ }) => {
  const dispatch = useDispatch();
  const glqState = useSelector((state: RootState) => state.glqSelect || {});

  useEffect(() => {
    dispatch({ type: POST_SELECTED_GLQ, payLoad: glqState })
  }, [])
  // console.log("Graphliq header glqState::", glqState)

  return (
    <main id="m">
      <div>
        <div className="cl">
          <div className="blc cl50">
            <div>
              <div className="top">
                <small>Graphlinq data</small>
                <h2>
                  <strong>Zero</strong> <span className="gr">+4.73%</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl50">
            <div>
              <div className="top">
                <small>Graphlinq data</small>
                <h2>
                  <strong>First</strong> <span className="re">-4.73%</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl33">
            <div>
              <div className="top">
                <small>Graphlinq data</small>
                <h2>
                  <strong>Second</strong> <span className="re">-4.73%</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl66">
            <div>
              <div className="top">
                <small>Graphlinq data</small>
                <h2>
                  <strong>Third</strong> <span className="gr">-4.73%</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl66">
            <div>
              <div className="top">
                <small>Graphlinq data</small>
                <h2>
                  <strong>Fourth</strong> <span className="gr">-4.73%</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="blc cl66">
            <div>
              <div className="top">
                <small>Graphlinq data</small>
                <h2>
                  <strong>Fifth</strong> <span className="gr">-4.73%</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default GraphLinqContent;
