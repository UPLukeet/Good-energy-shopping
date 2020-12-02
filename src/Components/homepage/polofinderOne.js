import React, { useState, useEffect } from "react";

const PoloFinderOne = (props) => {

//element displays
const [pageone_show, setPageone_show] = useState("pageOne");


useEffect(() => {
 //sets info text using Json
  if(props.showOne){
    setPageone_show("pageOne");
  }else{
    setPageone_show("pageOne hide");
  }
}, [props.showOne]);


  return (
    <div className={"Shopping_Content" + " " + pageone_show}>

      <div className="Shopping_Buttons">
        <p onClick={ props.next_ClickHandler }>Next</p>
      </div>
    </div>
  );
};

export default PoloFinderOne;
