
import React, { Component } from "react";
import {
  Button,
  Col,
  Row,
  Container,
  Card,
  CardBody,
  CardGroup,
  CardImage,
  CardTitle,
  CardText,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  MDBBtn,
  Input,
  Iframe
} from "mdbreact";

class Recetasyvideos extends Component {

  state = {
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
    modal7: false,
    modal8: false,
    modal9: false,
    modal10: false,
    modal11: false,
    modal12: false,
    modal13: false,
    modal14: false,
    modal15: false,
    modal16: false,
    modal17: false,
    modal18: false,
    modal19: false,
    modal20: false,
    modal21: false
  };
  toggle(nr) {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }
  render() {
    return (
      <Container>
        <h1 className="mt-5">En esta sección podrás ver cómo elaboramos nuestros platos.</h1>
        <h3 className="mt-2">¿Te atreves con alguno de ellos?</h3>
        <Container>
          <h5 className="mt-5" >Receta del mes - Solomillo a la mostaza</h5>
          <Row>
            <Col>
              <Card>
                <Iframe src="https://www.youtube.com/embed/NMq6uNKnlcg"  />
                <CardBody cascade>
                  <CardText>
                    Descubre cómo elaboramos nuestro delicioso solomillo 
                    con salsa de mostaza.
                  </CardText>
      <MDBBtn color="primary" onClick={() => this.toggle(8)}>Comentar</MDBBtn>
      <Modal isOpen={this.state.modal8} toggle={() => this.toggle(8)}>
          <ModalHeader toggle={() => this.toggle(8)}>Comentarios de la receta</ModalHeader>
          <ModalBody>
            <Container fluid className="black-white">
                <Row>[18/12/2022 19:12] Álvaro: Hoy mismo la hago</Row>
                <Row>[17/12/2022 18:20] Elena: Mi madre la hace mejor</Row>  
                <Row>[15/12/2022 14:32] María: Plato típico</Row>
                <br></br>
                <form className="mx-3 grey-text">
                <Input
                  label="Nombre"
                  icon="user"
                  group
                  type="text"
                  validate
                />
                <Input
                  type="textarea"
                  rows="2"
                  label="Mensaje"
                  icon="pencil"
                />
              </form>
            </Container>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.toggle(8)}>
              Volver
            </Button>{" "}
            <Button color="primary" onClick={() =>  this.toggle(8) & this.toggle(9)}>
          Añadir comentario
        </Button>          
        </ModalFooter>
        </Modal>
        <Modal
          isOpen={this.state.modal9}
          toggle={() => this.toggle(9)}
          centered
        >
          <ModalHeader toggle={() => this.toggle(9)}>Comentario añadido</ModalHeader>
          <ModalBody>
            Tu comentario ha sido añadido.
            <br></br>
            ¡Muchas gracias!
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.toggle(9) }>
              Cerrar
            </Button>
          </ModalFooter>
        </Modal>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <hr className="mt-5" />
          <h2 className="mt-5">Biblioteca de recetas</h2>

