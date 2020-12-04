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
  const [breadTotal, setBreadTotal] = useState(0);
  const [milkTotal, setMilkTotal] = useState(0);
  const [cheeseTotal, setCheeseTotal] = useState(0);
  const [soupTotal, setSoupTotal] = useState(0);
  const [butterTotal, setButterTotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    //resets info text
    if (props.showTwo) {
      setPagetwo_show("pageTwo");
    } else {
      setPagetwo_show("pageTwo hide");
    }
  }, [props.showTwo]);

  useEffect(() => {
    setBreadTotal(parseFloat(Bread * Data[0].Price).toFixed(2))
    setMilkTotal(parseFloat(Milk * Data[1].Price).toFixed(2))
    setCheeseTotal(parseFloat(Cheese * Data[2].Price).toFixed(2))
    setSoupTotal(parseFloat(Soup * Data[3].Price).toFixed(2))
    setButterTotal(parseFloat(Butter * Data[4].Price).toFixed(2))
    setTotal(parseFloat(breadTotal + milkTotal + cheeseTotal + soupTotal + butterTotal).toFixed(2))

  }, [quantities]);



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
        <p>Item-Total: £{cheeseTotal}</p>
      </div>}
      {Soup > 0 && <div className="Shopping_output">
        <p>Soup: {Soup} x £{Data[3].Price}</p>
        <p>Item-Total: £{soupTotal}</p>
      </div>}
      {Butter > 0 && <div className="Shopping_output">
        <p>Butter: {Butter} x £{Data[4].Price}</p>
        <p>Item-Total: £{butterTotal}</p>
      </div>}
      {total > 0 && <div className="Shopping_output">
        <p>Total: £{total}</p>
        </div>}

        <div className="Shopping_Buttons">
          <p onClick={props.Reset_Data}>Shop Again</p>
        </div>

      </div>
  );
};

export default ShoppingPageSecond;
