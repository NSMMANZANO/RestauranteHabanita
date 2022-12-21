import React, { Component } from "react";
import {
  Container,
  MDBCard, 
  MDBCardBody, 
  MDBCardTitle, 
  MDBCardText, 
  MDBCardHeader, 
  MDBRow,Pagination, 
  PageItem,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  MDBBtn,
  Row,
  Input, 
  PageLink} from "mdbreact";

class Eventos extends Component {
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
        <h2 className="mt-5">Mira lo que tenemos preparado este mes...</h2>
        <Container>
        <MDBRow center>
          <MDBCard border="primary" className="m-3" style={{ maxWidth: "18rem" }}>
            <MDBCardHeader>Sábado 01 Dic 2022</MDBCardHeader>
            <MDBCardBody className="text-primary">
              <MDBCardTitle tag="h5">Degustación</MDBCardTitle>
              <MDBCardText>
                De 13.00 a 14.00 de la tarde tenemos una degustación de los productos de nuestro
                proveedor favorito de quesos. ¿Sabes quienes son?
            </MDBCardText>
          <MDBBtn color="primary" size="md" onClick={() => this.toggle(1)}>Quiero ir</MDBBtn>
          <Modal isOpen={this.state.modal1} toggle={() => this.toggle(1)}>
          <ModalHeader toggle={() => this.toggle(1)}>Confirma tu asistencia</ModalHeader>
          <ModalBody>
            <Container fluid className="black-white">
                <Row>Número de asistentes: 15</Row>
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
                  label="¿Cuántos sois?"
                  icon="user"
                  group
                  type="text"
                  validate
                />
                <Input
                  type="email"
                  rows="2"
                  label="Email"
                  icon="envelope"
                />
              </form>
            </Container>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.toggle(1)}>
              Volver
            </Button>{" "}
            <Button color="primary" onClick={() =>  this.toggle(1) & this.toggle(2)}>
          Enviar
        </Button>          
        </ModalFooter>
        </Modal>
        <Modal
          isOpen={this.state.modal2}
          toggle={() => this.toggle(2)}
          centered
        >
          <ModalHeader toggle={() => this.toggle(2)}>Cofirmación</ModalHeader>
          <ModalBody>
            ¡Contamos contigo!
            <br></br>
            Nos vemos pronto.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.toggle(2) }>
              Cerrar
            </Button>
          </ModalFooter>
        </Modal>
            </MDBCardBody>
          </MDBCard>

          <MDBCard border="secondary" className="m-3" style={{ maxWidth: "18rem" }}>
            <MDBCardHeader>Domingo 02 Dic 2022</MDBCardHeader>
            <MDBCardBody className="text-secondary">
              <MDBCardTitle tag="h5">Música</MDBCardTitle>
              <MDBCardText>
                A partir de las 21.00  Vicky García estará al piano y nos hará más amena la noche.
                ¡Cena de lujo y escucha buena música!
            </MDBCardText>
            <MDBBtn color="primary" size="md" onClick={() => this.toggle(3)}>Quiero ir</MDBBtn>
          <Modal isOpen={this.state.modal3} toggle={() => this.toggle(3)}>
          <ModalHeader toggle={() => this.toggle(3)}>Confirma tu asistencia</ModalHeader>
          <ModalBody>
            <Container fluid className="black-white">
                <Row>Número de asistentes: 15</Row>
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
                  label="¿Cuántos sois?"
                  icon="user"
                  group
                  type="text"
                  validate
                />
                <Input
                  type="email"
                  rows="2"
                  label="Email"
                  icon="envelope"
                />
              </form>
            </Container>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.toggle(3)}>
              Volver
            </Button>{" "}
            <Button color="primary" onClick={() =>  this.toggle(3) & this.toggle(4)}>
          Enviar
        </Button>          
        </ModalFooter>
        </Modal>
        <Modal
          isOpen={this.state.modal4}
          toggle={() => this.toggle(4)}
          centered
        >
          <ModalHeader toggle={() => this.toggle(4)}>Cofirmación</ModalHeader>
          <ModalBody>
            ¡Contamos contigo!
            <br></br>
            Nos vemos pronto.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.toggle(4) }>
              Cerrar
            </Button>
          </ModalFooter>
        </Modal>
            </MDBCardBody>
          </MDBCard>

          <MDBCard border="success" className="m-3" style={{ maxWidth: "18rem" }}>
            <MDBCardHeader>Miércoles 12 Dic 2022</MDBCardHeader>
            <MDBCardBody className="text-success">
              <MDBCardTitle tag="h5">Deporte</MDBCardTitle>
              <MDBCardText>
                Noche de fútbol. Sevilla y Betis se la juegan en la Europa League.
                Ven a disfrutar del partido en buena compañía. ¿Te lo vas a perder?
            </MDBCardText>
            <MDBBtn color="primary" size="md" onClick={() => this.toggle(5)}>Quiero ir</MDBBtn>
          <Modal isOpen={this.state.modal5} toggle={() => this.toggle(5)}>
          <ModalHeader toggle={() => this.toggle(5)}>Confirma tu asistencia</ModalHeader>
          <ModalBody>
            <Container fluid className="black-white">
                <Row>Número de asistentes: 15</Row>
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
                  label="¿Cuántos sois?"
                  icon="user"
                  group
                  type="text"
                  validate
                />
                <Input
                  type="email"
                  rows="2"
                  label="Email"
                  icon="envelope"
                />
              </form>
            </Container>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.toggle(5)}>
              Volver
            </Button>{" "}
            <Button color="primary" onClick={() =>  this.toggle(5) & this.toggle(6)}>
          Enviar
        </Button>          
        </ModalFooter>
        </Modal>
        <Modal
          isOpen={this.state.modal6}
          toggle={() => this.toggle(6)}
          centered
        >
          <ModalHeader toggle={() => this.toggle(6)}>Cofirmación</ModalHeader>
          <ModalBody>
            ¡Contamos contigo!
            <br></br>
            Nos vemos pronto.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.toggle(6) }>
              Cerrar
            </Button>
          </ModalFooter>
        </Modal>
            </MDBCardBody>
          </MDBCard>

          <MDBCard border="danger" className="m-3" style={{ maxWidth: "18rem" }}>
            <MDBCardHeader>Sábado 22 Dic 2022</MDBCardHeader>
            <MDBCardBody className="text-danger">
              <MDBCardTitle tag="h5">Navidad 2022</MDBCardTitle>
              <MDBCardText>
                ¡El cartero real estará en Restaurante Habanita! 
                Los más peques podrán entregar sus cartas a partir de las 13.00. 
            </MDBCardText>
            <MDBBtn color="primary" size="md" onClick={() => this.toggle(7)}>Quiero ir</MDBBtn>
          <Modal isOpen={this.state.modal7} toggle={() => this.toggle(7)}>
          <ModalHeader toggle={() => this.toggle(7)}>Confirma tu asistencia</ModalHeader>
          <ModalBody>
            <Container fluid className="black-white">
                <Row>Número de asistentes: 15</Row>
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
                  label="¿Cuántos sois?"
                  icon="user"
                  group
                  type="text"
                  validate
                />
                <Input
                  type="email"
                  rows="2"
                  label="Email"
                  icon="envelope"
                />
              </form>
            </Container>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.toggle(7)}>
              Volver
            </Button>{" "}
            <Button color="primary" onClick={() =>  this.toggle(7) & this.toggle(8)}>
          Enviar
        </Button>          
        </ModalFooter>
        </Modal>
        <Modal
          isOpen={this.state.modal8}
          toggle={() => this.toggle(8)}
          centered
        >
          <ModalHeader toggle={() => this.toggle(8)}>Cofirmación</ModalHeader>
          <ModalBody>
            ¡Contamos contigo!
            <br></br>
            Nos vemos pronto.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.toggle(8) }>
              Cerrar
            </Button>
          </ModalFooter>
        </Modal>
            </MDBCardBody>
          </MDBCard>

          <MDBCard border="warning" className="m-3" style={{ maxWidth: "18rem" }}>
            <MDBCardHeader>Domingo 30 Dic 2022</MDBCardHeader>
            <MDBCardBody className="text-warning">
              <MDBCardTitle tag="h5">¡Adiós 2022!</MDBCardTitle>
              <MDBCardText>
                Ven a cenar y os invitamos a una copa de champagne con la mejor música.
                A partir de las 22.30.
            </MDBCardText>
            <MDBBtn color="primary" size="md" onClick={() => this.toggle(9)}>Quiero ir</MDBBtn>
          <Modal isOpen={this.state.modal9} toggle={() => this.toggle(9)}>
          <ModalHeader toggle={() => this.toggle(9)}>Confirma tu asistencia</ModalHeader>
          <ModalBody>
            <Container fluid className="black-white">
                <Row>Número de asistentes: 15</Row>
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
                  label="¿Cuántos sois?"
                  icon="user"
                  group
                  type="text"
                  validate
                />
                <Input
                  type="email"
                  rows="2"
                  label="Email"
                  icon="envelope"
                />
              </form>
            </Container>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.toggle(9)}>
              Volver
            </Button>{" "}
            <Button color="primary" onClick={() =>  this.toggle(9) & this.toggle(10)}>
          Enviar
        </Button>          
        </ModalFooter>
        </Modal>
        <Modal
          isOpen={this.state.modal10}
          toggle={() => this.toggle(10)}
          centered
        >
          <ModalHeader toggle={() => this.toggle(10)}>Cofirmación</ModalHeader>
          <ModalBody>
            ¡Contamos contigo!
            <br></br>
            Nos vemos pronto.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.toggle(10) }>
              Cerrar
            </Button>
          </ModalFooter>
        </Modal>
            </MDBCardBody>
          </MDBCard>
        </MDBRow>
        </Container>
      
      <Container>
      <div className="container">
        <div className="row mt-5">
          <div className="col" style={{ maxWidth: "23rem"} }>
            <Pagination>
              <PageItem disabled>
                <PageLink aria-label="Previous">
                ¿Quieres más? Sigue... <span aria="true">&laquo;</span>
                </PageLink>
              </PageItem>
              <PageItem active>
                <PageLink>
                  1 <span className="sr-only">(current)</span>
                </PageLink>
              </PageItem>
              <PageItem>
                <PageLink>2</PageLink>
              </PageItem>
              <PageItem>
                <PageLink>3</PageLink>
              </PageItem>
            </Pagination>
          </div>
        </div>
      </div>
      </Container>
      </Container>
    );
  }
}

export default Eventos;
