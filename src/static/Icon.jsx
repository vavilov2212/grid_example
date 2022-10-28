import React from "react";

const Icon = (props) => {
  const { Image, uniqueId } = props;

  return <Image uniqueid={uniqueId} />;
};

export default Icon;
