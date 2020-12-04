import React, { useState, useEffect } from "react";
import Data from '../shoppingData/Ingredients';
import Quantities from "../shoppingData/Quantities";

const ShoppingPageOne = (props) => {

  //element displays
  const [pageone_show, setPageone_show] = useState("pageOne");

  const [Quantities, setQuantities] = useState({});


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
      {Data.map((Ingredients) => {

        const handleChange = (event) => {

          setQuantities({
            ...Quantities,
            [Ingredients.Name]: {
                ...(Quantities[Ingredients.Name] ?? {}),
                quantities: event.target.value
            }
        });
      };

        return (<div className="Shopping_input" key={Ingredients.Name}>
          <p>{Ingredients.Name} £{Ingredients.Price}</p>
          <input onChange={handleChange.bind(this)} min="0" type="number"></input>
        </div>)
      })}
      <div className="Shopping_Buttons">
        <p onClick={props.next_ClickHandler}>Buy Now!</p>
      </div>

    </div>
  );
};

export default ShoppingPageOne;
