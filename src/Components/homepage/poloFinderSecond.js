import React, { useState, useEffect } from "react";
import Data from "./polo-variants";
import Select from "react-select";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";

const PoloFinderSecond = (props) => {
  //element displays
  const [pagetwo_show, setPagetwo_show] = useState("pageTwo hide");

  useEffect(() => {
    //resets info text
    if (props.showTwo) {
      setPagetwo_show("pageTwo");
    } else {
      setPagetwo_show("pageTwo hide");
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

  //prints for information
  const [ABI, setABI] = useState(
    "The ABI code For your Car will be printed here."
  );
  const [fact, setFact] = useState("A fact will be displayed here.");

  // active styling for dropdown
  const colourStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "white" : "black",
      background: state.isSelected ? "#51C184" : "white",
      padding: 20,
    }),
  };

  //sets info text using Json
  const ABI_Handler = () => {
    setABI(Data[1].model.abiCode);
    setFact(
      <script
        src={
          "http://numbersapi.com/" +
          ABI.substring(0, 3) +
          "/year?write&fragment"
        }
      ></script>
    );
    console.log(
      fetch("http://numbersapi.com/" + ABI.substring(0, 3) + "/year?write")
    );
  };

  return (
    <div className={"PF_Content" + " " + pagetwo_show}>
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

      <div className="PF_Info_Container">
        <div className="PF_Info ABI">
          <DriveEtaIcon />
          <p>{ABI}</p>
        </div>
        <div className="PF_Info Fact">
          <EmojiEmotionsIcon />
          <p>{fact}</p>
        </div>
      </div>

      <div className="PF_Buttons">
        <p onClick={ABI_Handler} className="PF_Button_Fact">
          AVI + Fact
        </p>
        <p onClick={props.Reset_Data}>Start Again</p>
      </div>
    </div>
  );
};

export default PoloFinderSecond;
