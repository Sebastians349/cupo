import * as React from 'react';
// import ListSubheader from '@mui/material/ListSubheader';
// import IconButton from '@mui/material/IconButton';
import { Info } from '@material-ui/icons';
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
  IconButton,
} from '@material-ui/core';

export default function TitlebarImageList() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      {/* CHECK OJO CUANDO HACE OVERRIDE CON STYLE Y CUANDO CON SX */}
      <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
        <ListSubheader component="div" fontSize="">
          Ofertas Noviembre
        </ListSubheader>
      </ImageListItem>
      {itemData.map(item => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.precio}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <Info fontSize="large" style={{ color: '#003081' }} />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Brunch',
    precio: '$23',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Mother Burger',
    precio: '$321',
  },
  {
    img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a',
    title: 'Croissant',
    precio: '$222',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: ' Latte',
    precio: '$45',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1568254183919-78a4f43a2877',
    title: 'Patisserie',
    precio: '$134',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey Pot',
    precio: '$341',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9',
    title: 'Healthy salad',
    precio: '$234',
  },
  {
    img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187',
    title: 'Cake Love',
    precio: '$123',
  },
  {
    img: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43',
    title: 'Macarrons',
    precio: '$43',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35',
    title: 'Cookies ',
    precio: '$311',
  },
  {
    img: 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907',
    title: 'Bakery',
    precio: '$33',
  },
  {
    img: 'https://images.unsplash.com/photo-1549057188-efd70413345e',
    title: 'Catering',
    precio: 'Consultar',
    cols: 2,
  },
];
