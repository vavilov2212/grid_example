import React from "react";

import styles from "./FacebookIcon.css";

const FacebookIcon = (props) => {
  return (
    <svg
      className="root"
      {...props}
      width="11"
      height="19"
      viewBox="0 0 11 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.53676 3.15402H10.3462V0.133028C9.47011 0.0431081 8.58985 -0.00128657 7.70904 2.83709e-05C5.09114 2.83709e-05 3.30096 1.57703 3.30096 4.46502V6.95402H0.346191V10.336H3.30096V19H6.84282V10.336H9.78796L10.2307 6.95402H6.84282V4.79752C6.84282 3.80002 7.11231 3.15402 8.53676 3.15402Z"
        fill="white"
      />
    </svg>
  );
};

export default FacebookIcon;
