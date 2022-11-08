import * as React from 'react';


const CustomCheckbox = ({ id, label, value, onChange }) => {
  return (
    <label>
      <input id={id} type="checkbox" defaultChecked={value} onChange={onChange} />
      {label}
    </label>
  );
};

export default CustomCheckbox;
