// backgroundColor: 'rgb(125, 133, 177)',

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
  padding: 15,
};

function Carou2(props) {
  const items = [
    {
      logo: '/assets/img/logoplan.png',
      nombre: 'PLAN!',
      descripcion: 'organizá tu día',
      categoria: 'compras',
      oferta: '50 % OFF ',
      ubicacion: '',
      mail: 'plansomos@gmail.com',
      fb: 'plansomos',
      ig: 'plansomos',
      tw: '',
      wapp: '26125615', // plan!
    },
    {
      id: 2,
      nombre: 'CAFE MARTINEZ',
      descripcion: 'Expertos en cafe',
      categoria: 'gastronomia',
      oferta: '35 % OFF ',
      ubicacion: '',
      mail: 'plansomos@gmail.com',
      fb: 'plansomos',
      ig: 'plansomos',
      tw: '',
      wapp: '26125615', // plan!
    },
    {
      id: 3,
      nombre: 'PURO',
      descripcion: 'Almacen natural',
      categoria: 'compras',
      oferta: '2 X 1  ',
      ubicacion: '',
      mail: 'plansomos@gmail.com',
      fb: 'plansomos',
      ig: 'plansomos',
      tw: '',
      wapp: '26125615', // plan!
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
          backgroundColor: 'rgb(125, 133, 177)',
          textAlign: 'center',
          color: 'whitesmoke',
          borderRadius: 5,
          letterSpacing: 3,
          padding: 10,
        }}
      >
        <Box sx={{ fontWeight: '500', fontSize: 28, padding: 5 }}>
          <h2>{props.item.nombre}</h2>
        </Box>
        <Box
          sx={{
            letterSpacing: 1,
            fontWeight: 'medium',
            mb: '1rem',
            fontSize: 18,
          }}
        >
          <p>{props.item.descripcion}</p>
        </Box>
        <Button
          color="primary"
          variant="outlined"
          size="large"
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
            + INFO{' '}
          </Box>
        </Button>
      </Box>

      <Box sx={{ textAlign: 'center' }}>
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
              {' '}
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

export default Carou2;
