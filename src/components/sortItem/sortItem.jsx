import React from "react";
import PropTypes from "prop-types";

const SortItem = (props) => {
  const {filter, activeFilter, changeFilter} = props;
  return (
    <li onClick={() => changeFilter(filter)} className={activeFilter === filter ? `places__option places__option--active` : `places__option`}
      tabIndex="0">{filter}</li>
  );
};

SortItem.propTypes = {
  filter: PropTypes.string.isRequired,
  activeFilter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default SortItem;
