import React, { memo } from 'react'
import { withTheme } from '@emotion/react'
import Svg, { G, Path } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: title */

const SvgComponent = ({ color, theme, size = 22, ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 18 22" {...props}>
    <G id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <G id="Group" transform="translate(1.000000, 1.000000)">
        <Path
          d="M0,17.5 C0,16.1192881 1.11928813,15 2.5,15 L16,15"
          id="Shape"
          stroke={theme.colors[color] || color || theme.colors.secondary}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M2.5,0 L16,0 L16,20 L2.5,20 C1.11928813,20 0,18.8807119 0,17.5 L0,2.5 C0,1.11928813 1.11928813,0 2.5,0 Z"
          id="Shape"
          stroke={theme.colors[color] || color || theme.colors.secondary}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M10.6206055,11.4106445 L10.1762695,10.2426758 L6.39306641,10.2426758 L5.94873047,11.4360352 C5.775227,11.9015323 5.6271165,12.2157381 5.50439453,12.3786621 C5.38167256,12.5415861 5.18066546,12.6230469 4.90136719,12.6230469 C4.66438684,12.6230469 4.45491627,12.5362964 4.27294922,12.362793 C4.09098216,12.1892895 4,11.9925141 4,11.7724609 C4,11.6455072 4.02115864,11.5143236 4.06347656,11.3789062 C4.10579448,11.2434889 4.175618,11.055177 4.27294922,10.8139648 L6.65332031,4.77099609 C6.72102898,4.59749262 6.80248976,4.38907999 6.89770508,4.14575195 C6.9929204,3.90242391 7.09448188,3.70035888 7.20239258,3.53955078 C7.31030327,3.37874269 7.45206618,3.24861703 7.62768555,3.14916992 C7.80330491,3.04972281 8.020181,3 8.27832031,3 C8.54069142,3 8.75968337,3.04972281 8.93530273,3.14916992 C9.1109221,3.24861703 9.25268501,3.37662682 9.3605957,3.53320312 C9.4685064,3.68977943 9.55948856,3.85799064 9.63354492,4.0378418 C9.70760128,4.21769296 9.80175724,4.45784355 9.91601562,4.75830078 L12.347168,10.7631836 C12.5375986,11.2202171 12.6328125,11.5524078 12.6328125,11.7597656 C12.6328125,11.975587 12.5428883,12.1734203 12.3630371,12.3532715 C12.1831859,12.5331226 11.9663099,12.6230469 11.7124023,12.6230469 C11.5642896,12.6230469 11.4373378,12.5965986 11.331543,12.5437012 C11.2257482,12.4908038 11.1368819,12.4188644 11.0649414,12.3278809 C10.9930009,12.2368973 10.9157719,12.0972503 10.833252,11.9089355 C10.750732,11.7206208 10.6798506,11.5545255 10.6206055,11.4106445 Z M6.88818359,8.82714844 L9.66845703,8.82714844 L8.265625,4.98681641 L6.88818359,8.82714844 Z"
          id="A"
          fill={theme.colors[color] || color || theme.colors.secondary}
          fillRule="nonzero"
        />
      </G>
    </G>
  </Svg>
)

export default memo(withTheme(SvgComponent))