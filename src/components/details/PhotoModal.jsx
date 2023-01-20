import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Photo from './Photo.jsx';
import PhotoList from './PhotoList.jsx';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  height: '100vh',
  bgcolor: 'grey',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function PhotoModal({ photos }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="flex">
      <Button sx={{ mx: 'auto' }} onClick={handleOpen}>
        <Photo photo={photos[0]} />
      </Button>
      {/* <Photo onClick={handleOpen} photo={photos[0]} /> */}
      <Modal
        onClick={handleClose}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <PhotoList photos={photos} />
      </Modal>
    </div>
  );
}

export default PhotoModal;
