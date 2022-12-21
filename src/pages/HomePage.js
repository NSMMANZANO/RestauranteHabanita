import React from "react";

import "./HomePage.css";

import {
  FreeBird,
  Container,
  Col,
  Row,
  CardBody,
  Fa,
  Carousel,
  CarouselCaption,
  CarouselInner,
  CarouselItem,
  View,
  Mask,
} from "mdbreact";

const NavLink = require("react-router-dom").NavLink;

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <br></br>
        <Container>
        <Carousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
        >
          <CarouselInner>
            <CarouselItem itemId="1">
              <View>
                <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/tf-lab/image/upload/restaurant/f43a4ba9-36b1-4b0f-9afb-8d2525600b56/3163e73c-bf71-47a5-b4e0-3d540010f526.jpg"
                    alt="Nuestra terraza"
                />
                <Mask overlay="yellow-slight" />
              </View>
              <CarouselCaption>
                <h3 className="h1-responsive">Nuestra terraza </h3>
                <p></p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="2">
              <View>
                <img
                  className="d-block w-100"
                  src="https://habanita.es/wp-content/uploads/slide00.jpg"
                  alt="Nuestro salón"
                />
                <Mask overlay="yellow-slight" />
              </View>
              <CarouselCaption>
                <h3 className="h1-responsive">Nuestro Salón</h3>
                <p></p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="3">
              <View>
                <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbNN2hmsXgibEkzvc288YobFrR5b87s6BWjw&usqp=CAU"
                    alt="Nuestro plato estrella"
                />
                <Mask overlay="yellow-slight" />
              </View>
              <CarouselCaption>
                <h3 className="h1-responsive">Nuestro plato estrella</h3>
                <p></p>
              </CarouselCaption>
            </CarouselItem>
          </CarouselInner>
        </Carousel>
        </Container>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <FreeBird>
          <Row>
            <Col
              md="10"
              className="mx-auto float-none white z-depth-1 py-2 px-2"
            >
              <CardBody>
                <h2 className="h2-responsive mb-4">
                  <strong>Restaurante Habanita</strong>
                </h2>
                <p>Restaurante Vegano y Vegetariano en pleno centro de Sevilla</p>
                <p className="pb-4">
                  Bienvenidos a nuestra nueva web. Ahora tenemos una gran variedad de ideas que compartir.
                </p>
                
              </CardBody>
            </Col>
          </Row>
        </FreeBird>
        <Container>
          <Row>
            <Col md="10" className="mx-auto mt-4">
              <h2 className="text-center my-4 font-weight-bold">
                ¿Cómo llevamos más de 20 años aquí?
              </h2>
              <p className="text-center">
                Siempre estamos pensando en ofrecer los platos más actuales y nos encanta compartirlo con nuestros clientes
              </p>
              <p className="text-center">
                Hacemos multitud de quedadas en el bar. Noches gastronómicas, noches vegetarianas y muchas más.
              </p>
              <p className="text-center">
                Nuestos clientes habituales siempre vuelven ya que aquí el trato es cercano y profesional. Siempre queremos los mejor para ellos.
              </p>
              <hr className="my-5" />
              <Row id="categories">
                <Col md="4" className="mb-5">
                  <Col size="2" md="2" className="float-left">
                    <Fa icon="edit" className="orange-text" size="2x" />
                  </Col>
                  <Col size="10" md="8" lg="10" className="float-right">
                    <h4 className="font-weight-bold">Pedir Online</h4>
                    <p className="orange-text">
                      Pedir todas tapas caseras y 
                      los platos que tenemos en nuestra carta con sus respectivos alérgenos.
                    </p>
                    <NavLink
                      tag="button"
                      className="btn btn-sm orange lighten-2"
                      to="/pedironline"
                    >
                      Pedir Online
                    </NavLink>
                  </Col>
                </Col>
                <Col md="4" className="mb-5">
                  <Col size="2" md="2" className="float-left">
                    <Fa icon="table" className="blue-text" size="2x" />
                  </Col>
                  <Col size="10" md="8" lg="10" className="float-right">
                    <h4 className="font-weight-bold">Eventos</h4>
                    <p className="blue-text">
                      Nos encanta pasar tiempo con nuestros clientes y por 
                      eso queremos organizar eventos y quedadas
                    </p>
                    <NavLink
                      tag="button"
                      className="btn btn-sm blue lighten-2"
                      to="/eventos"
                    >
                      Ver Eventos
                    </NavLink>
                  </Col>
                </Col>
                <Col md="4" className="mb-5">
                  <Col size="2" md="2" className="float-left">
                    <Fa icon="cutlery" className="green-text" size="2x" />
                  </Col>
                  <Col size="10" md="8" lg="10" className="float-right">
                    <h4 className="font-weight-bold">Recetas y vídeos</h4>
                    <p className="green-text">
                      Ahora te explicamos paso a paso nuestros platos más populares.
                      Entra y descubre cómo los elaboramos.
                    </p>
                    <NavLink
                      tag="button"
                      className="btn btn-sm green darken-3"
                      to="/recetasyvideos"
                    >
                      Ver recetas
                    </NavLink>
                  </Col>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default HomePage;
