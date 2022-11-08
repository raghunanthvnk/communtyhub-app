import { makeStyles, createStyles } from '@mui/styles'
import { COLORS, PRIMARY } from '../shared/styles'
import { GRAY } from '../shared/styles'

export const MyStyle = makeStyles(() => createStyles({
  container: {
    position: 'absolute',
    top: '40%',
    left: '40%',
    width: '444px',
    height: '188px',
    background: '#FFFFFF',
    borderRadius: '8px',

    "@media screen and (max-width: 1366px)": {
      top: '40%',
      left: '35%',
    }
  },
  innerContainer: {
    width: '100%',
    height: '100%',
    padding: '24px 16px'
  },
  head1: {
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '22px',
    width: '71px',
    height: '22px',
    padding: '0px',
    margin: '0px',
    color: '#373C47',
  },
  head2: {
    width: '70px',
    height: '16px',
    fontSize: '12px !important',
    lineHeight: '16px !important',
    margin: '0px',
    marginTop: '4px',
    color: '#373C47',
  },
  cp: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: "16px",
    margin: '24px 0px',
    color: '#373C47',
    width: '382px',
    height: '16px',
  }
}))

export const TeamComparisonButton = {
  backgroundColor: COLORS.PRIMARY[100],
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px 16px',
  gap: '8px',
  borderRadius: '4px',
  textTransform: 'none',
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '19px',
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  boxShadow: 'none',
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: COLORS.PRIMARY[100],
    boxShadow: 'none'
  }
}

export const AdvisorNavigationButton = {
  textTransform: 'none',
  padding: '0px',
  color: COLORS.PRIMARY[100],
  fontWeight: '400',
  lineHeight: '16px',
  familyFamily: 'Open Sans',
  fontStyle: 'normal',
  fontSize: '12px',
  minWidth: '250px',
  textAlign: 'left',
  justifyContent: 'left',
  '&:hover': {
    backgroundColor: 'transparent'
  }
}

export const TableCellFontStyle = {

  color: COLORS.PRIMARY_CHARCOAL_GRAY,
  fontWeight: '400',
  lineHeight: '16px',
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontSize: '12px',
  paddingTop: '11px',
  paddingLeft: '16px',
  paddingBottom: '11px',
  whiteSpace: 'nowrap'
}

export const TableHeaderFontStyle = {

  color: COLORS.PRIMARY[0],
  fontWeight: '600',
  lineHeight: '16px',
  familyFamily: 'Open Sans',
  fontStyle: 'normal',
  fontSize: '12px',
  paddingTop: '11px',
  paddingLeft: '16px',
  paddingBottom: '11px'
}

export const ModalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 980,
  height: 643,
  bgcolor: 'background.paper',
  boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.161)',
  p: '25px',
  pb: '72px',
  borderRadius: '8px'

}

export const PageNumberBtn = {
  fontSize: '12px',
  fontFamily: 'Open Sans',
  color: 'white',
  backgroundColor: PRIMARY[100],
  borderRadius: '5px',
  width: '24px',
  height: '24px',
  paddingTop: '4px',
  paddingBottom: '4px',
  paddingLeft: '9px',
  paddingRight: '8px',
  fontWeight: '600'
}

export const CloseButton = {
  top: 30,
  right: 30,
  position: 'absolute'
}

export const ModalTitle = {
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: '22px'
}

export const UpDownIcon = {
  display: 'flex',
  flexDirection: 'column',
  height: '16px'
}

export const ArrowUpDownIcon = {
  color: GRAY[1700],
  fontSize: 19,
}

export const MyteamPagination = {
  right: '10px',
  position: 'absolute',
  bottom: '10px'
}

export const MyteamPaginationNonSticky = {
  display: 'flex',
  justifyContent: 'right',
  marginRight: '-4px'
}

export const TableHead = {
  border: `1px solid ${COLORS.PRIMARY[50]}`
}

export const TableContainer = {
  borderLeft: `1px solid ${COLORS.PRIMARY[50]}`,
  borderRight: `1px solid ${COLORS.PRIMARY[50]}`
}

export const TableHeadBG = {
  backgroundColor: GRAY[1300]
}

export const Okbtn = {
  width: '72px',
  height: '36px',
  padding: '10px 16px',
  background: '#1E54B7',
  borderRadius: '4px',
  left: '340px',
  fontSize: '12px',
  fontWeight: 600,
}

export const loaderStyle = {
  margin: '25px auto',
  color: COLORS.PRIMARY[100],
  width: '48px',
  height: '48px'
}