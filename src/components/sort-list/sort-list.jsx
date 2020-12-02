import React from "react";
import {FILTERS} from "../../constant";
import PropTypes from "prop-types";
import SortItem from "../sort-item/sort-item";


const SortList = (props) => {
  const {activeFilter, changeFilter, toggle} = props;
  return (
    <ul className={toggle ? `places__options places__options--custom places__options--opened` : `places__options places__options--custom`}>
      {FILTERS.map((filterItem, i) => (
        <SortItem key={filterItem[i]} changeFilter={changeFilter} filter={filterItem} activeFilter={activeFilter}/>))}
    </ul>
  );
};

SortList.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
  toggle: PropTypes.bool.isRequired,
};

export default SortList;
