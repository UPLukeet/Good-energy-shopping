import React, { useState, useEffect, useContext } from "react";
import Data from '../shoppingData/Ingredients';
import { quantitiesContext } from '../shoppingData/Quantities';

const ShoppingPageOne = (props) => {

  //element displays
  const [pageone_show, setPageone_show] = useState("pageOne");
  const [IngredientsSelected, setIngredientSelected] = useState(false);

  //stores quantities of items as JSON objects
  const [Quantities, setQuantities] = useContext(quantitiesContext);

  const quantities = useContext(quantitiesContext);

  const Bread = quantities[0].Bread.quantities;
  const Milk = quantities[0].Milk.quantities;
  const Cheese = quantities[0].Cheese.quantities;
  const Soup = quantities[0].Soup.quantities;
  const Butter = quantities[0].Butter.quantities;

  useEffect(() => {
    //sets info text using Json
    if (props.showOne) {
      setPageone_show("pageOne");
    } else {
      setPageone_show("pageOne hide");
    }
  }, [props.showOne]);

  useEffect(() => {
    if (Butter + Milk + Bread + Soup + Cheese > 0) {
      setIngredientSelected(true)
    } else {
      setIngredientSelected(false)
    }
  }, [Butter, Milk, Bread, Soup, Cheese]);


  return (
    <div className={"Shopping_Content " + pageone_show}>


      <div className="Shopping_input_aligner">
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
              <input onChange={handleChange.bind(this)} min="0" placeholder="Input food quantity" type="number"></input>
            </div>)
          })}
        </div>

        <div className='Discount_list'>
          <h3>Discounts:</h3>
          <li>Buy one cheese get one free!</li>
          <li>Buy a Soup get a half price bread!</li>
          <li>A third off butter!</li>
        </div>
      </div>
      <div className="Shopping_Buttons">
        {IngredientsSelected ?
          <p onClick={props.next_ClickHandler}>Buy Now!</p> :
          <p onClick={() => alert('Please Input some food!')}>Buy Now!</p>
        }
      </div>

    </div>
  );
};

export default ShoppingPageOne;
