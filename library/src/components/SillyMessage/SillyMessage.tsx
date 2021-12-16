import React from "react";


export interface SillyMessageProps {
  label: string;
}
const SillyMessage = (props:SillyMessageProps) => {
  return <div>{props.label} : Hello World</div>;
};

export {SillyMessage};
