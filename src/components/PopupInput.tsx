import TextField from '@mui/material/TextField';

const PopupInput = (props) => {
    return (
        <div>
            <p className='label'>{props.label}</p>
            <TextField
                name={props.name}
                variant="filled"
                className='textbox'
                value={props?.values?.props?.name}
                onChange={props.handleChange}  
                InputProps={{
                    disableUnderline: false, 
                }}
                sx={{
                    '& .MuiFilledInput-root': {
                        backgroundColor: '#efefef', 
                        '&:hover': {
                            backgroundColor: '#d3f3d7', 
                        },
                        '&.Mui-focused': {
                            backgroundColor: '#d3f3d7',
                            '&:after': {
                                borderBottomColor: '#4caf50',
                                borderBottomWidth: '2px',
                            },
                        },
                        '&:before': {
                            borderBottom: '2px solid #9e9e9e',
                        },
                    },
                    '& .MuiFilledInput-input': {
                        paddingTop: '10px',
                        paddingBottom: '10px',
                    },
                    '& .MuiInputLabel-root': {
                        color: '#4caf50',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        textAlign: 'left',
                        width: '100%',
                        right: '0',
                        height: '50%',
                    },
                }}
            />
        </div>
    );
}

export default PopupInput;
