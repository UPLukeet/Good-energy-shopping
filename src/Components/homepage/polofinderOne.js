import React, { useState, useEffect } from "react";
import Data from "./polo-variants";
import Select from "react-select";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";

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
},);

  

  //drop down selections
  const [bodyDesc, setBodyDesc] = useState(null);
  const [year, setYear] = useState(null);
  const [miles, setMiles] = useState(null);
  const [cost, setCost] = useState(null);

  const bodyDescOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
  ];

  const yearOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
  ];

  const milesOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
  ];

  const costOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
  ];


  // active styling for dropdown
  const colourStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "white" : "black",
      background: state.isSelected ? "#51C184" : "white",
      padding: 20,
    }),
  };


  return (
    <div className={"PF_Content" + " " + pageone_show}>
      <div className="PF_Input">
        <Select
          className={"poloOption_container"}
          classNamePrefix={"poloOptions"}
          defaultValue={bodyDesc}
          onChange={setBodyDesc}
          options={bodyDescOptions}
          styles={colourStyles}
          placeholder={"Polo seies"}
        />
        <Select
          className={"poloOption_container"}
          classNamePrefix={"poloOptions"}
          defaultValue={year}
          onChange={setYear}
          options={yearOptions}
          styles={colourStyles}
          placeholder={"Year"}
        />
      </div>
      <div className="PF_Input">
        <Select
          className={"poloOption_container"}
          classNamePrefix={"poloOptions"}
          defaultValue={miles}
          onChange={setMiles}
          options={milesOptions}
          styles={colourStyles}
          placeholder={"Miles"}
        />
      </div>

      <div className="PF_Buttons">
        <p onClick={props.next_ClickHandler}>Next</p>
      </div>
    </div>
  );
};

export default PoloFinderOne;
