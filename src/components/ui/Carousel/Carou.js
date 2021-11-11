// Use el excelente Learus Carousel .🙌🙏✨ https://github.com/Learus/react-material-ui-carousel
//          backgroundColor: 'rgb(100, 172, 200)',

import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {
  Paper,
  Button,
  Box,
  Typography,
  Modal,
  Link,
  Icon,
} from '@material-ui/core';
import Redes from '../Redes';
import Image from 'material-ui-image';
import { LightMode } from '@chakra-ui/color-mode';

const style = {
  // CHECK style para el modal
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  minHeight: '50%',
  bgcolor: 'background.paper',
  borderRadius: 4,
  boxShadow: 48,
  textAlign: 'center',
  color: '#003087',
  p: 2,
};

function Carou(props) {
  const items = [
    {
      id: 2,
      logo: 'logo192.png',
      nombre: 'ESTACIÓN VERDE',
      descripcion: 'Café, flores y cosas ricas',
      categoria: 'gastronomia',
      oferta: '35 % OFF ',
      ubicacion: 'Estomba 2651 ',
      mail: '',
      fb: 'estacionverdecoghlan',
      ig: 'estacionverdecoghlan',
      tw: '',
      wapp: '',
      img: 'verde1.png',
      // color: 'rgb(100, 172, 200)',
    },
    {
      id: 3,
      logo: 'logo192.png',
      nombre: 'PURO',
      descripcion: 'Almacen natural',
      categoria: 'alimentos',
      oferta: '2 X 1  ',
      ubicacion: 'Romulo Naon 2323',
      mail: '',
      fb: 'almacennaturalpuro',
      ig: 'almacennaturalpuro',
      tw: '',
      wapp: '26125615', // plan!
      img: 'puro2.png',
      // color: 'rgb(125, 133, 177)',
    },
    {
      id: 4,
      logo: 'logo512.png',
      nombre: 'AGRADO',
      descripcion: 'Cafetería',
      categoria: 'gastronomía',
      oferta: '2 X 1  ',
      ubicacion: 'Superí 3002',
      mail: '',
      fb: '',
      ig: '',
      tw: '',
      wapp: '3298-9416',
      img: 'agrado1.jpg',
      // color: 'rgb(125, 133, 177)',
    },
    {
      id: 1,
      logo: 'assets/img/logo-1.png',
      nombre: 'PLAN!',
      descripcion: 'organizá tu día',
      categoria: 'compras',
      oferta: '50 % OFF ',
      ubicacion: 'Romulo Naon',
      mail: 'plansomos@gmail.com',
      fb: 'organizatuplan',
      ig: 'organizatuplan',
      tw: '',
      wapp: '26125615', // plan!
      img: 'plan1.png',
      // color: 'rgb(206, 126, 120)',
    },
  ];

  return (
    <Carousel
      navButtonsProps={{
        // COLOR Change  and radius of the actual buttons. THIS STYLES BOTH BUTTONS
        style: {
          backgroundColor: '#005E87',
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

  // misma logica que en <redes/> para pasarle props.
  const maps = 'https://www.google.com/maps/search/' + props.item.ubicacion;

  return (
    <Paper elevation={2}>
      <Box
        // CHECK main y donde va el modal button
        sx={{
          backgroundColor: '#005E87', //FONDO CAROU COLOR
          textAlign: 'center',
          color: 'white',
          letterSpacing: 2,
          padding: 10,
          borderRadius: 5,
          fontFamily: 'Roboto',
        }}
      >
        <Box
          sx={{
            fontWeight: '500',
            fontSize: 28,
            padding: 5,
          }}
        >
          <h2>{props.item.nombre}</h2>
        </Box>
        <Box
          sx={{
            letterSpacing: 1,
            fontWeight: '300',
            mb: '1rem',
            fontSize: 18,
          }}
        >
          <p>{props.item.descripcion}</p>
        </Box>
        <Button variant="text" size="small" onClick={handleOpen}>
          <Box
            sx={{
              //cambia solo el texto <p></p> del boton
              color: 'white',
              fontSize: 18,
              border: '2px solid whitesmoke',
              padding: '0.35em',
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
              ¡La oferta va acá! <br />
            </Typography>
            <Typography
              id="modal-modal-description"
              variant="body2"
              component="h4"
            >
              *Promoción solo válida en efectivo / débito <br />
            </Typography>
            {/* CHECK /////////////////// logo Modal */}
            <Box
              sx={{
                maxWidth: '50px',
                textAlign: 'center',
                marginRight: 'auto  ',
                marginLeft: 'auto  ',
                paddingTop: '10px',
              }}
            >
              <Image src={props.item.logo} />
            </Box>
            <Box
              sx={{
                marginTop: '1rem',
                fontWeight: 'bold',
              }}
            >
              {props.item.nombre} <br />
              <Icon>location_on</Icon>
              <br />
              <Link href={maps} target="_blank" rel="noopener">
                {props.item.ubicacion}
              </Link>{' '}
              <LightMode>
                <Box
                  sx={{
                    marginTop: '4rem',
                  }}
                >
                  <Redes
                    wapp={props.item.wapp}
                    mail={props.item.mail}
                    fb={props.item.fb}
                    ig={props.item.ig}
                    tw={props.item.tw}
                  />
                </Box>
              </LightMode>
            </Box>
          </Box>
        </Modal>
      </Box>
      {/*  ////////// MODAL //////  */}
    </Paper>
  );
}

export default Carou;
