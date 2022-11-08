import { COLORS,GRAY } from '../../styles'

export const styles={
  title: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontSize: 12,
    fontWeight: 600,
    lineHeight: '16px',
    color: COLORS.PRIMARY_CHARCOAL_GRAY,
  },
  textInputStyle: {
    width: '240px',
    input: {
      '&::placeholder': {
        fontSize: '14px',
        color: GRAY[1700]
      }
    }
  },
  titleDisabled: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontSize: 12,
    fontWeight: 600,
    lineHeight: '16px',
    color: COLORS.PRIMARY[1200],
  },
  formControlStyle: {
    m: 1.5, minWidth: 120
  },
  placeHolderDisabled: {
    input: {
      '&::placeholder': {
        color: `${COLORS.RED} !important`
      }
    }
  },
  required:{
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontSize: 12,
    fontWeight: 600,
    lineHeight: '16px',
    color: COLORS.RED,
  }
}