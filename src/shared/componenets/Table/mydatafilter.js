import React from 'react'
import { useTranslation } from 'react-i18next'
import InputBase from '@mui/material/InputBase'
import { makeStyles } from '@mui/styles'
import SearchIcon from '../../../assets/images/icons/SearchIcon.svg'
import closeIconGrey from '../../../assets/images/icons/CloseIconGrey.svg'
import IconButton from '@mui/material/IconButton'
import { GRAY } from '../../styles'

const useStyles = makeStyles(() => ({
  search: {
    position: 'relative',
    borderRadius: '4px',
    marginRight: '0px',
    marginLeft: 0,
    width: '240px',
    height: '40px',
    float: 'right',
    border: `1px solid ${GRAY[1700]}`,
    margin: '10px 0px'
  },
  searchLeft: {
    position: 'relative',
    borderRadius: '4px',
    marginRight: '0px',
    marginLeft: 0,
    width: '240px',
    height: '38px', 
    border: `1px solid ${GRAY[1700]}`,
    margin: '10px 0px',   
    float: 'left',
    marginTop: '-58px'    
  },
  searchIcon: {
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: GRAY[1500],
    paddingLeft: '16px',
    paddingRight: '10px',
    marginTop: '1px'
  },
  inputRoot: {
    color: GRAY[1500] ,
    fontSize: '14px !important',
    fontWeight: '400 !important',
    lineHeight: '19.07px !important'
  },
  inputInput: {
    padding: '9.5px !important',
    paddingLeft: '35px !important',
    width: '150px !important',
    verticalAlign: 'center !important'  
  },
}))

const MyDataFilter = ({
  globalFilter,
  setGlobalFilter,
  isLeft = false,
  isPlaceholderText = false
}) => {
  const { t } = useTranslation()
  const classes = useStyles()
  
  return (
    <div  
      className={isLeft ? classes.searchLeft : classes.search}>      
      <div data-testid="myTeamsearchDiv">
        <div className={classes.searchIcon} >
          <img src={SearchIcon} />
        </div>
        <InputBase
          value={globalFilter || ''}
          onChange={e => {
            setGlobalFilter(e.target.value || undefined)
          }}
          placeholder={isPlaceholderText ? t('search', 'Search') 
            : t('searchbyname', 'Search by Name')}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' , 
            "data-testid": "myTeamsearchInput" }}
        />
        { globalFilter && <IconButton
          color="inherit"
          disableRipple
          sx={{opacity:'0.6'}}
          onClick={() => { setGlobalFilter(undefined) }}
          data-testid="myTeamsearch-closebutton"
        >
          <img src={closeIconGrey} height="15px" />
        </IconButton> }
      </div>
    </div>
  )
}

export default MyDataFilter
