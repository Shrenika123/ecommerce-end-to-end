import React from 'react'
import TextField from '@material-ui/core/TextField'

const CustomTextField = ({
  label,
  input,
  name,
  autoComplete,
  type,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    variant="outlined"
    margin="normal"
    error={touched && invalid}
    helperText={touched && error}
    fullWidth
    id={name}
    label={label}
    name={name}
    type={type}
    autoComplete={autoComplete}
    {...input}
    {...custom}
  />
)

export default CustomTextField
