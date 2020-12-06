import React, { useState, useEffect, useContext } from "react";
import Data from '../shoppingData/Ingredients';
import { quantitiesContext } from '../shoppingData/Quantities';

const ShoppingPageOne = (props) => {

  //element displays
  const [pageone_show, setPageone_show] = useState("pageOne");

  //stores quantities of items as JSON objects
  const [Quantities, setQuantities] = useContext(quantitiesContext);

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

      

      <div className='Shopping_input_container'>
        {Data.map((Ingredients) => {

          //updates Quanties Hook
          const handleChange = (event) => {

            setQuantities({
              ...Quantities,
              [Ingredients.Name]: {
                ...(Quantities[Ingredients.Name] ?? {}),
                quantities: event.target.value
              }
            });
          };

          return (<div className={"Shopping_input " + Ingredients.Name} key={Ingredients.Name}>
            <p>{Ingredients.Name} £{Ingredients.Price}</p>
            <input onChange={handleChange.bind(this)} min="0" placeholder="0" type="number"></input>
          </div>)
        })}
      </div>

      <div className='Discount_list'>
        <h3>Discounts:</h3>
        <li>Buy one cheese get one free!</li>
        <li>Buy a Soup get a half price bread!</li>
        <li>A third off butter!</li>

      </div>

      <div className="Shopping_Buttons">
        <p onClick={props.next_ClickHandler}>Buy Now!</p>
      </div>

    </div>
  );
};

export default ShoppingPageOne;
