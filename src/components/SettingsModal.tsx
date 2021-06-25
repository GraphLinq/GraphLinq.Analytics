// @ts-nocheck
import { React, useState } from "react";
/* eslint-disable */
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import Toggle from "./Toggle";
import "./SettingsModal.scss";

interface Props {
  openSettingsModal: boolean;
  toggleSettingsModal: () => void;
  allColumns: () => void;
  IndeterminateCheckbox: () => void;
  getToggleHideAllColumnsProps: any;
}

const SettingsModal: React.FC<Props> = (props) => {
  const {
    openSettingsModal,
    toggleSettingsModal,
    allColumns,
    IndeterminateCheckbox,
    getToggleHideAllColumnsProps,
  } = props;
  const [value, setValue] = useState(false);

  const modalStyle = {
    position: "absolute",
    borderRadius: "20px",
    marginLeft: "auto",
    marginRight: "auto",
    left: "250px",
    right: "0",
  };

  return (
    <Rodal
      customStyles={modalStyle}
      visible={openSettingsModal}
      onClose={toggleSettingsModal}
      showCloseButton={true}
    >
      <div className="Settings-modal">
        <div className="Settings-modal-header">Show / Hide Columns</div>
        <div className="Settings-modal-slippage">
          {/* <div className="Settings-modal-slippage-content"></div> */}
        </div>
        <div className="Settings-modal-info">
          <label className="modal-font">
            <IndeterminateCheckbox {...getToggleHideAllColumnsProps()} /> Toggle
            All
          </label>
        </div>
        {allColumns.map((column) => (
          <div className="Settings-modal-info1" key={column.id}>
            <label className="modal-font">
              <input type="checkbox" {...column.getToggleHiddenProps()} />{" "}
              {column.Header}
            </label>
          </div>
        ))}
      </div>
    </Rodal>
  );
};

export default SettingsModal;
