import { useState } from "react";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";

const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;
  const { according } = attributes; 

  const [openIndexes, setOpenIndexes] = useState([]); 
  const [checkboxState, setCheckboxState] = useState(false); 
  const [selected,setSelected]=useState()

  const handleCheckboxChange = (event) => {
    setCheckboxState(event.target.checked);
    if (!event.target.checked) {
      setOpenIndexes([]); 
    }
  };

  const handleAccordionClick = (index) => {
    if (checkboxState) {
      setOpenIndexes([index]);
    } else {
      setOpenIndexes((prevState) =>
        prevState.includes(index)
          ? prevState.filter((item) => item !== index) 
          : [...prevState, index] 
      );
    }
  };

  return (
    <>
      <Settings {...{ attributes, setAttributes ,selected}} />

      <div {...useBlockProps()}>
        <Style  attributes={attributes} id={`block-${clientId}`} />
       
        <div className="accordion-container">
          {according && according.map((item, index) => (
            <div
            onClick={()=>setSelected(index)}
              key={index}
              className={`accordion-block ${openIndexes.includes(index) ? "is-opened" : ""}`}
            >
              <div className="accordion-block__header" onClick={() => handleAccordionClick(index)}>
                {/* <h4>{item.que}</h4> */}
                <RichText tagName="h4" value={item.que}></RichText>
                <i className="fa-solid fa-plus"></i>
              </div>
              <div className={`accordion-block__body ${openIndexes.includes(index) ? "show" : "hide"}`}>
                <div className="__inner">
                  <p>{item.ans}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Edit;
