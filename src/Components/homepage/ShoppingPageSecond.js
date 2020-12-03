import React, { useState, useEffect } from "react";
import Data from '../shoppingData/Ingredients';

const ShoppingPageSecond = (props) => {
  //element displays
  const [pagetwo_show, setPagetwo_show] = useState("pageTwo hide");

  useEffect(() => {
    //resets info text
    if (props.showTwo) {
      setPagetwo_show("pageTwo");
    } else {
      setPagetwo_show("pageTwo hide");
    }


  }, [props.showTwo]);




  return (
    <div className={"Shopping_Content " + pagetwo_show}>

      <div className="Shopping_Buttons">
        <p onClick={props.Reset_Data}>Shop Again</p>
      </div>

    </div>
  );
};

export default ShoppingPageSecond;
