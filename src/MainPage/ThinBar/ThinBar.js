import React, { useState } from "react";

export default function ThinBar() {
    const [IsClicked, setIsClicked] = useState(false)
    const toggleBar = () =>{
            setIsClicked(!IsClicked)
    }
  return (
    <div id="ThinBar">
      <div className="BtnWrapper" onClick={toggleBar} >
        <div className={IsClicked ? 'Bar-1 AddBar-1' : 'Bar-1'}></div>
        <div className={IsClicked ? 'Bar-2 AddBar-2' : 'Bar-2'}></div>
        <div className={IsClicked ? 'Bar-3 AddBar-3' : 'Bar-3'}></div>
      </div>
    </div>
  );
}
