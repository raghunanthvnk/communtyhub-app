import React from 'react'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'
import { COLORS, GRAY } from '../styles'

export const CustomToolTip = styled(({ arrowStyle,  className, ...props }) => (
  <Tooltip {...props} arrow classes={{ 
    popper: className,
    arrow: arrowStyle
  }} />
))(() => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: GRAY[1500],
    marginLeft: '0px'
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: GRAY[1500],
    fontSize: '12px',
    color: COLORS.WHITE,
    fontFamily: 'Open Sans',
    fontWeight: '400',
    textAlign: 'center',
    borderRadius: '4px',
    paddingTop: '8px',
    paddingBottom: '8px',
    paddingLeft: '16px',
    paddingRight: '16px'

  }
}))

CustomToolTip.displayName = 'ToolTipStyled'