import React from 'react';
import './css/Field.css';

const Field = (props) => {
  const { value, onChange } = props;
  return(
     <div>
       <h4>Enter Text</h4>
       <div className="input-group mb-3">
          <span className="input-group-text">Text</span>
          <input type="text" className="form-control border border-secondary"  
          id = "value" 
          value={value}
          onChange={(event) => onChange(event.target.value)}/>
      </div>    
     </div>
  )
}

export default Field;