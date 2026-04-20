import React from 'react'
import { Box } from '@mui/material'
import styles from './HotdropsAndNews.module.scss'

const WordPressNewsBackground = (): React.ReactNode => {
  return (
    <Box className={styles.background}>
      <svg
        width="600"
        height="700"
        viewBox="0 0 525 450"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Small circle top-left */}
        <circle
          className={styles.layer3}
          cx="30"
          cy="60"
          r="20"
          fill="url(#wp_grad2)"
        />
        {/* Medium circle top-right */}
        <circle
          className={styles.layer5}
          cx="490"
          cy="80"
          r="38"
          fill="url(#wp_grad4)"
        />
        {/* Large blob center */}
        <path
          className={styles.layer1}
          d="M150.75 346L159.125 359.375L170.5 378.75L181.5 392.75L191.625 401.25L201 407.25L212.75 413L224.25 416H236.625L247.75 414.875L261.125 411.25L273.5 406.125L284.375 400.75L295.625 393.625L308.25 382.875L326.625 365.25L341.875 349.5L357 335.375L370.75 325.5L386.375 318.125L397.875 315H405.5L417.125 318.125L425.875 322.375L436.5 329.25L448 338L459.5 344.75L468.875 349.125L478.125 350.375L486.25 349.125L493.625 346.25L503.5 340.375L511.25 331.75L518.25 319.625L522.125 309.75L523.625 303.125V294.125L522.875 287.125L519.125 273.25L512.375 255.625L502 238.125L492.75 224.5L481.375 207.75L472.125 194.125L463.125 177L456.75 162.25L453.625 147.125L452.5 137.5V125.25L453.625 98.875V87.5L452.5 75.125L449.125 62L443.75 49.875L436 37.75L426.25 26.875L411.875 15.375L400 9.25L388 4.375L372.375 0.625H358.625L346.375 1.625L331.25 6.375L316.75 13.125L301 23.125L287.5 34.25L274.5 45.75L260.625 59.375L245.375 74.75L228.75 88.625L215.125 98.375L200.125 107.25L184.375 113.125L169.875 115.625L153.5 116.375L138.875 114.75L125.625 114L117.375 114.75L108.75 117L100.5 121.125L91.375 127.875L85.875 133.75L75.625 149.25L67.75 166.125L63.75 179.875L61.875 196.5V205.625V219.125L63.75 228L65.625 236.25L69.75 246L73.5 252.875L79.5 259.875L86.25 267.125L95.75 276.125L105.625 285.875L113.625 294.625L121.875 305.25L132.25 317.5L141.25 330.375L150.75 346Z"
          fill="url(#wp_grad0)"
        />
        {/* Small circle bottom-right */}
        <circle
          className={styles.layer4}
          cx="480"
          cy="390"
          r="22"
          fill="url(#wp_grad3)"
        />
        {/* Medium circle bottom-left */}
        <circle
          className={styles.layer2}
          cx="55"
          cy="360"
          r="55"
          fill="url(#wp_grad1)"
        />

        <defs>
          <linearGradient
            id="wp_grad0"
            x1="460"
            y1="80"
            x2="100"
            y2="360"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6B5FD9" />
            <stop offset="1" stopColor="#3A5AA8" />
          </linearGradient>
          <linearGradient
            id="wp_grad1"
            x1="100"
            y1="318"
            x2="10"
            y2="390"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6B5FD9" />
            <stop offset="1" stopColor="#3A5AA8" />
          </linearGradient>
          <linearGradient
            id="wp_grad2"
            x1="46"
            y1="46"
            x2="14"
            y2="74"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6B5FD9" />
            <stop offset="1" stopColor="#3A5AA8" />
          </linearGradient>
          <linearGradient
            id="wp_grad3"
            x1="498"
            y1="374"
            x2="464"
            y2="402"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6B5FD9" />
            <stop offset="1" stopColor="#3A5AA8" />
          </linearGradient>
          <linearGradient
            id="wp_grad4"
            x1="524"
            y1="48"
            x2="456"
            y2="110"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6B5FD9" />
            <stop offset="1" stopColor="#3A5AA8" />
          </linearGradient>
        </defs>
      </svg>
    </Box>
  )
}

export default WordPressNewsBackground
