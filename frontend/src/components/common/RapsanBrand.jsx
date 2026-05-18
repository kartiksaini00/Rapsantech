// Rapsan Tech SVG Logo — matches the business card branding
export function RapsanLogo({ size = 40 }) {
  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* GPS Pin body */}
      <path
        d="M20 2C13.1 2 7.5 7.6 7.5 14.5c0 9.8 12.5 23.5 12.5 23.5S32.5 24.3 32.5 14.5C32.5 7.6 26.9 2 20 2z"
        fill="url(#rapsanPinGrad)"
      />
      {/* Signal arc left — outer */}
      <path
        d="M5.5 8.5 Q2 14.5 5.5 20.5"
        stroke="#06B6D4"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      {/* Signal arc left — inner */}
      <path
        d="M8 10.5 Q5.5 14.5 8 18.5"
        stroke="#60C8F5"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      />
      {/* Signal arc right — outer */}
      <path
        d="M34.5 8.5 Q38 14.5 34.5 20.5"
        stroke="#06B6D4"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      {/* Signal arc right — inner */}
      <path
        d="M32 10.5 Q34.5 14.5 32 18.5"
        stroke="#60C8F5"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      />
      {/* Up-arrow inside pin */}
      <path
        d="M20 8.5 L15.5 16 H18.5 V21 H21.5 V16 H24.5 Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="rapsanPinGrad"
          x1="7.5" y1="2" x2="32.5" y2="38"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1E3A8A" />
          <stop offset="0.5" stopColor="#1D4ED8" />
          <stop offset="1" stopColor="#2563EB" />
        </linearGradient>
      </defs>
    </svg>
  )
}

// Text-only wordmark for compact use
export function RapsanWordmark({ className = '' }) {
  return (
    <div className={`flex flex-col leading-none ${className}`}>
      <span className="font-poppins font-black tracking-tight">
        <span className="text-white">RAP</span>
        <span className="text-cyan-400">SAN</span>
      </span>
      <span className="text-[10px] text-slate-400 font-semibold tracking-[0.22em] uppercase">
        TECH
      </span>
    </div>
  )
}

// Full lockup: icon + wordmark
export default function RapsanBrand({ iconSize = 40, textSize = 'text-xl' }) {
  return (
    <div className="flex items-center gap-2.5">
      <RapsanLogo size={iconSize} />
      <RapsanWordmark />
    </div>
  )
}
