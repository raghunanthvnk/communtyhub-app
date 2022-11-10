import * as React from 'react';
import { makeStyles } from '@mui/styles'
import { styles } from '../UI/CustomTextInput/CustomTextInput.Style'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import { COLORS, GRAY } from '../styles'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

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
    "& .MuiFormControl-root": {
      width:'240px !important' 
    }
  },
  'input': {
    '&::placeholder': {
      color: `${GRAY[1700]} !important`
    }
  }
}))
const CustomCheckbox = ({ id, label, value, onChange,error,isdisabled }) => {
  const classes = useStyles()

  return (
    <FormControl sx={styles.formControlCheckBoxStyle} error={error}
    className={classes.formControl}>
    
    {/* <label>
      <input id={id} type="checkbox" defaultChecked={value} onChange={onChange} error={error} />
      {label}
    </label> */}
    <FormControlLabel control={<Checkbox defaultChecked ={value} id={id} onChange={onChange} />} label= {label} />
    <FormHelperText disabled={isdisabled}>{error}</FormHelperText>
   </FormControl>
  )
}

export default CustomCheckbox;
