import * as React from 'react';
import { ImageList, ImageListItem } from '@material-ui/core';

export default function StandardImageList() {
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {itemData.map(item => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a',
    title: 'croissant',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1568254183919-78a4f43a2877',
    title: 'vidriera',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9',
    title: 'ensalada',
  },
  {
    img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187',
    title: 'torta',
  },
  {
    img: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43',
    title: 'Macarrons',
  },
  {
    img: 'https://images.unsplash.com/photo-1549057188-efd70413345e',
    title: 'Señora amasa',
  },
  {
    img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35',
    title: 'Cookies',
  },
  {
    img: 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907',
    title: 'masa',
  },
];
