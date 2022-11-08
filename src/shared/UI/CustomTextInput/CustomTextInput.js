import React from 'react'
import { makeStyles } from '@mui/styles'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import { styles } from './CustomTextInput.Style'
import { COLORS, GRAY, PRIMARY } from '../../styles'

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
      color: COLORS.RED
    },
    "& .MuiTextField-root .Mui-disabled": {
      // borderColor: `${PRIMARY[1200]} !important`,
      border: `1px solid ${PRIMARY[1200]}`,
      "& .MuiOutlinedInput-notchedOutline":{
        outline: 'none',
        border: 'none',
        borderColor: PRIMARY[1200]
      },
      '& .-webkit-text-fill-color': {
        color: `${COLORS.RED} !important`
      }
      
      
    }
    
  },
  'input': {
    '&::placeholder': {
      color: `${GRAY[1700]} !important`
    }
  }
}))

const CustomTextInput = ({ label, textStyles, onChange,
  name, isRequired, value, size, error, isdisabled }) => {

  const classes = useStyles()

  return <FormControl sx={styles.formControlStyle}
    disabled={isdisabled} error={error}
    className={classes.formControl}>
    <label style={isdisabled ? styles.titleDisabled: styles.title}>{label}
      {
        isRequired ? <span style={styles.required}>*</span> : ""
      }
    </label>
    <TextField name={name} value={value} type="text"
      variant="outlined" sx={textStyles}
      onChange={onChange} 
      placeholder={isdisabled ? "": "Enter data"} 
      required={isRequired}
      error={error}
      data-testid={name}
      disabled={isdisabled}
      InputProps={{ classes: isdisabled ?
        textStyles:{ input: classes['input'] }}}
      size={size} />
    <FormHelperText disabled={isdisabled} 
      className={classes.formHelperText}>{error}</FormHelperText>
  </FormControl>
}

export default CustomTextInput