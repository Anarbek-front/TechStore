import { TextField } from '@mui/material'

const style = {
    width: '100%',
}

export const ReusableInput = (
    { value, onChange, label, type, color, error },
    props
) => {
    return (
        <TextField
            sx={style}
            variant="outlined"
            label={label}
            type={type}
            value={value}
            onChange={onChange}
            color={color}
            error={error}
            {...props}
        />
    )
}
