import React from 'react'
import { makeStyles } from '@mui/styles'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import Select from '@mui/material/Select'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { styles } from './CutomDropDown.Style'
import { COLORS } from '../../styles'

const useStyles = makeStyles(() => ({
  formHelperText: {
    marginLeft: "0px !important",
    "& .Mui-error": {
      color: COLORS.RED
    }
  },
  formControl: {
    "& .Mui-error": {
      borderColor: COLORS.RED,
      color: `${COLORS.RED} !important`
    }
  }
}))

const CustomDropDown = ({
  name, label, value, options, selectStyles,
  menuItemStyles, onChange,
  error, isRequired,
  placeholderStyles,
  isDisable
}) => {

  const classes = useStyles()
  
  const isSelected = value !== ""

  return <FormControl sx={styles.formControlStyle} error={error}
    className={classes.formControl}>
    <label style={styles.title}>{label}
      {
        isRequired ? <span style={styles.required}>*</span> : ""
      }
    </label>
    <Select
      name={name}
      value={value}
      defaultValue={value}
      IconComponent={KeyboardArrowDownIcon}
      sx={isSelected ? selectStyles : placeholderStyles}
      displayEmpty
      disabled={isDisable}
      renderValue={
        isSelected ? undefined : () => "Select"
      }
      onChange={onChange}
      size="small"
      data-testid={name}
      error={error}>
      {
        options.map((option, index) => {
          return <MenuItem
            sx={menuItemStyles}
            value={option.value} key={index}>
            {option.label}
          </MenuItem>
        })
      }
    </Select>
    <FormHelperText className={classes.formHelperText}>{error}</FormHelperText>
  </FormControl>
}

export default CustomDropDown