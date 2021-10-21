import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Box } from '@material-ui/core';

// Use el excelente Learus Carousel .🙌🙏✨ https://github.com/Learus/react-material-ui-carousel

function Example(props) {
  var items = [
    {
      name: 'La Aldea',
      description: 'Las mejores mediaslunas del universo',
    },
    {
      name: 'La Aldea de las mediaslunas 2',
      description: 'Hello World!',
    },
    {
      name: 'La Aldea de las mediaslunas 2',
      description: 'Hello World!',
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
  return (
    <Paper elevation={2} variant="outlined" sx={{ textAlign: 'center' }}>
      <Box sx={{ textAlign: 'center' }}>
        <h2>{props.item.name}</h2>
        <p>{props.item.description}</p>
      </Box>

      <Button className="CheckButton">¡Mirá la oferta destacada!</Button>
    </Paper>
  );
}

export default Example;
