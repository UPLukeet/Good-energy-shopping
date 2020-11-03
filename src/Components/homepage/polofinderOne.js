import React, { useState, useEffect } from "react";
import Data from "./polo-variants";
import Select from "react-select";

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

  

  //drop down selections
  const [bodyDesc, setBodyDesc] = useState(null);
  const [year, setYear] = useState(null);
  const [driveType, setDriveType] = useState(null);

  const bodyDescOptions = [
    { value: "2 DOOR SALOON", label: "2 DOOR SALOON" },
    { value: "2 DOOR COUPE", label: "2 DOOR COUPE" },
    { value: "2 DOOR CABRIOLET", label: "2 DOOR CABRIOLET" },
    { value: "3 DOOR HATCHBACK", label: "3 DOOR HATCHBACK" },
    { value: "4 DOOR SALOON", label: "4 DOOR SALOON" },
    { value: "5 DOOR ESTATE", label: "5 DOOR ESTATE" },
    { value: "5 DOOR HATCHBACK", label: "5 DOOR HATCHBACK" },
  ];

  const yearOptions = [
    { value: "1975", label: "1975" },
    { value: "1984", label: "1984" },
    { value: "1990", label: "1990" },
    { value: "1994", label: "1994" },
    { value: "2000", label: "2000" },
    { value: "2002", label: "2002" },
    { value: "2005", label: "2005" },
    { value: "2010", label: "2010" },
    { value: "2014", label: "2014" },
    { value: "2017", label: "2017" },
  ];

  const driveTypeOptions = [
    { value: "A", label: "Automactic" },
    { value: "M", label: "Manual" },
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
          placeholder={"Polo type"}
        />
        <Select
          className={"poloOption_container"}
          classNamePrefix={"poloOptions"}
          defaultValue={year}
          onChange={setYear}
          options={yearOptions}
          styles={colourStyles}
          placeholder={"Year From-To"}
        />
      </div>
      <div className="PF_Input">
        <Select
          className={"poloOption_container"}
          classNamePrefix={"poloOptions"}
          defaultValue={driveType}
          onChange={setDriveType}
          options={driveTypeOptions}
          styles={colourStyles}
          placeholder={"Drive Type"}
        />
      </div>

      <div className="PF_Buttons">
        <p onClick={ props.next_ClickHandler }>Next</p>
      </div>
    </div>
  );
};

export default PoloFinderOne;
