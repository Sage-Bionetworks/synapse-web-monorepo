import { Box } from '@mui/material'

const SynapseHotdropsBackground = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        '& svg': {
          width: '100%',
          height: '100%',
        },
        '@keyframes float1': {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(11px) scale(1.02)' },
        },
        '@keyframes float2': {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(17px) scale(1.03)' },
        },
        '@keyframes float3': {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(23px) scale(1.15)' },
        },
        '@keyframes float4': {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(13px) scale(1.05)' },
        },
        '@keyframes float5': {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(15px) scale(1.06)' },
        },
      }}
    >
      <svg
        width="600"
        height="700"
        viewBox="0 0 525 450"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          style={{ animation: 'float3 6s ease-in-out infinite' }}
          className="layer layer3"
          id="layer3"
          cx="17.5"
          cy="182"
          r="17"
          fill="url(#paint2_linear_2950_2394)"
        />
        <circle
          style={{ animation: 'float5 5.5s ease-in-out infinite' }}
          className="layer layer5"
          id="layer5"
          cx="178.5"
          cy="68.5"
          r="31"
          fill="url(#paint4_linear_2950_2394)"
        />
        <path
          style={{ animation: 'float1 4s ease-in-out infinite' }}
          className="layer layer1"
          id="layer1"
          d="M150.75 346L159.125 359.375L170.5 378.75L181.5 392.75L191.625 401.25L201 407.25L212.75 413L224.25 416H236.625L247.75 414.875L261.125 411.25L273.5 406.125L284.375 400.75L295.625 393.625L308.25 382.875L326.625 365.25L341.875 349.5L357 335.375L370.75 325.5L386.375 318.125L397.875 315H405.5L417.125 318.125L425.875 322.375L436.5 329.25L448 338L459.5 344.75L468.875 349.125L478.125 350.375L486.25 349.125L493.625 346.25L503.5 340.375L511.25 331.75L518.25 319.625L522.125 309.75L523.625 303.125V294.125L522.875 287.125L519.125 273.25L512.375 255.625L502 238.125L492.75 224.5L481.375 207.75L472.125 194.125L463.125 177L456.75 162.25L453.625 147.125L452.5 137.5V125.25L453.625 98.875V87.5L452.5 75.125L449.125 62L443.75 49.875L436 37.75L426.25 26.875L411.875 15.375L400 9.25L388 4.375L372.375 0.625H358.625L346.375 1.625L331.25 6.375L316.75 13.125L301 23.125L287.5 34.25L274.5 45.75L260.625 59.375L245.375 74.75L228.75 88.625L215.125 98.375L200.125 107.25L184.375 113.125L169.875 115.625L153.5 116.375L138.875 114.75L125.625 114L117.375 114.75L108.75 117L100.5 121.125L91.375 127.875L85.875 133.75L75.625 149.25L67.75 166.125L63.75 179.875L61.875 196.5V205.625V219.125L63.75 228L65.625 236.25L69.75 246L73.5 252.875L79.5 259.875L86.25 267.125L95.75 276.125L105.625 285.875L113.625 294.625L121.875 305.25L132.25 317.5L141.25 330.375L150.75 346Z"
          fill="url(#paint0_linear_2950_2394)"
        />

        <circle
          style={{ animation: 'float4 3s ease-in-out infinite' }}
          className="layer layer4"
          id="layer4"
          cx="418"
          cy="364"
          r="17"
          fill="url(#paint3_linear_2950_2394)"
        />

        <circle
          style={{ animation: 'float2 5s ease-in-out infinite' }}
          className="layer layer2"
          id="layer2"
          cx="84.5"
          cy="309.75"
          r="74.25"
          fill="url(#paint1_linear_2950_2394)"
        />

        <defs>
          <linearGradient
            id="paint0_linear_2950_2394"
            x1="463"
            y1="68.125"
            x2="119"
            y2="324.125"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#2FB7A8" />
            <stop offset="1" stop-color="#2969AC" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_2950_2394"
            x1="139.253"
            y1="259.632"
            x2="20.55"
            y2="339.097"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#2FB7A8" />
            <stop offset="1" stop-color="#2969AC" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_2950_2394"
            x1="30.036"
            y1="170.525"
            x2="2.85825"
            y2="188.719"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#2FB7A8" />
            <stop offset="1" stop-color="#2969AC" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_2950_2394"
            x1="510.536"
            y1="372.025"
            x2="483.358"
            y2="390.219"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#2FB7A8" />
            <stop offset="1" stop-color="#2969AC" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_2950_2394"
            x1="201.36"
            y1="27.5752"
            x2="151.8"
            y2="60.7526"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#2FB7A8" />
            <stop offset="1" stop-color="#2969AC" />
          </linearGradient>
        </defs>
      </svg>
    </Box>
  )
}

export default SynapseHotdropsBackground
