import React from 'react';
import { ReactComponent as Search } from "../../../../assets/icons/search_icon.svg"
import './input.search.styles.scss';

/**
 * @description create a input text. 
 * @param {string} variant  primary | secondary | default | danger | success | warning | info
 * @param {string} name
 * @param {string} value
 * @param {string} size xsm | sm | md | lg | xl | xxl
 * @param {string} type
 * @param {string} className
 * @param {string} placeholder
 * @param {function} onChange
 * @param {any} rest
 * @param {React.Ref} ref
 */
const InputText = React.forwardRef(({
  variant="default",
  name, 
  value, 
  size = "md", 
  className, 
  placeholder, 
  onChange,
  focus = true, 
  ...rest}, 
  ref) => 
  (<div className="search-input__wrapper">
    <input 
        ref={ref}
        className={`input-search ${size ? `input-text-${size}` : ''} 
        ${className ? className : ''} ${variant ? `input-text-${variant}` : ''}
        ${focus ? `input-text-focus` : ''}`}
        name={name} 
        value={value} 
        placeholder={placeholder} 
        onChange={onChange} 
        type={"text"}
      {...rest}/>
    <Search />
  </div>
  ));

export default InputText;