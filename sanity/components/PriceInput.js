import React from 'react';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';

// this allows the component to update the database and update the live preview when the input value changes:
function createPatchFrom(value) {
  // Records (sets) the value if it's defined (and converts it into number type), and deletes (unsets) it if it's undefined 
  return PatchEvent.from(value === '' ? unset() : set(Number(value)));
}

// formats money to $, using browser built-in methods
const formatMoney = Intl.NumberFormat('en-CA', {
  style: 'currency',
  currency: 'CAD',
}).format;

//  The standard price input is in cents, so we want to create a nicer, more intuitive component for price input
// Sanity passes values from the field as props to this component
const PriceInput = ({ type, value, onChange, inputComponent }) => {

  return (
    <div>
      <h2>{type.title} - {value ? formatMoney(value / 100) : ''}</h2> 
      {/* format the value if it's defined */}
      <p>{type.description}</p>
      <input 
        type={type.name} 
        value={value} 
        onChange={e => onChange(createPatchFrom(e.target.value))}
        ref={inputComponent}
        />
    </div>
  );
}

// As I understand, this turns on focus state for the component (for accessibility)
PriceInput.focus = function() {
  this._inputElement.focus();
}

export default PriceInput;