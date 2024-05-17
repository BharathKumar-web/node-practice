import React from "react";
import classes from "./ModalHeader.module.css";

const ModalHeader = () => {
  return (
    <div className={classes.modalHeader}>
      <div className={classes.pathwayHeaderText}>Create Pathway</div>
      <span style={{color:'black',fontSize:'30px'}} className="material-symbols-outlined">
close
</span>
    </div>
  );
};

export default ModalHeader;
