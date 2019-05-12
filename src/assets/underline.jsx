import React from "react";

const Underline = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 83 4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 1.9682C0 .881986.868946.0022724 1.95515.0057065 8.16526.02534 27.8151.0991887 41.1261.28125 57.9387.511203 75.2511.177121 81.007.0476045 82.103.0229446 83 .904303 83 2.00051c0 1.07161-.8516 1.94182-1.9232 1.947-6.0989.02948-25.6688.10685-43.6894-.01001-9.9544-.06455-29.24824-.02162-35.43078-.00543C.869986 3.93491 0 3.05484 0 1.9682z"
      fill="url(#paint0_linear)"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="-.000048"
        y1="4.03124"
        x2="4.12181"
        y2="-12.6229"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FE8181" />
        <stop offset="1" stopColor="#F896E9" />
      </linearGradient>
    </defs>
  </svg>
);

export default Underline;
