import { Box, Modal } from '@mui/material'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '100%', sm: '80%', md: '50%' },
    bgcolor: '#fff',
    outline: 'none',
    boxShadow: 24,
    p: { xs: 2, sm: 4 },
    borderRadius: { xs: 0, sm: '8px' },
}

export const ReusableModal = ({ open, handleClose, children }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
        >
            <Box sx={style}>{children}</Box>
        </Modal>
    )
}
