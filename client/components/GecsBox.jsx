import React, { useState, useEffect }  from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';

/* 
This component will contain the following:
- total gecs counter
- button to gec x# of times
*/

function GecsBox() {
  const [gecs, setGecs] = useState(0);
  const [clickValue, setClickValue] = useState(1);
  
  return (
    // <article className="gecsBox">
    //   <div className="gecsBoxContainer">
    //     <h1>{gecs} gecs</h1>
    //     <button className="gecButton" onClick={() => {
    //       setGecs(gecs + clickValue);
    //       return props.gecs = gecs;
    //       }}>gec {clickValue} times</button>
    //   </div>
    // </article>
  );
}

export default GecsBox;

