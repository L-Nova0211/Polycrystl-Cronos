import * as React from 'react'

const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={128} height={128} {...props}>
      <defs>
        <clipPath id="prefix__clip-path">
          <circle id="prefix__Ellipse_1689" data-name="Ellipse 1689" cx={64} cy={64} r={64} fill="#fff" />
        </clipPath>
        <style>{'.prefix__cls-5{fill:#fff;fill-rule:evenodd}'}</style>
      </defs>
      <g id="prefix__Mask_Group_276" data-name="Mask Group 276">
        <g id="prefix__Page-1">
          <circle id="prefix__Oval" cx={64} cy={64} r={64} fill="#103f68" />
          <path
            id="prefix__Polygon"
            d="M63.625 22.328L27.536 43.164v41.671l36.089 20.836 36.088-20.836V43.164z"
            fillRule="evenodd"
            stroke="#fff"
            strokeWidth={2.125}
            fill="none"
          />
          <path
            id="prefix__Path"
            className="prefix__cls-5"
            d="M56.178 19.561l3.371 15.264H22.693l3.6-15.264z"
            transform="translate(23.065 19.561)"
          />
          <path
            id="prefix__Path-2"
            className="prefix__cls-5"
            d="M33.151 29.8l9.979 7.483L29.529 61.1H24.06l-6.423-6.041v-3.01l6.67-6.407V35.44z"
            transform="translate(49.597 29.798)"
          />
          <path
            id="prefix__Path-2-2"
            data-name="Path-2"
            className="prefix__cls-5"
            d="M9.978 0L0 7.483 13.6 31.3h5.47l6.423-6.041V22.25l-6.67-6.407V5.642z"
            transform="translate(35.741 59.491)"
          />
          <path
            id="prefix__Path-4"
            className="prefix__cls-5"
            d="M46.409 28.362l-3.246 8.513 1 9.543-14.8-.048.9-9.495-3.2-8.513z"
            transform="translate(27.454 28.362)"
          />
        </g>
      </g>
    </svg>
  )
}

export default SvgComponent
