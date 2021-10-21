// Use el excelente Learus Carousel .🙌🙏✨ https://github.com/Learus/react-material-ui-carousel

import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Box, Typography, Modal } from '@material-ui/core';
// import faker from 'faker';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  minHeight: '50%',
  bgcolor: 'background.paper',
  //   border: '1px solid #000',
  boxShadow: 48,
  textAlign: 'center',
  p: 4,
};

function Example(props) {
  var items = [
    {
      name: 'La Aldea',
      description: 'Las mejores mediaslunas del universo',
      color: 'rgb(125, 133, 177)',
    },
    {
      name: 'Café Martinez',
      description: 'Expertos en café',
      color: 'rgb(206, 126, 120)',
    },
    {
      name: 'Estacion Verde',
      description: 'El carrot cake sana',
      color: 'rgb(100, 172, 200)',
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
        <Box sx={{ letterSpacing: 1, fontWeight: 'medium' }}>
          <p>{props.item.description}</p>
        </Box>
      </Box>

      <Box sx={{ textAlign: 'center' }}>
        <Button onClick={handleOpen}>
          ¡CLICKEÁ PARA VER LA OFERTA DESTACADA!
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              50% OFF{' '}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Hasta el Viernes 16/5*
            </Typography>
          </Box>
        </Modal>
        {/* <BasicModal /> */}
      </Box>
    </Paper>
  );
}

export default Example;
