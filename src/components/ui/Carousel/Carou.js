// Use el excelente Learus Carousel .🙌🙏✨ https://github.com/Learus/react-material-ui-carousel
//          backgroundColor: 'rgb(100, 172, 200)',

import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Box, Typography, Modal } from '@material-ui/core';
import Redes from '../Redes';
// import QuiltedImageList from '../Carousel/QuiltedImageList';
import Image from 'material-ui-image';
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
      logo: '/assets/img/logoplan.png',
      nombre: 'PLAN!',
      descripcion: 'organizá tu día',
      categoria: 'compras',
      oferta: '50 % OFF ',
      ubicacion: 'Estomba 2411',
      mail: 'plansomos@gmail.com',
      fb: 'plansomos',
      ig: 'plansomos',
      tw: '',
      wapp: '26125615', // plan!
      img: '5.jpg',
      color: 'rgb(206, 126, 120)',
    },
    {
      id: 2,
      nombre: 'CAFE MARTINEZ',
      descripcion: 'Expertos en cafe',
      categoria: 'gastronomia',
      oferta: '35 % OFF ',
      ubicacion: 'Plaza 3265',
      mail: 'plansomos@gmail.com',
      fb: 'plansomos',
      ig: 'plansomos',
      tw: '',
      wapp: '26125615', // plan!
      img: '3.jpg',
      color: 'rgb(100, 172, 200)',
    },
    {
      id: 3,
      nombre: 'PURO',
      descripcion: 'Almacen natural',
      categoria: 'compras',
      oferta: '2 X 1  ',
      ubicacion: 'Superi 1988',
      mail: 'plansomos@gmail.com',
      fb: 'plansomos',
      ig: 'plansomos',
      tw: '',
      wapp: '26125615', // plan!
      img: '4.jpg',
      color: 'rgb(125, 133, 177)',
    },
  ];

  return (
    <Carousel
      navButtonsProps={{
        // COLOR Change  and radius of the actual buttons. THIS STYLES BOTH BUTTONS
        style: {
          backgroundColor: 'rgb(206, 126, 120)',
        },
      }}
      //
    >
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
        // CHECK main y donde va el modal button
        sx={{
          backgroundColor: '#005E87', //FONDO CAROU COLOR
          textAlign: 'center',
          color: 'white',
          letterSpacing: 3,
          padding: 10,
          borderRadius: 5,
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
        <Button variant="outlined" size="small" onClick={handleOpen}>
          <Box
            sx={{
              //cambia solo el texto <p></p> del boton
              color: 'white',
              fontSize: 18,
            }}
          >
            + INFO
          </Box>
        </Button>
      </Box>
      <Image
        src={props.item.img}
        aspectRatio={16 / 9}
        imageStyle={{ borderRadius: '3px' }}
      />

      {/* ////////////FIN MAIN /////////  */}

      {/* <QuiltedImageList img={props.item.img} /> */}

      {/*  ////////// MODAL (MUI) //////  */}
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
              ¡La oferta va acá! <br /> ¡y sigue acá!
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
              *Promoción solo válida en efectivo / débito <br />
              {props.item.nombre} <br />
              {props.item.ubicacion} <br />
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
