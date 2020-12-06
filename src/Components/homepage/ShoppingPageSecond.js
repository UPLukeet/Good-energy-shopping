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
  let [breadDiscount, setBreadDiscount] = useState(0);


  //Main totals
  let discountTotal = parseFloat((butterDiscount * 1) + (cheeseDicscount * 1) + (breadDiscount * 1)).toFixed(2);
  let total = parseFloat((breadTotal * 1) + (milkTotal * 1) + (cheeseTotal * 1) + (soupTotal * 1) + (butterTotal * 1)).toFixed(2);


  useEffect(() => {

    //butter discount
    if (Butter > 0) {
      setButterDiscount(parseFloat(butterTotal / 3).toFixed(2));
    } else {
      setButterDiscount(0);
    }

    //cheese discount
    if (Cheese > 1) {
      setCheeseDiscount(parseFloat(Math.floor(Cheese / 2) * Data[2].Price).toFixed(2))
    } else {
      setCheeseDiscount(0);
    }

    //bread discount
    if (Soup > 0) {

      //checks the difference between Soup quanitities and Bread
      let diff = Bread - Soup;

      if (diff <= 0) {
        setBreadDiscount(parseFloat(breadTotal / 2).toFixed(2));
      } else {
        setBreadDiscount(parseFloat((Bread - diff) * (Data[0].Price / 2)).toFixed(2));
      }

    } else {
      setBreadDiscount(0)
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
        <p>Bread:<br />{Bread}x £{Data[0].Price}</p>
        <div className='Shopping_item_total'>
          {Soup > 0 && <p className='Item_discount'>Discount: -£{breadDiscount}</p>}
          <p>Item-Total: £{parseFloat(breadTotal - breadDiscount).toFixed(2)}</p>
        </div>
      </div>}
      {Milk > 0 && <div className="Shopping_output">
        <p>Milk:<br />{Milk}x £{Data[1].Price}</p>
        <div className='Shopping_item_total'>
          <p>Item-Total:£{milkTotal}</p>
        </div>
      </div>}
      {Cheese > 0 && <div className="Shopping_output">
        <p>Cheese:<br />{Cheese}x £{Data[2].Price}</p>
        <div className='Shopping_item_total'>
          {Cheese > 1 && <p className='Item_discount'>Discount: -£{cheeseDicscount}</p>}
          <p>Item-Total: £{parseFloat(cheeseTotal - cheeseDicscount).toFixed(2)}</p>
        </div>
      </div>}
      {Soup > 0 && <div className="Shopping_output">
        <p>Soup:<br />{Soup}x £{Data[3].Price}</p>
        <div className='Shopping_item_total'>
          <p>Item-Total: £{soupTotal}</p>
        </div>
      </div>}
      {Butter > 0 && <div className="Shopping_output">
        <p>Butter:<br />{Butter}x £{Data[4].Price}</p>
        <div className='Shopping_item_total'>
          <p className='Item_discount'>Discount: -£{butterDiscount}</p>
          <p>Item-Total: £{parseFloat(butterTotal - butterDiscount).toFixed(2)}</p>
        </div>
      </div>}
      {total > 0 && <div className="Shopping_total">
        {discountTotal == 0 && <p>Total: £{total}</p>}
        {discountTotal > 0 && <p>Discount: -£{discountTotal}</p>}
        {discountTotal > 0 && <p>Subtotal: £{total}</p>}
        {discountTotal > 0 && <p>Total: £{parseFloat(total - discountTotal).toFixed(2)}</p>}
      </div>}

      <div className="Shopping_Buttons">
        <p onClick={props.Reset_Data}>Shop Again</p>
      </div>

    </div>
  );
};

export default ShoppingPageSecond;
