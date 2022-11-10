


export const PRIMARY = {
    0: '#373C47',
    20: '#D7D8DA',
    50: '#EBECED',
    100: '#1E54B7',
    200: '#FFFFFF',
    300: '#06357A',// Need to remove from here
    400: '#4B68A8',
    500: '#244F9B',
    600: '#1D4792',
    700: '#123E86',
    800: '#14358E',
    900: '#002464',
    1000: '#37A2EB',
    1100: '#F2F5FB',
    1200: '#C3C5C8',
    1300: '#1F53B7'
  }
  
  export const SECONDARY = {
    TEAL: '#FFF3E0',
    GREEN: '#FFE1B3',
    SAFFRON: '#FFCE81',
    PINK: '#FFBA4E',
    50: '#F77F00',
    100: '#979797',
    200: '#FFCE81',// Need to remove from here
    300: '#FFBA4E',
    400: '#FFAA27',
    500: '#FF9C02',
    600: '#FD9001',
    700: '#F78000',
    800: '#F17000',
    900: '#FD7200'
  }
  export const TEAL = {
    100: '#36B5C7',
    80: '#5EC4D2',
    50: '#9ADAE3',
    30: '#C3E9EE',
    10: '#EBF8F9'
  }
  export const GREEN = {
    100: '#9EB014',
    80: '#B1C043',
    50: '#CED889',
    30: '#E2E7B8',
    10: '#F5F7E7'
  }
  export const SAFFRON = {
    100: '#FD8D26',
    80: '#FDA451',
    50: '#FEC692',
    30: '#FEDDBE',
    10: '#FFF4E9'
  }
  export const PINK = {
    100: '#FF7C99',
    80: '#FF96AD',
    50: '#FFBDCC',
    30: '#FFD8E0',
    20: '#FAE7E7',
    10: '#FFF2F5'
  }
  export const GRAY = {
    100: '#F5F5F5',
    200: '#EBEBEB',
    300: '#D9D9D9',
    400: '#B3B3B3',
    500: '#D8D8D8',
    600: '#676767',
    700: '#414141',
    800: '#4A4A4A',
    900: '#999999',
    1000: '#AAAAAA',
    1100: '#D9D9D9',
    1200: '#E5E5E5',
    1300: '#E9EEF8',
    1400: '#373C47',
    1500: '#5F636C',
    1600: '#1A489E',
    1700: '#9B9DA3',
    1800: '#BCCCE9'
  }
  export const COLORS = {
    PRIMARY: PRIMARY,
    SECONDARY: SECONDARY,
    BLACK: '#000000',
    WHITE: '#FFFFFF',
    GREEN: '#B3C435',
    BLUE: '#077680',
    LOGO_GRAY: '#444852',
    DARK_GRAY: '#4A4A4A',
    MEDIUM_DARK_GRAY: '#414141',
    DARK_ORANGE: '#E85500',
    DARKER_ORANGE: '#F17000',
    LIGHT_ORANGE: '#FFE1B3',
    MEDIUM_RED_ORANGE: '#FF6E40',
    LIGHT_BLUE: '#39A2EA',
    RED: '#CC1414',
    ALICE_BLUE: "#F1F5FB",
    DISABLED: '#AFB1B5',
    HORIZONTAL_ORANGE: '#FD8D26',
    LAST_MONTH_PURPLE: '#26808C',
    MY_PERFORMANCE: '#26808C',
    INSTANCE_SCORE: '#5EC4D2',
    CURRENT_MONTH_BLUE_GREEN: '#2888A7',
    THRESHOLD_BROWN: '#A3534B',
    PRIMARY_CHARCOAL_GRAY: "#373C47",
    CHARCOAL_GRAY: "#5F636C",
    DARK_GREEN: '#167D5A'
  }
  export const SCREEN = {
    SMALL: { display: { xs: 'contents', md: 'none' } },
    BIG: { display: { xs: 'none', md: 'contents' } }
  }
  
  export const NoPaddingAndMargin = { p: 0, m: 0 }
  
  export const ListItemRightAlign = {
    display: 'flex',
    justifyContent: 'flex-end'
  }
  
  export const FONT_STYLES = {
    ROBOTO: { fontFamily: 'Roboto' },
    SANS: { fontFamily: 'Open Sans' },
    PIXEL16: { fontSize: '16px' },
    PIXEL14: { fontSize: '14px' },
    PIXEL12: { fontSize: '12px' },
    PIXEL10: { fontSize: '10px' },
    WEIGHT_MED: { fontWeight: 'medium' },
    WEIGHT_BOLD: { fontWeight: 'bold' },
    WEIGHT_600: { fontWeight: '600' },
    WEIGHT_400: { fontWeight: '400' }
  }
  
  export const DISPLAY = {
    FLEX: { display: 'flex' }
  }
  export const styles = {
  menuItemStyles: {
    fontSize: '12px',
    fontWeight: 400,
    color: GRAY[1400],
    fontFamily: 'Open Sans',
    lineHeight: '16px',
    paddingTop: '12px',
    paddingBottom: '12px'
  },
  dropDownPlaceHolder: {
    width: '240px',
    color: GRAY[1700],
    fontSize: '14px',
    height: "40px"
  },
  dropDownSelectStyles: {
    width: '240px',
    color: GRAY[1400],
    fontSize: '14px',
    height: "40px"
  },
  cancelButton: {
    borderColor: PRIMARY[100],
    color: PRIMARY[100],
    fontWeight: FONT_STYLES.WEIGHT_600,
    fontFamily: FONT_STYLES.SANS,
    lineHeight: "19px",
    padding:'10px 29.5px 9px 29.5px',
    boxShadow: 'none',
    '&:hover': {
      cursor: 'pointer',
      borderColor: PRIMARY[100],
      boxShadow: 'none'
    },
    textTransform: 'none'
  },
  submitButton: {
    marginLeft: "23.5px !important",
    backgroundColor: PRIMARY[100],
    boxShadow: 'none',
    fontWeight: FONT_STYLES.WEIGHT_600,
    fontFamily: FONT_STYLES.SANS,
    lineHeight: "19px",
    padding:'11px 29.5px 10px 29.5px',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: PRIMARY[100],
      boxShadow: 'none'
    },
    textTransform: 'none',
    gap: "8px"
  },
  textInputStyle: {
    width: '240px',
    input: {
      '&::placeholder': {
        fontSize: '14px',
        color: GRAY[1700]
      }
    }
  }
}