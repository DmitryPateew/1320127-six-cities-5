import React from "react";
import {FILTER} from "../../constant";
import PropTypes from "prop-types";
import SortItem from "../sortItem/sortItem";


const SortList = (props) => {
  const {activeFilter, changeFilter} = props;
  return (
    <ul className="places__options places__options--custom places__options--opened">
      {FILTER.map((filterItem, i) => (
        <SortItem key={i} changeFilter={changeFilter} filter={filterItem} activeFilter={activeFilter}/>))}
    </ul>
  );
};

SortList.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default SortList;
