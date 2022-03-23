import React from "react";
import { images } from "../../constants";

const SubHeading = (props) => {
  return(
    <div style={{marginBottom: '1rem'}}>
      <p className="p__cormorant">{props.title}</p>
      <img src={images.spoon} alt="spoon image" className="spoon__image" />
    </div>

  )
};
export default SubHeading;
