import React from "react";

export const TextField = ({ tag, variant, sizeElement, text }) => {
  const creatDOMElement = (type) => {
    return React.createElement(type, { className: "center" }, text);
  };

  const checkTag = (tag) => {
    let headingTag = ["h1", "h2", "h3", "h4", "h5", "h6"];
    let ListheadingTag = ["niv1", "niv2", "niv3", "niv4", "niv5", "niv5"];
    for (let i = 0; i < ListheadingTag.length; i++) {
      if (ListheadingTag[i] === tag) {
        return creatDOMElement(headingTag[i]);
      }
    }
  };

  const renderSwitch = (param, variant) => {
    switch (param) {
      case "headingText":
        return checkTag(variant);
      case "paragraphText":
        return React.createElement("p", { className: "center" }, text);
      case "standardText":
        return React.createElement("span", { className: "center" }, text);
      default:
        return;
    }
  };

  return <>{renderSwitch(tag, variant)}</>;
};
