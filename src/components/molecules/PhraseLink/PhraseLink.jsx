import React from "react";
import { TextField } from "../../atoms/TextField/TextField"
import Link from "../../atoms/Links/Link";
import "../../../assets/styleColors.scss";
import "../../../assets/styleText.scss";

const PhraseLink = ({ text, linkText, to }) => {
  return (
    <div>
      <TextField className="paragraph" tag="paragraphText" text={text}/>
      <Link className="link" to={to}>{linkText}</Link>
    </div>
  );
};

export default PhraseLink;