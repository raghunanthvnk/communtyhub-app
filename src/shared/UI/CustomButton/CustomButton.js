import React from 'react'
import Button from '@mui/material/Button'

export default function CustomButton ({ label, variant, color,
  onClick, startIcon, style }) {
  return <Button
    disableRipple
    style={{
      backgroundColor: color,
      boxShadow: 'none',
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: color,
        boxShadow: 'none'
      },
      textTransform: 'none',
      ...style
    }}
    variant={variant}
    onClick={onClick}
    data-testid={label}
    startIcon={startIcon} >
    {label}
  </Button >
}