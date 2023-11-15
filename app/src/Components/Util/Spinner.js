import { Spinner } from "@material-tailwind/react";
import React from "react";

const SpinnerContainer = () => {
  return (
    <div className="w-full flex items-center justify-center gap-1">
      <Spinner color="gray" className="h-8 w-8 text-gray-900" />
      <span>جاري التحميل...</span>
    </div>
  );
};

export default SpinnerContainer;
