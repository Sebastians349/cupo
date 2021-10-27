// Use el excelente Learus Carousel .🙌🙏✨ https://github.com/Learus/react-material-ui-carousel
//          backgroundColor: 'rgb(100, 172, 200)',

import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Box, Typography, Modal } from '@material-ui/core';
import Redes from '../Redes';

const style = {
  // CHECK style para el modal
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  minHeight: '50%',
  bgcolor: 'background.paper',
  borderRadius: 4,
  boxShadow: 48,
  textAlign: 'center',
  p: 4,
};

function Carou(props) {
  const items = [
    {
      id: 1,
      name: 'Organiza tu plan!',
      description: 'Organizadores Magnéticos',
      wapp: '26125615', // plan!
      oferta: '20 % off',
    },
    {
      id: 2,
      name: 'Café Martinez',
      description: 'Expertos en café',
      wapp: '62868541', //C
      oferta: '20 % off',
    },
    {
      id: 3,
      name: 'Estacion Verde',
      description: '¡Cosas Ricas!',
      wapp: '50500147', // es el del GCBA
      oferta: '20 % off',
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  //  modal básico de MUI
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Paper elevation={2}>
      <Box
        sx={{
          backgroundColor: 'rgb(100, 172, 200)',
          textAlign: 'center',
          color: 'whitesmoke',
          borderRadius: 5,
          letterSpacing: 3,
          padding: 10,
        }}
      >
        <Box sx={{ fontWeight: '500', fontSize: 28, padding: 5 }}>
          <h2>{props.item.name}</h2>
        </Box>
        <Box
          sx={{
            letterSpacing: 1,
            fontWeight: 'medium',
            // padding: 5,
            fontSize: 18,
          }}
        >
          <p>{props.item.description}</p>
        </Box>
        <Button
          sx={{ border: '1px', borderColor: 'white' }}
          onClick={handleOpen}
        >
          <Box
            sx={{
              color: 'white',
              fontSize: 18,
              // padding: 5,
              fontWeight: '500',
            }}
          >
            + INFO
          </Box>
        </Button>
      </Box>

      {/*  ////////// MODAL //////  */}
      <Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h2" component="h2">
              {props.item.oferta}
            </Typography>
            <Typography
              id="modal-modal-description"
              variant="h4"
              component="h3"
            >
              ¡La oferta va acá! <br /> ¡y sigue acá! <br />
              ¡y acá también!{' '}
            </Typography>
            <Typography
              id="modal-modal-description"
              variant="body2"
              component="h4"
            >
              <br />
              <br />
              <br />
              <br />
              <br />
              *Promoción solo válida en efectivo / débito{' '}
            </Typography>
            <Box sx={{ marginTop: '5rem' }}>
              <Redes wapp={props.item.wapp} />
            </Box>
          </Box>
        </Modal>
      </Box>
      {/*  ////////// MODAL //////  */}
    </Paper>
  );
}

export default Carou;
