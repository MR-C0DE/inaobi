import React from "react";
import { useEffect, useState } from "react";
import { useTheme } from "./services/ThemeContext";
const HeaderIconSvg = ({
  name = "none",
  selected,
  width = 28,
  height = 28,
}) => {
  const theme = useTheme();
  const [selectColor, setSelectColor] = useState("#333");
  const icoSvg = {
    home: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width={width}
        height={height}
        fill={selectColor}
      >
        <path d="M39.5,43h-9c-1.381,0-2.5-1.119-2.5-2.5v-9c0-1.105-0.895-2-2-2h-4c-1.105,0-2,0.895-2,2v9c0,1.381-1.119,2.5-2.5,2.5h-9	C7.119,43,6,41.881,6,40.5V21.413c0-2.299,1.054-4.471,2.859-5.893L23.071,4.321c0.545-0.428,1.313-0.428,1.857,0L39.142,15.52	C40.947,16.942,42,19.113,42,21.411V40.5C42,41.881,40.881,43,39.5,43z" />
      </svg>
    ),

    follow: (
      <svg
        width={width}
        height={height}
        fill={selectColor}
        viewBox="-4 -2 24 24"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin"
        className="jam jam-document-f"
      >
        <path d="M3 0h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm1 7a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2H4zm0 8a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2H4zM4 3a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2H4zm0 8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2H4z" />
      </svg>
    ),

    user: (
      <svg
        width={width}
        height={height}
        fill={selectColor}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.25 9C8.25 6.92893 9.92893 5.25 12 5.25C14.0711 5.25 15.75 6.92893 15.75 9C15.75 11.0711 14.0711 12.75 12 12.75C9.92893 12.75 8.25 11.0711 8.25 9ZM12 6.75C10.7574 6.75 9.75 7.75736 9.75 9C9.75 10.2426 10.7574 11.25 12 11.25C13.2426 11.25 14.25 10.2426 14.25 9C14.25 7.75736 13.2426 6.75 12 6.75Z"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.5456 3.77827 16.851 5.4421 18.5235C5.6225 17.5504 5.97694 16.6329 6.68837 15.8951C7.75252 14.7915 9.45416 14.25 12 14.25C14.5457 14.25 16.2474 14.7915 17.3115 15.8951C18.023 16.6329 18.3774 17.5505 18.5578 18.5236C20.2217 16.8511 21.25 14.5456 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM17.1937 19.6554C17.0918 18.4435 16.8286 17.5553 16.2318 16.9363C15.5823 16.2628 14.3789 15.75 12 15.75C9.62099 15.75 8.41761 16.2628 7.76815 16.9363C7.17127 17.5553 6.90811 18.4434 6.80622 19.6553C8.28684 20.6618 10.0747 21.25 12 21.25C13.9252 21.25 15.7131 20.6618 17.1937 19.6554Z"
        />
      </svg>
    ),
    forum: (
      <svg
        width={width}
        height={height}
        fill={selectColor}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.93417 2L9 2L15.0658 2C15.9523 1.99995 16.7161 1.99991 17.3278 2.08215C17.9833 2.17028 18.6117 2.36902 19.1213 2.87868C19.631 3.38835 19.8297 4.0167 19.9179 4.67221C20.0001 5.28387 20.0001 6.04769 20 6.93417V17.0658C20.0001 17.9523 20.0001 18.7161 19.9179 19.3278C19.8297 19.9833 19.631 20.6117 19.1213 21.1213C18.6117 21.631 17.9833 21.8297 17.3278 21.9179C16.7161 22.0001 15.9523 22.0001 15.0658 22H8.9342C8.0477 22.0001 7.28388 22.0001 6.67221 21.9179C6.0167 21.8297 5.38835 21.631 4.87868 21.1213C4.36902 20.6117 4.17028 19.9833 4.08215 19.3278C3.99991 18.7161 3.99995 17.9523 4 17.0658L4 7L4 6.93417C3.99995 6.04769 3.99991 5.28387 4.08215 4.67221C4.17028 4.0167 4.36902 3.38835 4.87868 2.87868C5.38835 2.36902 6.0167 2.17028 6.67221 2.08215C7.28387 1.99991 8.04769 1.99995 8.93417 2ZM12 12C10.8954 12 10 12.8954 10 14C10 15.1046 10.8954 16 12 16C13.1046 16 14 15.1046 14 14C14 12.8954 13.1046 12 12 12ZM8 14C8 11.7909 9.79086 10 12 10C14.2091 10 16 11.7909 16 14C16 16.2091 14.2091 18 12 18C9.79086 18 8 16.2091 8 14ZM13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V7.01123C11 7.56352 11.4477 8.01123 12 8.01123C12.5523 8.01123 13 7.56352 13 7.01123V7Z"
        />
      </svg>
    ),
    notice: (
      <svg
        width={width}
        height={height}
        fill={selectColor}
        version="1.1"
        id="Icons"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
      >
        <g>
          <path
            d="M26.8,25H5.2c-0.8,0-1.5-0.4-1.9-1.1c-0.4-0.7-0.3-1.5,0.1-2.2L4.5,20c1.8-2.7,2.7-5.8,2.7-9c0-3.7,2.4-7.1,5.9-8.3
       C13.7,1.6,14.8,1,16,1s2.3,0.6,2.9,1.7c3.5,1.2,5.9,4.6,5.9,8.3c0,3.2,0.9,6.3,2.7,9l1.1,1.7c0.4,0.7,0.5,1.5,0.1,2.2
       C28.4,24.6,27.6,25,26.8,25z"
          />
        </g>
        <path d="M11.1,27c0.5,2.3,2.5,4,4.9,4s4.4-1.7,4.9-4H11.1z" />
      </svg>
    ),

    espace: (
      <svg
        width={width}
        height={height}
        fill={selectColor}
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 66.835 66.835"
      >
        <g>
          <path
            d="M39.029,27.169c0-3.1-2.512-5.611-5.612-5.611c-3.1,0-5.61,2.511-5.61,5.611c0,1.801,0.861,3.381,2.182,4.409L21.72,66.835
       h23.409l-8.271-35.257C38.167,30.55,39.029,28.97,39.029,27.169z M36.821,51.908h-5.585l4.504-4.61L36.821,51.908z M33.417,37.4
       l1.438,6.127H31.98L33.417,37.4z M31.432,45.863h2.579l-3.392,3.474L31.432,45.863z M27.611,62.164l1.856-7.925h6.154l-7.736,7.925
       H27.611z M37.638,55.385l1.588,6.776h-8.207L37.638,55.385z M60.59,27.169c0,7.257-2.826,14.08-7.956,19.215
       c-0.452,0.456-1.055,0.688-1.652,0.688s-1.195-0.232-1.651-0.688c-0.912-0.913-0.912-2.387,0-3.299
       c4.248-4.252,6.588-9.904,6.588-15.912c0-12.408-10.091-22.501-22.5-22.501c-12.41,0-22.5,10.094-22.5,22.501
       c0,6.007,2.341,11.655,6.591,15.91c0.914,0.914,0.914,2.388,0,3.301c-0.916,0.914-2.389,0.914-3.303,0
       c-5.134-5.126-7.96-11.951-7.96-19.21C6.246,12.191,18.436,0,33.417,0S60.59,12.187,60.59,27.169z M41.395,35.146
       c2.131-2.129,3.306-4.962,3.306-7.978c0-6.221-5.062-11.282-11.283-11.282s-11.282,5.062-11.282,11.282
       c0,3.016,1.174,5.849,3.305,7.978c0.916,0.913,0.916,2.389,0,3.304c-0.916,0.912-2.387,0.912-3.303,0
       c-3.013-3.012-4.674-7.019-4.674-11.281c0-8.799,7.152-15.954,15.954-15.954c8.8,0,15.954,7.155,15.954,15.954
       c0,4.262-1.66,8.27-4.674,11.281c-0.456,0.453-1.054,0.684-1.651,0.684s-1.197-0.23-1.651-0.684
       C40.479,37.537,40.479,36.055,41.395,35.146z"
          />
        </g>
      </svg>
    ),

    search: (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
        />
      </svg>
    ),

    vote: (
      <svg
        width={width}
        height={height}
        fill={selectColor}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        id="campaign"
        class="icon glyph"
      >
        <path d="M22,4.28V15.72a2,2,0,0,1-.77,1.58,2.05,2.05,0,0,1-1.23.42,2,2,0,0,1-.48-.06L10,15.28,8.88,15H7a5,5,0,0,1-3.5-1.43A5,5,0,0,1,7,5H8.88L19.52,2.34a2,2,0,0,1,1.71.36A2,2,0,0,1,22,4.28Z"></path>
        <path d="M10,16.31V20a2,2,0,0,1-2,2H6.82a2,2,0,0,1-2-1.61L3.8,15.08a5.68,5.68,0,0,0,1.74.74A5.9,5.9,0,0,0,7,16H8.76Z"></path>
      </svg>
    ),
    search2: (
      <svg
        width={width}
        height={height}
        fill={selectColor}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.027 9.92L16 13.95 14 16l-4.075-3.976A6.465 6.465 0 0 1 6.5 13C2.91 13 0 10.083 0 6.5 0 2.91 2.917 0 6.5 0 10.09 0 13 2.917 13 6.5a6.463 6.463 0 0 1-.973 3.42zM1.997 6.452c0 2.48 2.014 4.5 4.5 4.5 2.48 0 4.5-2.015 4.5-4.5 0-2.48-2.015-4.5-4.5-4.5-2.48 0-4.5 2.014-4.5 4.5z"
          fill-rule="evenodd"
        />
      </svg>
    ),
    close: (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
          fill="#0F0F0F"
        />
      </svg>
    ),
    none: "none",
  };

  useEffect(() => {
    if (theme === "dark") {
      setSelectColor(selected ? "#0abab5" : "#fff");
    } else {
      setSelectColor(selected ? "#067790" : "#333");
    }
  }, [selected, theme]);

  console.log(theme);

  return <div>{icoSvg[name]}</div>;
};

export default HeaderIconSvg;
