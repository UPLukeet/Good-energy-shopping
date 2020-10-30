import React, { useState } from "react";
import Data from "./polo-variants.json";
import Select from "react-select";

function PoloFinder() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [series, setSeries] = useState(null);

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
      color: state.isSelected ? 'white' : 'black',
      background: state.isSelected ? '#51C184' : 'white',
      padding: 20,
    }),
  }

  return (
    <div className="PF_Container">
      <div className="PF_Box">
        <div className="PF_Content">
          <div className="PF_Input"></div>
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
      </div>
    </div>
  );
}

export default PoloFinder;
