import type { SVGProps } from "react";

export const CppIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="currentColor" {...props}>
    <text x="10" y="70" fontFamily="Arial, sans-serif" fontSize="60" fontWeight="bold">C</text>
    <text x="50" y="45" fontFamily="Arial, sans-serif" fontSize="30" fontWeight="bold">+</text>
    <text x="50" y="80" fontFamily="Arial, sans-serif" fontSize="30" fontWeight="bold">+</text>
  </svg>
);

export const PythonIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M14.5 10.5c-1.12.53-2.23.88-3.5.88s-2.38-.35-3.5-.88M17.5 15.5c-1.57.9-3.43 1.25-5.5 1.25s-3.93-.35-5.5-1.25"/>
        <path d="M12 18.5v-3"/>
        <path d="M12 8.5V12c0 1 .5 2 2 2h3"/>
        <path d="M12 8.5V12c0-1-.5-2-2-2H7"/>
        <path d="M10.5 5c1.12-.53 2.23-.88 3.5-.88s2.38.35 3.5.88"/>
        <path d="M6.5 9.5c-1.57-.9-3.43-1.25-5.5-1.25s-3.93.35-5.5-1.25"/>
    </svg>
);