          <CardGroup deck className="mt-3">
            <Card>
              <CardImage
                src="https://www.quieropostre.com/wp-content/uploads/2021/10/receta-natillas-caseras-300x300.jpg"
                alt="Card image cap"
                top
                hover
                overlay="white-slight"
              />
              <CardBody>
                <CardTitle tag="h5">Natillas caseras</CardTitle>
                <CardText>
                  Sorprende a tus amigos con esta sencilla y riquísima 
                  elaboración. ¡La de toda la vida!
                </CardText>
                <Button onClick={() => this.toggle(2)} color="primary" size="md">
                  Reproducir
                </Button>
                <Modal
                      isOpen={this.state.modal2}
                      toggle={() => this.toggle(2)}
                      size="lg"
                    >
                      <ModalHeader toggle={() => this.toggle(2)}>Receta de Natilla</ModalHeader>
                      <ModalBody>
                      <Iframe src="https://www.youtube.com/embed/oauyX8Wec_U"  />
                      </ModalBody>
                      <ModalFooter>
                        <Button color="secondary" onClick={() => this.toggle(2)}>
                          Cerrar
                        </Button>
                      </ModalFooter>
                    </Modal>
      <MDBBtn color="primary" size="md" onClick={() => this.toggle(10)}>Comentar</MDBBtn>
      <Modal isOpen={this.state.modal10} toggle={() => this.toggle(10)}>
          <ModalHeader toggle={() => this.toggle(10)}>Comentarios de la receta</ModalHeader>
          <ModalBody>
            <Container fluid className="black-white">
                <Row>[18/12/2022 19:12] Álvaro: Hoy mismo la hago</Row>
                <Row>[17/12/2022 18:20] Elena: Mi madre la hace mejor</Row>  
                <Row>[15/12/2022 14:32] María: Plato típico</Row>
                <br></br>
                <form className="mx-3 grey-text">
                <Input
                  label="Nombre"
                  icon="user"
                  group
                  type="text"
                  validate
                />
                <Input
                  type="textarea"
                  rows="2"
                  label="Mensaje"
                  icon="pencil"
                />
              </form>
            </Container>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.toggle(10)}>
              Volver
            </Button>{" "}
            <Button color="primary" onClick={() =>  this.toggle(10) & this.toggle(11)}>
          Añadir comentario
        </Button>          
        </ModalFooter>
        </Modal>
        <Modal
          isOpen={this.state.modal11}
          toggle={() => this.toggle(11)}
          centered
        >
          <ModalHeader toggle={() => this.toggle(11)}>Comentario añadido</ModalHeader>
          <ModalBody>
            Tu comentario ha sido añadido.
            <br></br>
            ¡Muchas gracias!
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.toggle(11) }>
              Cerrar
            </Button>
          </ModalFooter>
        </Modal>
              </CardBody>
            </Card>

            <Card>
              <CardImage
                src="data:image/jpeg;base64,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"
                alt="Card image cap"
                top
                hover
                overlay="white-slight"
              />
              <CardBody>
                <CardTitle tag="h5">Salmorejo Cordobés</CardTitle>
                <CardText>
                  ¿A quién le apetece un salmorejo fesquito?
                  Mira cómo lo hacemos en Restaurante Habanita...
                </CardText>
                <Button onClick={() => this.toggle(3)} color="primary" size="md">
                  Reproducir
                </Button>
                <Modal
                      isOpen={this.state.modal3}
                      toggle={() => this.toggle(3)}
                      size="lg"
                    >
                      <ModalHeader toggle={() => this.toggle(3)}>Receta de salmorejo</ModalHeader>
                      <ModalBody>
                      <Iframe src="https://www.youtube.com/embed/_mb2N9apN2A"  />
                      </ModalBody>
                      <ModalFooter>
                        <Button color="primary" onClick={() => this.toggle(3)}>
                          Cerrar
                        </Button>
                      </ModalFooter>
                    </Modal>
                    <MDBBtn color="primary" size="md" onClick={() => this.toggle(12)}>Comentar</MDBBtn>
      <Modal isOpen={this.state.modal12} toggle={() => this.toggle(12)}>
          <ModalHeader toggle={() => this.toggle(12)}>Comentarios de la receta</ModalHeader>
          <ModalBody>
            <Container fluid className="black-white">
                <Row>[18/12/2022 19:12] Álvaro: Hoy mismo la hago</Row>
                <Row>[17/12/2022 18:20] Elena: Mi madre la hace mejor</Row>  
                <Row>[15/12/2022 14:32] María: Plato típico</Row>
                <br></br>
                <form className="mx-3 grey-text">
                <Input
                  label="Nombre"
                  icon="user"
                  group
                  type="text"
                  validate
                />
                <Input
                  type="textarea"
                  rows="2"
                  label="Mensaje"
                  icon="pencil"
                />
              </form>
            </Container>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.toggle(12)}>
              Volver
            </Button>{" "}
            <Button color="primary" onClick={() =>  this.toggle(12) & this.toggle(13)}>
          Añadir comentario
        </Button>          
        </ModalFooter>
        </Modal>
        <Modal
          isOpen={this.state.modal13}
          toggle={() => this.toggle(13)}
          centered
        >
          <ModalHeader toggle={() => this.toggle(13)}>Comentario añadido</ModalHeader>
          <ModalBody>
            Tu comentario ha sido añadido.
            <br></br>
            ¡Muchas gracias!
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.toggle(13) }>
              Cerrar
            </Button>
          </ModalFooter>
        </Modal>
              </CardBody>
            </Card>

            <Card>
              <CardImage
                src="http://loribarber.com/wp-content/uploads/2010/10/IMGP2624-1024x7681-600x400.jpg"
                alt="Card image cap"
                top
                hover
                overlay="white-slight"
              />
              <CardBody>
                <CardTitle tag="h5">Tortilla de patatas al Whisky</CardTitle>
                <CardText>
                  Si te quedaba esta tortilla por probar ahora la puedes
                  hacer en casa.
                </CardText>
                <Button onClick={() => this.toggle(4)} color="primary" size="md">
                  Reproducir
                </Button>
                <Modal
                      isOpen={this.state.modal4}
                      toggle={() => this.toggle(4)}
                      size="lg"
                    >
                      <ModalHeader toggle={() => this.toggle(4)}>Receta de tortilla de patatas</ModalHeader>
                      <ModalBody>
                      <Iframe src="https://www.youtube.com/embed/n7elkQ30JxU"  />
                      </ModalBody>
                      <ModalFooter>
                        <Button color="secondary" onClick={() => this.toggle(4)}>
                          Cerrar
                        </Button>
                      </ModalFooter>
                    </Modal>
                    <MDBBtn color="primary" size="md" onClick={() => this.toggle(14)}>Comentar</MDBBtn>
      <Modal isOpen={this.state.modal14} toggle={() => this.toggle(14)}>
          <ModalHeader toggle={() => this.toggle(14)}>Comentarios de la receta</ModalHeader>
          <ModalBody>
            <Container fluid className="black-white">
                <Row>[18/12/2022 19:12] Álvaro: Hoy mismo la hago</Row>
                <Row>[17/12/2022 18:20] Elena: Mi madre la hace mejor</Row>  
                <Row>[15/12/2022 14:32] María: Plato típico</Row>
                <br></br>
                <form className="mx-3 grey-text">
                <Input
                  label="Nombre"
                  icon="user"
                  group
                  type="text"
                  validate
                />
                <Input
                  type="textarea"
                  rows="2"
                  label="Mensaje"
                  icon="pencil"
                />
              </form>
            </Container>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.toggle(14)}>
              Volver
            </Button>{" "}
            <Button color="primary" onClick={() =>  this.toggle(14) & this.toggle(15)}>
          Añadir comentario
        </Button>          
        </ModalFooter>
        </Modal>
        <Modal
          isOpen={this.state.modal15}
          toggle={() => this.toggle(15)}
          centered
        >
          <ModalHeader toggle={() => this.toggle(15)}>Comentario añadido</ModalHeader>
          <ModalBody>
            Tu comentario ha sido añadido.
            <br></br>
            ¡Muchas gracias!
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.toggle(15) }>
              Cerrar
            </Button>
          </ModalFooter>
        </Modal>
              </CardBody>
            </Card>
          </CardGroup>

          <CardGroup deck className="mt-3">
            <Card>
              <CardImage
                src="https://altacocinaencasa.com/wp-content/uploads/presentacion-morcillo-a-baja-temperatura-con-salsa-bordalesa-600x400.jpg"
                alt="Card image cap"
                top
                hover
                overlay="white-slight"
              />
              <CardBody>
                <CardTitle tag="h5">Carrillá ibérica</CardTitle>
                <CardText>
                  En Restaurante Habanita te traemos los sabores del campo.
                  Mira cómo lo hacemos y disfruta.
                </CardText>
                <Button onClick={() => this.toggle(5)} color="primary" size="md">
                  Reproducir
                </Button>
                <Modal
                      isOpen={this.state.modal5}
                      toggle={() => this.toggle(5)}
                      size="lg"
                    >
                      <ModalHeader toggle={() => this.toggle(5)}>Receta de carrillá</ModalHeader>
                      <ModalBody>
                      <Iframe src="https://www.youtube.com/embed/5MB7NBOTCO0"  />
                      </ModalBody>
                      <ModalFooter>
                        <Button color="secondary" onClick={() => this.toggle(5)}>
                          Cerrar
                        </Button>
                      </ModalFooter>
                    </Modal>
                    <MDBBtn color="primary" size="md" onClick={() => this.toggle(16)}>Comentar</MDBBtn>
      <Modal isOpen={this.state.modal16} toggle={() => this.toggle(16)}>
          <ModalHeader toggle={() => this.toggle(16)}>Comentarios de la receta</ModalHeader>
          <ModalBody>
            <Container fluid className="black-white">
                <Row>[18/12/2022 19:12] Álvaro: Hoy mismo la hago</Row>
                <Row>[17/12/2022 18:20] Elena: Mi madre la hace mejor</Row>  
                <Row>[15/12/2022 14:32] María: Plato típico</Row>
                <br></br>
                <form className="mx-3 grey-text">
                <Input
                  label="Nombre"
                  icon="user"
                  group
                  type="text"
                  validate
                />
                <Input
                  type="textarea"
                  rows="2"
                  label="Mensaje"
                  icon="pencil"
                />
              </form>
            </Container>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.toggle(16)}>
              Volver
            </Button>{" "}
            <Button color="primary" onClick={() =>  this.toggle(16) & this.toggle(17)}>
          Añadir comentario
        </Button>          
        </ModalFooter>
        </Modal>
        <Modal
          isOpen={this.state.modal17}
          toggle={() => this.toggle(17)}
          centered
        >
          <ModalHeader toggle={() => this.toggle(17)}>Comentario añadido</ModalHeader>
          <ModalBody>
            Tu comentario ha sido añadido.
            <br></br>
            ¡Muchas gracias!
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.toggle(17) }>
              Cerrar
            </Button>
          </ModalFooter>
        </Modal>
              </CardBody>
            </Card>

            <Card>
              <CardImage
                src="http://www.cosasdecome.es/wp-content/uploads/2012/09/bocadillo-de-pring%C3%A1.jpg"
                alt="Card image cap"
                top
                hover
                overlay="white-slight"
              />
              <CardBody>
                <CardTitle tag="h5">Pringá en montadito</CardTitle>
                <CardText>
                  La pringá de toda la vida metida en pan.
                  ¿Seguro que te puedes resistir?
                </CardText>
                <Button onClick={() => this.toggle(6)} color="primary" size="md">
                  Reproducir
                </Button>
                <Modal
                      isOpen={this.state.modal6}
                      toggle={() => this.toggle(6)}
                      size="lg"
                    >
                      <ModalHeader toggle={() => this.toggle(6)}>Receta de pringá</ModalHeader>
                      <ModalBody>
                      <Iframe src="https://www.youtube.com/embed/8aJBCLLsPD4"  />
                      </ModalBody>
                      <ModalFooter>
                        <Button color="secondary" onClick={() => this.toggle(6)}>
                          Cerrar
                        </Button>
                      </ModalFooter>
                    </Modal>
                    <MDBBtn color="primary" size="md" onClick={() => this.toggle(18)}>Comentar</MDBBtn>
      <Modal isOpen={this.state.modal18} toggle={() => this.toggle(18)}>
          <ModalHeader toggle={() => this.toggle(18)}>Comentarios de la receta</ModalHeader>
          <ModalBody>
            <Container fluid className="black-white">
                <Row>[18/12/2022 19:12] Álvaro: Hoy mismo la hago</Row>
                <Row>[17/12/2022 18:20] Elena: Mi madre la hace mejor</Row>  
                <Row>[15/12/2022 14:32] María: Plato típico</Row>
                <br></br>
                <form className="mx-3 grey-text">
                <Input
                  label="Nombre"
                  icon="user"
                  group
                  type="text"
                  validate
                />
                <Input
                  type="textarea"
                  rows="2"
                  label="Mensaje"
                  icon="pencil"
                />
              </form>
            </Container>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.toggle(18)}>
              Volver
            </Button>{" "}
            <Button color="primary" onClick={() =>  this.toggle(18) & this.toggle(19)}>
          Añadir comentario
        </Button>          
        </ModalFooter>
        </Modal>
        <Modal
          isOpen={this.state.modal19}
          toggle={() => this.toggle(19)}
          centered
        >
          <ModalHeader toggle={() => this.toggle(19)}>Comentario añadido</ModalHeader>
          <ModalBody>
            Tu comentario ha sido añadido.
            <br></br>
            ¡Muchas gracias!
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.toggle(19) }>
              Cerrar
            </Button>
          </ModalFooter>
        </Modal>
              </CardBody>
            </Card>

            <Card>
              <CardImage
                src="data:image/jpeg;base64,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"
                alt="Card image cap"
                top
                hover
                overlay="white-slight"
              />
              <CardBody>
                <CardTitle tag="h5">Arroz con leche</CardTitle>
                <CardText>
                  Hoy no te quedas sin postre antes de dormir.
                  ¿Te lo llevamos a casa o lo haces tú?
                </CardText>
                <Button onClick={() => this.toggle(7)} color="primary" size="md">
                  Reproducir
                </Button>
                <Modal
                      isOpen={this.state.modal7}
                      toggle={() => this.toggle(7)}
                      size="lg"
                    >
                      <ModalHeader toggle={() => this.toggle(7)}>Receta de Arroz con leche</ModalHeader>
                      <ModalBody>
                      <Iframe src="https://www.youtube.com/embed/xQsPiAf-t1Q"  />
                      </ModalBody>
                      <ModalFooter>
                        <Button color="secondary" onClick={() => this.toggle(7)}>
                          Cerrar
                        </Button>
                      </ModalFooter>
                    </Modal>
                <MDBBtn color="primary" size="md" onClick={() => this.toggle(20)}>Comentar</MDBBtn>
      <Modal isOpen={this.state.modal20} toggle={() => this.toggle(20)}>
          <ModalHeader toggle={() => this.toggle(20)}>Comentarios de la receta</ModalHeader>
          <ModalBody>
            <Container fluid className="black-white">
                <Row>[18/12/2022 19:12] Álvaro: Hoy mismo la hago</Row>
                <Row>[17/12/2022 18:20] Elena: Mi madre la hace mejor</Row>  
                <Row>[15/12/2022 14:32] María: Plato típico</Row>
                <br></br>
                <form className="mx-3 grey-text">
                <Input
                  label="Nombre"
                  icon="user"
                  group
                  type="text"
                  validate
                />
                <Input
                  type="textarea"
                  rows="2"
                  label="Mensaje"
                  icon="pencil"
                />
              </form>
            </Container>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.toggle(20)}>
              Volver
            </Button>{" "}
            <Button color="primary" onClick={() =>  this.toggle(20) & this.toggle(21)}>
          Añadir comentario
        </Button>          
        </ModalFooter>
        </Modal>
        <Modal
          isOpen={this.state.modal21}
          toggle={() => this.toggle(21)}
          centered
        >
          <ModalHeader toggle={() => this.toggle(21)}>Comentario añadido</ModalHeader>
          <ModalBody>
            Tu comentario ha sido añadido.
            <br></br>
            ¡Muchas gracias!
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.toggle(21) }>
              Cerrar
            </Button>
          </ModalFooter>
        </Modal>
              </CardBody>
            </Card>
          </CardGroup>
        </Container>
      </Container>
    );
  }
}

export default Recetasyvideos;
