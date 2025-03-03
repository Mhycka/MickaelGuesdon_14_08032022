import React, { useState } from "react";
import arrowIcon from "../Media/angle-down-solid.svg"


/** Modal showed when the employee is created
 * @param {string} selectValue- show in the input a default value
 * @param {function} handleSelectChange- change the employee state
 * @param {string} selectLabel- Label content
 * @param {array} selectList- List of elements in the dropdown
 * @param {string} selectName- used as id and to distinguish from other components
 * @param {boolean} isOpen- used as a condition to show the dropdown
 * @param {function} handleOpen- close the other opened dropdown or calendars 
 */
const Dropdown = ({
  selectValue,
  handleSelectChange,
  selectLabel,
  selectList,
  selectName,
  isOpen,
  handleOpen,
}) => {

  const [eltText,setEltText]=useState(selectValue.text)
  return (
    <div className="dropWrapper">
      <label htmlFor={`${selectName}-btn`} className="dropLabel">
        {selectLabel}
      </label>
      <span
        className={isOpen ?"dropdown bottom-border": "dropdown"}
        id={`${selectName}-btn`}
        onClick={() => handleOpen(selectName)}
      >
        <span>{eltText}</span>
        {isOpen ? <img  alt={"Arrow icon"} src={arrowIcon} className="iconArrow"></img> :<img alt={"Arrow icon"} src={arrowIcon}  className="iconArrow rotate"></img> } 
      </span>
      <div className={isOpen ? "dropOptions active" : "dropOptions"}>
        <ul id={`${selectName}-menu`}>
          {selectList.map((elt) => (
            <li
              key={elt.value}
              value={elt}
              onClick={() => {
                setEltText(elt.text)
                handleSelectChange(selectName, elt.value);
                handleOpen(selectName);
              }}
              id={`option-${elt.text}`}
              className="dropdown-option"
              tabIndex="-1"
            >
              {elt.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Dropdown;