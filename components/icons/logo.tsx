// components/NLogo.tsx
import React from 'react';
import clsx from 'clsx';

export default function LogoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`${process.env.SITE_NAME} logo`}
      viewBox="0 0 64 64"
      {...props}
      className={clsx('h-6 w-6', props.className)}
    >
      <rect width="64" height="64" fill="#0B3D91" rx="8" />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="36"
        fill="white"
        fontWeight="bold"
      >
        N
      </text>
    </svg>
  );
}
