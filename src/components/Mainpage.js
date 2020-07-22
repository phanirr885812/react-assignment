import React from "react";
import Drag from "components/Dragrowcolumn";
import { connect } from "react-redux";
import {
  modify,
  addARow,
  addAColumn,
  updateStatus,
  editTitle,
  editTable,
  setProjectStatus,
} from "actions";
import { FiUserPlus } from "react-icons/fi";
import {FaRegUserCircle} from "react-icons/fa";
const toolTipCol = ({
  modifyDetails,
  modify,
  addAColumn,
  addARow,
  updateStatus,
  editTitle,
  editTable,
  setProjectStatus,
}) => (
  <div className="main">
    <header className="main__header">
      <div className="main__header--top">
        <div className="main__header__title">
          <h1>Web design</h1>
          <h3>Add board description</h3>
        </div>
        <div className="main__header__controls">
          <FaRegUserCircle style={{margin:"5 15 0 0"}} color="#000" size={ 30}/>
          <div className="btn btn--polygon bottom"><FiUserPlus size={15} style={{margin:"5 15 0 0"}} />Button 1</div>
          <div className="btn btn--polygon bottom"><FiUserPlus size={15} style={{margin:"5 15 0 0"}} />Start Zoom Call</div>
          <div className="btn btn--polygon bottom">Activity1</div>
          <div className="btn btn--polygon bottom">Acticity2</div>
        </div>
      </div>
      <div className="main__header--bottom">
        <div className="main__header__title">
          <p>Main Table</p>
        </div>
        <div className="main__header__controls">
          <div className="btn btn--blue">New Item</div>
           
        </div>
      </div>
    </header>
    <div className="main__content">
      <Drag
        heads={modifyDetails.titles}
        rows={modifyDetails.content}
        onDragEnd={(data) => modify(data)}
        addARow={addARow}
        addAColumn={addAColumn}
        updateStatus={updateStatus}
        editTitle={editTitle}
        editTable={editTable}
        progressStatus={modifyDetails.progressStatues}
      />
    </div>
  </div>
);

export default connect(
  (state) => ({
    modifyDetails: state.modifyDetails,
  }),

  {
    modify,
    addARow,
    addAColumn,
    updateStatus,
    editTitle,
    editTable,
    setProjectStatus,
  }
)(toolTipCol);
