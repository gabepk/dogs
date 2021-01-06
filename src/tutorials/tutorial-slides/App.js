import React from 'react';
import Slide from './tutorials/tutorial-slides/Slide';
import Card from 'react-bootstrap/Card';

import dog1 from './img/dog.jpg';
import Icon from './tutorials/tutorial-slides/IconSvg';

const App = () => {
  const [slides, setSlides] = React.useState([
    { id: 'slide1', text: 'Slide 1', img: dog1 },
    { id: 'slide2', text: 'Slide 2', img: dog1 },
    { id: 'slide3', text: 'Slide 3', img: dog1 },
  ]);

  return (
    <>
      Logo em SVG: <Icon color="red" width="60" height="50" />
      <Card
        bg="dark"
        text="white"
        style={{ maxWidth: '18rem' }}
        className="m-5"
      >
        <Card.Header>Simple slide</Card.Header>
        <Card.Body>
          <Card.Title>Slide simples usando CSS e React</Card.Title>
          <Card.Text>
            E esse card foi feito com a lib de bootstrap. Doidera
          </Card.Text>
        </Card.Body>
      </Card>
      <Slide slides={slides} />
    </>
  );
};

export default App;
