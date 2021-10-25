// Use el excelente Learus Carousel .🙌🙏✨ https://github.com/Learus/react-material-ui-carousel

import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Box, Typography, Modal } from '@material-ui/core';
import Redes from './ui/Redes';
const style = {
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
  // p: 4,
};

function Carou(props) {
  const items = [
    {
      id: 1,
      name: 'La Aldea',
      description: 'Casa de Medialunas',
      wapp: '26125615',
    },
    {
      id: 2,
      name: 'Café Martinez',
      description: 'Expertos en café',
      wapp: '62868541',
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
          //faker.commerce.color()
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
              sx={{ mt: 15 }}
            >
              ¡La oferta va acá! ¡y sigue acá! ¡y acá también!{' '}
            </Typography>
            <Typography
              id="modal-modal-description"
              variant="body2"
              component="h4"
              sx={{ mt: 15 }}
            >
              *Promoción solo válida en efectivo / débito{' '}
            </Typography>
            <Redes wapp={props.item.wapp} />
          </Box>
        </Modal>
        {/*  ////////// MODAL //////  */}
      </Box>
    </Paper>
  );
}

export default Carou;
