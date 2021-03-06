import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map((a)=>
          <Tab 
            tab={a}
            selectTabHandler={props.selectTabHandler}
            selectedTab={props.selectedTab}
          />
          )}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!

Tabs.propTypes={
  tabs: PropTypes.string,
}
export default Tabs;
