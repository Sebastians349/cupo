// Use el excelente Learus Carousel .🙌🙏✨ https://github.com/Learus/react-material-ui-carousel

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
      name: 'Plan!',
      description: 'Organizadores Magnéticos',
      wapp: '26125615', // plan!
    },
    {
      id: 2,
      name: 'Café Martinez',
      description: 'Expertos en café',
      wapp: '62868541', //C
    },
    {
      id: 3,
      name: 'Estacion Verde',
      description: '¡Cosas Ricas!',
      wapp: '50500147', // es el del GCBA
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
  // implementé el modal básico de MUI
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
          minHeight: '75px',
          borderRadius: 5,
          letterSpacing: 3,
        }}
      >
        <Box sx={{ fontWeight: '500', fontSize: 24 }}>
          <h2>{props.item.name}</h2>
        </Box>
        <Box sx={{ letterSpacing: 1, fontWeight: 'medium', padding: 5 }}>
          <p>{props.item.description}</p>
        </Box>
      </Box>

      <Box sx={{ textAlign: 'center' }}>
        <Button onClick={handleOpen}>¡CLICKEÁ PARA VER LA OFERTA!</Button>
        {/*  ////////// MODAL //////  */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h2" component="h2">
              50% OFF{' '}
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
        {/*  ////////// MODAL //////  */}
      </Box>
    </Paper>
  );
}

export default Carou;
