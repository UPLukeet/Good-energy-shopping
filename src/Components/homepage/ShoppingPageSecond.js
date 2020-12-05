import React, { useState, useEffect, useContext } from "react";
import Data from '../shoppingData/Ingredients';
import { quantitiesContext } from '../shoppingData/Quantities';

const ShoppingPageSecond = (props) => {
  //element displays
  const [pagetwo_show, setPagetwo_show] = useState("pageTwo hide");

  // imports quanities of ingredients from context api
  const quantities = useContext(quantitiesContext);

  //contains quantities
  const Bread = quantities[0].Bread.quantities;
  const Milk = quantities[0].Milk.quantities;
  const Cheese = quantities[0].Cheese.quantities;
  const Soup = quantities[0].Soup.quantities;
  const Butter = quantities[0].Butter.quantities;

  //sets totals
  let breadTotal = parseFloat(Bread * Data[0].Price).toFixed(2);
  let milkTotal = parseFloat(Milk * Data[1].Price).toFixed(2);
  let cheeseTotal = parseFloat(Cheese * Data[2].Price).toFixed(2);
  let soupTotal = parseFloat(Soup * Data[3].Price).toFixed(2);
  let butterTotal = parseFloat(Butter * Data[4].Price).toFixed(2);

  //discounts and savings
  let [butterDiscount, setButterDiscount] = useState(0);
  let [cheeseDicscount, setCheeseDiscount] = useState(0);


  //Main totals
  let discountTotal = parseFloat((butterDiscount*1) + (cheeseDicscount*1)).toFixed(2)
  let total = parseFloat(((breadTotal * 1) + (milkTotal * 1) + (cheeseTotal * 1) + (soupTotal * 1) + (butterTotal * 1)) - (discountTotal)).toFixed(2);


  useEffect(() => {

    //butter discount
    if (Butter > 0) {
      setButterDiscount(parseFloat(butterTotal / 3).toFixed(2));
    }

    //cheese discount
    if (Cheese > 1) {
      setCheeseDiscount(parseFloat(Math.floor(Cheese / 2) * Data[2].Price).toFixed(2))
    }

  }, [quantities])


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


      {Bread > 0 && <div className="Shopping_output">
        <p>Bread: {Bread} x £{Data[0].Price}</p>
        <p>Item-Total: £{breadTotal}</p>
      </div>}
      {Milk > 0 && <div className="Shopping_output">
        <p>Milk: {Milk} x £{Data[1].Price}</p>
        <p>Item-Total:£{milkTotal}</p>
      </div>}
      {Cheese > 0 && <div className="Shopping_output">
        <p>Cheese: {Cheese} x £{Data[2].Price}</p>
        {Cheese > 1 && <p>Item-Discount: -£{cheeseDicscount}</p>}
        <p>Item-Total: £{parseFloat(cheeseTotal - cheeseDicscount).toFixed(2)}</p>
      </div>}
      {Soup > 0 && <div className="Shopping_output">
        <p>Soup: {Soup} x £{Data[3].Price}</p>
        <p>Item-Total: £{soupTotal}</p>
      </div>}
      {Butter > 0 && <div className="Shopping_output">
        <p>Butter: {Butter} x £{Data[4].Price}</p>
        <p>Item-Discount: -£{butterDiscount}</p>
        <p>Item-Total: £{parseFloat(butterTotal - butterDiscount).toFixed(2)}</p>
      </div>}
      {total > 0 && <div className="Shopping_output">
        <p>Discount-Total: -£{discountTotal}</p>
        <p>Total: £{total}</p>
      </div>}

      <div className="Shopping_Buttons">
        <p onClick={props.Reset_Data}>Shop Again</p>
      </div>

    </div>
  );
};

export default ShoppingPageSecond;
