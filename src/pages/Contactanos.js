import React, { Component } from "react";
import {
  Jumbotron,
  Container,
  MDBCol,
  MDBInput,
  MDBRow,
  ModalFooter,
  Button,
  Modal,
  ModalHeader,
  ModalBody
} from "mdbreact";

class Contactanos extends Component {
  state = {
    modal1: false,
  };
  toggle(nr) {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }  
  render() {
    return(
    <Container>
      <br></br>
      <br></br>
      <Jumbotron>
        <h2 >Si quieres decirnos algo...</h2>
      <br></br>
        <p className="lead">
        También nos puedes llamar al <a href="tel:+34606716456">+34 606 71 64 56</a>
        </p>
        <br></br>
        <br></br>
        <hr className="my-2" />
        <h2 className="mb-5">Formulario de contacto</h2>
        <MDBRow className="my-5">
          <MDBCol md="6">
            <form>
              <div className="grey-text">
                <MDBInput
                  label="Nombre"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Asunto"
                  icon="tag"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  type="textarea"
                  rows="2"
                  label="Mensaje"
                  icon="pencil"
                />
              </div>
            <ModalFooter>
            <Button color="primary" onClick={() =>  this.toggle(1)}>
              Enviar
            </Button>          
            </ModalFooter>
            <Modal
              isOpen={this.state.modal1}
              toggle={() => this.toggle(1)}
              centered
              >
              <ModalHeader toggle={() => this.toggle(1)}>Confirmación</ModalHeader>
              <ModalBody>
                Tu mensaje ha sido enviado.
                <br></br>
                ¡Muchas gracias!
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={() => this.toggle(1) }>
                  Cerrar
                </Button>
              </ModalFooter>
            </Modal>
            </form>
          </MDBCol>
        </MDBRow>
      </Jumbotron>
    </Container>
    );
  }
}

export default Contactanos;
