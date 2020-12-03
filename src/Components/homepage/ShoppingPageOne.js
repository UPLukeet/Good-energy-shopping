import React, { useState, useEffect } from "react";
import Data from '../shoppingData/Ingredients';

const ShoppingPageOne = (props) => {

  //element displays
  const [pageone_show, setPageone_show] = useState("pageOne");


  useEffect(() => {
    //sets info text using Json
    if (props.showOne) {
      setPageone_show("pageOne");
    } else {
      setPageone_show("pageOne hide");
    }
  }, [props.showOne]);


  return (
    <div className={"Shopping_Content " + pageone_show}>

      <div className="Shopping_Buttons">
        <p onClick={props.next_ClickHandler}>Buy Now!</p>
      </div>

    </div>
  );
};

export default ShoppingPageOne;
