import React from 'react'

import FirstPageIcon from '@mui/icons-material/KeyboardDoubleArrowLeftRounded'
import IconButton from '@mui/material/IconButton'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeftRounded'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRightRounded'
import LastPageIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded'
import { makeStyles } from '@mui/styles'
import { PRIMARY, GRAY } from '../../styles'
import * as Styles from '../../mystyle'

const useStyles = makeStyles(() => ({
  root: {
    flexShrink: 0,
    marginLeft: '8px'
  },
  IconStyles: {
    fill: GRAY[1700],
    color: GRAY[1700],
    opacity: 0.86
  },
  ActiveStyles: {
    fill: PRIMARY[100],
    color: PRIMARY[100]
  }
}))

const MyPagination = props => {
  const classes = useStyles()
  const { count, page, rowsPerPage, onPageChange } = props

  const handleFirstPageButtonClick = event => {
    onPageChange(event, 0)
  }

  const handleBackButtonClick = event => {
    onPageChange(event, page - 1)
  }

  const handleNextButtonClick = event => {
    onPageChange(event, page + 1)
  }

  const handleLastPageButtonClick = event => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1))
  }

  return (
    <div className={classes.root}>

      <IconButton
        disableRipple
        data-testid="myteam-FirstPageBtn"
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page">
        <FirstPageIcon className={
          page === 0 ? classes.IconStyles : classes.ActiveStyles} />
      </IconButton>

      <IconButton
        disableRipple
        data-testid="myteam-ArrowLeftBtn"
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page">
        <KeyboardArrowLeft className={
          page === 0 ? classes.IconStyles : classes.ActiveStyles} />
      </IconButton>

      <IconButton disableRipple
        style={{ ...Styles.PageNumberBtn }}
        disabled={true}
        data-testid="page-number">
        {page + 1}
      </IconButton>

      <IconButton
        disableRipple
        data-testid="myteam-ArrowRightBtn"
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page">
        <KeyboardArrowRight className={
          page >= Math.ceil(count / rowsPerPage) - 1 ?
            classes.IconStyles : classes.ActiveStyles
        } />
      </IconButton>

      <IconButton
        disableRipple
        data-testid="myteam-LastPageBtn"
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page">
        <LastPageIcon className={page >= Math.ceil(count / rowsPerPage) - 1 ?
          classes.IconStyles : classes.ActiveStyles} />
      </IconButton>

    </div>
  )
}

export default MyPagination
