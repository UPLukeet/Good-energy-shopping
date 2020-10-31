import React, { useState } from "react";
import Data from "./polo-variants";
import Select from "react-select";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";

function PoloFinder() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [series, setSeries] = useState(null);

  const [ABI, setABI] = useState("The ABI code For your Car will be printed here.");
  const [fact, setFact] = useState("A fact will be displayed here.");

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const seriesOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
  ];

  const colourStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "white" : "black",
      background: state.isSelected ? "#51C184" : "white",
      padding: 20,
    }),
  };

  const ABI_Handler = () => {
    setABI(Data[1].model.abiCode);
    setFact("Fun fact!")
    console.log(Data[1].model);
  };

  const Reset_Data = () => {
    setFact("A fact will be displayed here.");
    setABI("The ABI code For your Car will be printed here.");
  };

  return (
    <div className="PF_Container">
      <div className="PF_Box">
        <h2>Polo ABI Checker</h2>
        <div className="PF_Content">
          <div className="PF_Input">
            <Select
              className={"poloOption_container"}
              classNamePrefix={"poloOptions"}
              defaultValue={series}
              onChange={setSeries}
              options={seriesOptions}
              styles={colourStyles}
              placeholder={"Polo seies"}
            />
            <Select
              className={"poloOption_container"}
              classNamePrefix={"poloOptions"}
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              styles={colourStyles}
              placeholder={"Test2"}
            />
          </div>
          <div className="PF_Input">
            <Select
              className={"poloOption_container"}
              classNamePrefix={"poloOptions"}
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              styles={colourStyles}
              placeholder={"Test2"}
            />
            <Select
              className={"poloOption_container"}
              classNamePrefix={"poloOptions"}
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              styles={colourStyles}
              placeholder={"Test2"}
            />
          </div>

          <div className="PF_Info ABI">
            <DriveEtaIcon />
            <p>{ABI}</p>
          </div>
          <div className="PF_Info Fact">
            <EmojiEmotionsIcon />
            <p>{fact}</p>
          </div>

          <div className="PF_Buttons">
            <p onClick={ABI_Handler}>AVI + Fact</p>
            <p onClick={Reset_Data}>Start Again</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PoloFinder;
