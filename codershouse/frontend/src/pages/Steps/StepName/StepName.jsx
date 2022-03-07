import React from "react";
import Button from "../../../components/shared/Button/Button";

const StepName = ({ onNext }) => {
  return (
    <>
      <div>StepName</div>
      <Button onClick={onNext} />
    </>
  );
};

export default StepName;
