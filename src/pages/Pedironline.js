import React, { Component } from "react";
import {
  Container,
  Button,
  Row,
  Col,
  MDBBtnGroup,
  Jumbotron,
  MDBBtn,
  Popover, 
  PopoverBody, 
  PopoverHeader,  
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Iframe
} from "mdbreact";

class Pedironline extends Component {

  state = {
    modal3: false,
    modal11: false,
    modal14: false,
    modal16: false,
 
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

      <Jumbotron className="mt-5 text-center">
        <h1 className="display-3">¡Haz tu Pedido Online!</h1>
      <br></br>

        <p className="lead">
        Ya puedes hacer tu pedido online con nosotros con un pedido superior a 12€.

        </p>

        <hr className="my-2" />
      <br></br>

        <p>
        Tendrás tu comida lista en la puerta de casa en 30 minutos*

        </p>
        
      </Jumbotron>

      <Container>
      <hr className="my-5" />
      <h3>Entrantes</h3>

        <div style={{ display: "flex" , width: "responsive" }} className="m-1 p-1">
      <Popover
          component="button"
          placement="left"
          popoverBody="Aliños variados"
          className="btn btn-default"
        >
          <PopoverHeader>Alérgenos  <MDBBtnGroup size="sm">
           
           <MDBBtn color = "orange" onClick={() => this.toggle(11)}> Pedir</MDBBtn>
         </MDBBtnGroup></PopoverHeader>
          <PopoverBody>
      <Iframe src="http://130.240.5.36/img/ensalada-variada-con.jpg" />

      Los alérgenos presentes en este plato son: 
      Pescado, apio
          </PopoverBody>
        </Popover>
        <Popover
          component="button"
          placement="top"
          popoverBody="Ensalada de Pollo"
          className="btn btn-default"
        >
          <PopoverHeader>Alérgenos  <MDBBtnGroup size="sm">
           
           <MDBBtn color = "orange" onClick={() => this.toggle(11)}> Pedir</MDBBtn>
         </MDBBtnGroup></PopoverHeader>
          <PopoverBody>
          <Iframe src="http://130.240.5.36/img/ensalada-de-pollo.jpg" />

          Los alérgenos presentes en este plato son: 
            Gluten, leche, huevo.
          </PopoverBody>
        </Popover>
        <Popover
          component="button"
          placement="top"
          popoverBody="Ensalada mixta"
          className="btn btn-default"
        >
          <PopoverHeader>Alérgenos  <MDBBtnGroup size="sm">
           
           <MDBBtn color = "orange" onClick={() => this.toggle(11)}> Pedir</MDBBtn>
         </MDBBtnGroup></PopoverHeader>
          <PopoverBody>
          <Iframe src="http://130.240.5.36/img/ensaladamixta.jpg" />

          Los alérgenos presentes en este plato son:  
          Sin alégrenos.
          </PopoverBody>
        </Popover>
        <Popover
          component="button"
          placement="top"
          popoverBody="Carne Mechada"
          className="btn btn-default"
        >
          <PopoverHeader>Alérgenos  <MDBBtnGroup size="sm">
           
           <MDBBtn color = "orange" onClick={() => this.toggle(11)}> Pedir</MDBBtn>
         </MDBBtnGroup></PopoverHeader>
          <PopoverBody>
          <Iframe src="http://130.240.5.36/img/carnemechada.jpg" />

          Los alérgenos presentes en este plato son:  
          Sin alégrenos.
          </PopoverBody>
        </Popover>
        <Popover
          component="button"
          placement="right"
          popoverBody="Ensaladilla Rusa"
          className="btn btn-default"
        >
          <PopoverHeader>Alérgenos  <MDBBtnGroup size="sm">
           
           <MDBBtn color = "orange" onClick={() => this.toggle(11)}> Pedir</MDBBtn>
         </MDBBtnGroup></PopoverHeader>
          <PopoverBody>
          <Iframe src="http://130.240.5.36/img/ensaladillarusa.jpg" />

          Los alérgenos presentes en este plato son: 
          Leche, pescado, Huevo, trazas de apio
          </PopoverBody>
        </Popover>
</div>

 <div style={{ display: "flex" }} className="m-1 p-1">
      <Popover
          component="button"
          placement="left"
          popoverBody="Queso Manchego"
          className="btn btn-default"
        >
          <PopoverHeader>Alérgenos  <MDBBtnGroup size="sm">
           
           <MDBBtn color = "orange" onClick={() => this.toggle(11)}> Pedir</MDBBtn>
         </MDBBtnGroup></PopoverHeader>
          <PopoverBody>
          <Iframe src="http://130.240.5.36/img/queso.jpeg" />

            Aquí se redactará los alérgenos relacionados con este plato.
          </PopoverBody>
        </Popover>
        <Popover
          component="button"
          placement="top"
          popoverBody="Salmorejo"
          className="btn btn-default"
        >
          <PopoverHeader>Alérgenos  <MDBBtnGroup size="sm">
           
           <MDBBtn color = "orange" onClick={() => this.toggle(11)}> Pedir</MDBBtn>
         </MDBBtnGroup></PopoverHeader>
          <PopoverBody>
          <Iframe src="http://130.240.5.36/img/salmorejo.jpeg" />

            Aquí se redactará los alérgenos relacionados con este plato.
          </PopoverBody>
        </Popover>
        <Popover
          component="button"
          placement="top"
          popoverBody="Tomare Aliñado"
          className="btn btn-default"
        >
          <PopoverHeader>Alérgenos  <MDBBtnGroup size="sm">
           
           <MDBBtn color = "orange" onClick={() => this.toggle(11)}> Pedir</MDBBtn>
         </MDBBtnGroup></PopoverHeader>
          <PopoverBody>
          <Iframe src="http://130.240.5.36/img/tomate.jpeg" />

            Aquí se redactará los alérgenos relacionados con este plato.
          </PopoverBody>
        </Popover>
        <Popover
          component="button"
          placement="top"
          popoverBody="Tomate Aliñado y atún"
          className="btn btn-default"
        >
          <PopoverHeader>Alérgenos  <MDBBtnGroup size="sm">
           
           <MDBBtn color = "orange" onClick={() => this.toggle(11)}> Pedir</MDBBtn>
         </MDBBtnGroup></PopoverHeader>
          <PopoverBody>
          <Iframe src="http://130.240.5.36/img/tomate_atun.jpg" />

            Aquí se redactará los alérgenos relacionados con este plato.
          </PopoverBody>
        </Popover>
        <Popover
          component="button"
          placement="right"
          popoverBody="Queso de Cabra"
          className="btn btn-default"
        >
          <PopoverHeader>Alérgenos  <MDBBtnGroup size="sm">
           
           <MDBBtn color = "orange" onClick={() => this.toggle(11)}> Pedir</MDBBtn>
         </MDBBtnGroup></PopoverHeader>
          <PopoverBody>
          <Iframe src="http://130.240.5.36/img/queso_cabra.jpg" />

            Aquí se redactará los alérgenos relacionados con este plato.
          </PopoverBody>
        </Popover>
</div>
        <hr className="my-5" />

        <h3>Tapas</h3>
        <div style={{ display: "flex" }} className="m-1 p-1">
      <Popover
          component="button"
          placement="left"
          popoverBody="Carrillada Ibérica"
          className="btn btn-default"
        >
          <PopoverHeader>Alérgenos  <MDBBtnGroup size="sm">
           
           <MDBBtn color = "orange" onClick={() => this.toggle(11)}> Pedir</MDBBtn>
         </MDBBtnGroup></PopoverHeader>
          <PopoverBody>
            Aquí se redactará los alérgenos relacionados con este plato.
          </PopoverBody>
        </Popover>
        <Popover
          component="button"
          placement="top"
          popoverBody="Gambas al Ajillo"
          className="btn btn-default"
        >
          <PopoverHeader>Alérgenos  <MDBBtnGroup size="sm">
           
           <MDBBtn color = "orange" onClick={() => this.toggle(11)}> Pedir</MDBBtn>
         </MDBBtnGroup></PopoverHeader>
          <PopoverBody>
            Aquí se redactará los alérgenos relacionados con este plato.
          </PopoverBody>
        </Popover>
        <Popover
          component="button"
          placement="top"
          popoverBody="Morcilla de Burgos"
          className="btn btn-default"
        >
          <PopoverHeader>Alérgenos  <MDBBtnGroup size="sm">
           
           <MDBBtn color = "orange" onClick={() => this.toggle(11)}> Pedir</MDBBtn>
         </MDBBtnGroup></PopoverHeader>
          <PopoverBody>
            Aquí se redactará los alérgenos relacionados con este plato.
          </PopoverBody>
        </Popover>
        <Popover
          component="button"
          placement="top"
          popoverBody="Patatas dos salsas"
          className="btn btn-default"
        >
          <PopoverHeader>Alérgenos  <MDBBtnGroup size="sm">
           
           <MDBBtn color = "orange" onClick={() => this.toggle(11)}> Pedir</MDBBtn>
         </MDBBtnGroup></PopoverHeader>
          <PopoverBody>
            Aquí se redactará los alérgenos relacionados con este plato.
          </PopoverBody>
        </Popover>
        <Popover
          component="button"
          placement="right"
          popoverBody="Patatas Bravas"
          className="btn btn-default"
        >
          <PopoverHeader>Alérgenos  <MDBBtnGroup size="sm">
           
           <MDBBtn color = "orange" onClick={() => this.toggle(11)}> Pedir</MDBBtn>
         </MDBBtnGroup></PopoverHeader>
          <PopoverBody>
            Aquí se redactará los alérgenos relacionados con este plato.
          </PopoverBody>
        </Popover>
</div>

 <div style={{ display: "flex" }} className="m-1 p-1">
      <Popover
          component="button"
          placement="left"
          popoverBody="Tortilla de Patatas"
          className="btn btn-default"
        >
          <PopoverHeader>Alérgenos  <MDBBtnGroup size="sm">
           
           <MDBBtn color = "orange" onClick={() => this.toggle(11)}> Pedir</MDBBtn>
         </MDBBtnGroup></PopoverHeader>
          <PopoverBody>
            Aquí se redactará los alérgenos relacionados con este plato.
          </PopoverBody>
        </Popover>
        <Popover
          component="button"
          placement="top"
          popoverBody="Solomillo Whisky"
          className="btn btn-default"
        >
          <PopoverHeader>Alérgenos  <MDBBtnGroup size="sm">
           
           <MDBBtn color = "orange" onClick={() => this.toggle(11)}> Pedir</MDBBtn>
         </MDBBtnGroup></PopoverHeader>
          <PopoverBody>
            Aquí se redactará los alérgenos relacionados con este plato.
          </PopoverBody>
        </Popover>
        <Popover
          component="button"
          placement="top"
          popoverBody="Solomillo Mostaza"
          className="btn btn-default"
        >
          <PopoverHeader>Alérgenos  <MDBBtnGroup size="sm">
           
           <MDBBtn color = "orange" onClick={() => this.toggle(11)}> Pedir</MDBBtn>
         </MDBBtnGroup></PopoverHeader>
          <PopoverBody>
            Aquí se redactará los alérgenos relacionados con este plato.
          </PopoverBody>
        </Popover>
        <Popover
          component="button"
          placement="top"
          popoverBody="Queso Provoleta"
          className="btn btn-default"
        >
          <PopoverHeader>Alérgenos  <MDBBtnGroup size="sm">
           
           <MDBBtn color = "orange" onClick={() => this.toggle(11)}> Pedir</MDBBtn>
         </MDBBtnGroup></PopoverHeader>
          <PopoverBody>
            Aquí se redactará los alérgenos relacionados con este plato.
          </PopoverBody>
        </Popover>
        <Popover
          component="button"
          placement="right"
          popoverBody="Carne y Tomate"
          className="btn btn-default"
        >
          <PopoverHeader>Alérgenos  <MDBBtnGroup size="sm">
           
           <MDBBtn color = "orange" onClick={() => this.toggle(11)}> Pedir</MDBBtn>
         </MDBBtnGroup></PopoverHeader>
          <PopoverBody>
            Aquí se redactará los alérgenos relacionados con este plato.
          </PopoverBody>
        </Popover>
</div>

        <hr className="my-5" />

      <h3>Montaditos</h3>

       <div style={{ display: "flex"  }} className="m-1 p-1">
      <Popover
          component="button"
          placement="left"
          popoverBody="Serrano Deluxe"
          className="btn btn-default"
        >
          <PopoverHeader>Alérgenos  <MDBBtnGroup size="sm">
           
           <MDBBtn color = "orange" onClick={() => this.toggle(11)}> Pedir</MDBBtn>
         </MDBBtnGroup></PopoverHeader>
          <PopoverBody>
            Aquí se redactará los alérgenos relacionados con este plato.
          </PopoverBody>
        </Popover>
        <Popover
          component="button"
          placement="top"
          popoverBody="Serranito de Pollo"
          className="btn btn-default"
        >
          <PopoverHeader>Alérgenos  <MDBBtnGroup size="sm">
           
           <MDBBtn color = "orange" onClick={() => this.toggle(11)}> Pedir</MDBBtn>
         </MDBBtnGroup></PopoverHeader>
          <PopoverBody>
            Aquí se redactará los alérgenos relacionados con este plato.
          </PopoverBody>
        </Popover>
        <Popover
          component="button"
          placement="top"
          popoverBody="Lomo y Jamón"
          className="btn btn-default"
        >
          <PopoverHeader>Alérgenos  <MDBBtnGroup size="sm">
           
           <MDBBtn color = "orange" onClick={() => this.toggle(11)}> Pedir</MDBBtn>
         </MDBBtnGroup></PopoverHeader>
          <PopoverBody>
            Aquí se redactará los alérgenos relacionados con este plato.
          </PopoverBody>
        </Popover>
        <Popover
          component="button"
          placement="top"
          popoverBody="Marinero (Gambas y alioli)"
          className="btn btn-default"
        >
          <PopoverHeader>Alérgenos  <MDBBtnGroup size="sm">
           
           <MDBBtn color = "orange" onClick={() => this.toggle(11)}> Pedir</MDBBtn>
         </MDBBtnGroup></PopoverHeader>
          <PopoverBody>
            Aquí se redactará los alérgenos relacionados con este plato.
          </PopoverBody>
        </Popover>
        <Popover
          component="button"
          placement="right"
          popoverBody="Serranito de Lomo"
          className="btn btn-default"
        >
          <PopoverHeader>Alérgenos  <MDBBtnGroup size="sm">
           
           <MDBBtn color = "orange" onClick={() => this.toggle(11)}> Pedir</MDBBtn>
         </MDBBtnGroup></PopoverHeader>
          <PopoverBody>
            Aquí se redactará los alérgenos relacionados con este plato.
          </PopoverBody>
        </Popover>
</div>

 <div style={{ display: "flex" }} className="m-1 p-1">
      <Popover
          component="button"
          placement="left"
          popoverBody="Serranito de Pollo"
          className="btn btn-default"
        >
          <PopoverHeader>Alérgenos  <MDBBtnGroup size="sm">
           
           <MDBBtn color = "orange" onClick={() => this.toggle(11)}> Pedir</MDBBtn>
         </MDBBtnGroup></PopoverHeader>
          <PopoverBody>
            Aquí se redactará los alérgenos relacionados con este plato.
          </PopoverBody>
        </Popover>
        <Popover
          component="button"
          placement="top"
          popoverBody="Ahumado de Salmón"
          className="btn btn-default"
        >
          <PopoverHeader>Alérgenos  <MDBBtnGroup size="sm">
           
           <MDBBtn color = "orange" onClick={() => this.toggle(11)}> Pedir</MDBBtn>
         </MDBBtnGroup></PopoverHeader>
          <PopoverBody>
            Aquí se redactará los alérgenos relacionados con este plato.
          </PopoverBody>
        </Popover>
        <Popover
          component="button"
          placement="top"
          popoverBody="Mechá con aceite"
          className="btn btn-default"
        >
          <PopoverHeader>Alérgenos  <MDBBtnGroup size="sm">
           
           <MDBBtn color = "orange" onClick={() => this.toggle(11)}> Pedir</MDBBtn>
         </MDBBtnGroup></PopoverHeader>
          <PopoverBody>
            Aquí se redactará los alérgenos relacionados con este plato.
          </PopoverBody>
        </Popover>
        <Popover
          component="button"
          placement="top"
          popoverBody="Lomo y Queso Viejo"
          className="btn btn-default"
        >
          <PopoverHeader>Alérgenos  <MDBBtnGroup size="sm">
           
           <MDBBtn color = "orange" onClick={() => this.toggle(11)}> Pedir</MDBBtn>
         </MDBBtnGroup></PopoverHeader>
          <PopoverBody>
            Aquí se redactará los alérgenos relacionados con este plato.
          </PopoverBody>
        </Popover>
        <Popover
          component="button"
          placement="right"
          popoverBody="Pringá Calentito"
          className="btn btn-default"
        >
          <PopoverHeader>Alérgenos  <MDBBtnGroup size="sm">
           
           <MDBBtn color = "orange" onClick={() => this.toggle(11)}> Pedir</MDBBtn>
         </MDBBtnGroup></PopoverHeader>
          <PopoverBody>
            Aquí se redactará los alérgenos relacionados con este plato.
          </PopoverBody>
        </Popover>
</div>

      <hr className="my-5" />

      <h3>Postres & Bebidas</h3>
      
      <div style={{ display: "flex" }} className="m-1 p-1">
      <Popover
          component="button"
          placement="left"
          popoverBody="Flan de Huevo (Casero)"
          className="btn btn-default"
        >
          <PopoverHeader>Alérgenos  <MDBBtnGroup size="sm">
           
           <MDBBtn color = "orange" onClick={() => this.toggle(11)}> Pedir</MDBBtn>
         </MDBBtnGroup></PopoverHeader>
          <PopoverBody>
            Aquí se redactará los alérgenos relacionados con este plato.
          </PopoverBody>
        </Popover>
        <Popover
          component="button"
          placement="top"
          popoverBody="Natillas caseras"
          className="btn btn-default"
        >
          <PopoverHeader>Alérgenos  <MDBBtnGroup size="sm">
           
           <MDBBtn color = "orange" onClick={() => this.toggle(11)}> Pedir</MDBBtn>
         </MDBBtnGroup></PopoverHeader>
          <PopoverBody>
            Aquí se redactará los alérgenos relacionados con este plato.
          </PopoverBody>
        </Popover>
        <Popover
          component="button"
          placement="top"
          popoverBody="Fruta del tiempo"
          className="btn btn-default"
        >
          <PopoverHeader>Alérgenos  <MDBBtnGroup size="sm">
           
           <MDBBtn color = "orange" onClick={() => this.toggle(11)}> Pedir</MDBBtn>
         </MDBBtnGroup></PopoverHeader>
          <PopoverBody>
            Aquí se redactará los alérgenos relacionados con este plato.
          </PopoverBody>
        </Popover>
        <Popover
          component="button"
          placement="top"
          popoverBody="Helado de Vainilla"
          className="btn btn-default"
        >
          <PopoverHeader>Alérgenos  <MDBBtnGroup size="sm">
           
           <MDBBtn color = "orange" onClick={() => this.toggle(11)}> Pedir</MDBBtn>
         </MDBBtnGroup></PopoverHeader>
          <PopoverBody>
            Aquí se redactará los alérgenos relacionados con este plato.
          </PopoverBody>
        </Popover>
        <Popover
          component="button"
          placement="right"
          popoverBody="Arroz con leche"
          className="btn btn-default"
        >
          <PopoverHeader>Alérgenos  <MDBBtnGroup size="sm">
           
           <MDBBtn color = "orange" onClick={() => this.toggle(11)}> Pedir</MDBBtn>
         </MDBBtnGroup></PopoverHeader>
          <PopoverBody>
            Aquí se redactará los alérgenos relacionados con este plato.
          </PopoverBody>
        </Popover>
</div>

      <div style={{ display: "flex" }} className="m-1 p-1">
      <Popover
          component="button"
          placement="left"
          popoverBody="Botellin de Alhambra"
          className="btn btn-default"
        >
          <PopoverHeader>Alérgenos  <MDBBtnGroup size="sm">
           
           <MDBBtn color = "orange" onClick={() => this.toggle(11)}> Pedir</MDBBtn>
         </MDBBtnGroup></PopoverHeader>
          <PopoverBody>
            Aquí se redactará los alérgenos relacionados con este plato.
          </PopoverBody>
        </Popover>
        <Popover
          component="button"
          placement="top"
          popoverBody="Fanta de Naranja"
          className="btn btn-default"
        >
          <PopoverHeader>Alérgenos  <MDBBtnGroup size="sm">
           
           <MDBBtn color = "orange" onClick={() => this.toggle(11)}> Pedir</MDBBtn>
         </MDBBtnGroup></PopoverHeader>
          <PopoverBody>
            Aquí se redactará los alérgenos relacionados con este plato.
          </PopoverBody>
        </Popover>
        <Popover
          component="button"
          placement="top"
          popoverBody="Coca - Cola zero"
          className="btn btn-default"
        >
          <PopoverHeader>Alérgenos  <MDBBtnGroup size="sm">
           
           <MDBBtn color = "orange" onClick={() => this.toggle(11)}> Pedir</MDBBtn>
         </MDBBtnGroup></PopoverHeader>
          <PopoverBody>
            Aquí se redactará los alérgenos relacionados con este plato.
          </PopoverBody>
        </Popover>
        <Popover
          component="button"
          placement="top"
          popoverBody="Coca - Cola light"
          className="btn btn-default"
        >
          <PopoverHeader>Alérgenos  <MDBBtnGroup size="sm">
           
           <MDBBtn color = "orange" onClick={() => this.toggle(11)}> Pedir</MDBBtn>
         </MDBBtnGroup></PopoverHeader>
          <PopoverBody>
            Aquí se redactará los alérgenos relacionados con este plato.
          </PopoverBody>
        </Popover>
        <Popover
          component="button"
          placement="right"
          popoverBody="Botellin Cruzcampo"
          className="btn btn-default"
        >
          <PopoverHeader>Alérgenos  <MDBBtnGroup size="sm">
           
           <MDBBtn color = "orange" onClick={() => this.toggle(11)}> Pedir</MDBBtn>
         </MDBBtnGroup></PopoverHeader>
          <PopoverBody>
      <Iframe src="http://130.240.5.36/img/IMG_prototipo22.jpg" />
            Aquí se redactará los alérgenos relacionados con este plato. aoisdfn ojb pidsab fpadsub po ads ods bpuu o o  o   bpiubapiudsbfiasdvb pasdu jban 
          </PopoverBody>
        </Popover>
      </div>
    


      </Container>


      <hr className="my-5" />

        <Modal
          isOpen={this.state.modal3}
          toggle={() => this.toggle(3)}
          size="sm"
        >
          <ModalHeader toggle={() => this.toggle(3)}>Producto añadido</ModalHeader>
          <ModalBody>
            Se ha añadido a su pedido el producto seleccionado
          </ModalBody>
          <ModalFooter>
            <Button color="orange" size="sm" onClick={() => this.toggle(3)}>
              Cerrar
            </Button>
          </ModalFooter>
        </Modal>
      <br></br>
      <MDBBtn onClick={() => this.toggle(16)} block color="green">Hacer Pedido</MDBBtn>
      <Modal isOpen={this.state.modal16} toggle={() => this.toggle(16)}>
          <ModalHeader toggle={() => this.toggle(16)}>Resumen de tu Pedido</ModalHeader>
          <ModalBody>
            <Container fluid className="black-white">
              <Row>
                <Col md="4">
                  Pedido
                </Col>
                <Col md="2" className="ml-auto ">
                  Precio
                </Col>
              </Row>
              <br />
              <Row>
              <Col md="4" >
                  Patatas Bravas
                  Salmorejo
                  Chipiron Plancha
                  Presa Ibérica
                  Morcilla
                </Col>
                <Col md="2" className="ml-auto">
                  -- 3€  --  
                  --  3€    --
                  --  3€   --
                  --  4€    --
                  --  4€    --
                  
                </Col>
              </Row>
             
                <Col sm="9" >
              <br />
              <Row> Nombre:  <strong> Jesús Javier</strong></Row>
              </Col>
              <Row>
                <Col sm="9" >
               
                  Dirección:
                  <Row>
                    <Col sm="12" >
                    Av. Reina Mercedes, 41012 Sevilla
                    </Col>
                    
                    <Col sm="6" >
                    tlf: 954556817
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.toggle(16)}>
              Seguir con el pedido
            </Button>{" "}
            <Button color="green" onClick={() =>  this.toggle(16) & this.toggle(14)}>
          Finalizar Pedido
        </Button>          </ModalFooter>
        </Modal>
        <Modal
          isOpen={this.state.modal14}
          toggle={() => this.toggle(14)}
          centered
        >
          <ModalHeader toggle={() => this.toggle(14)}>Pedido Realizado</ModalHeader>
          <ModalBody>
            Pedido realizado con éxito. En aproximadamente 40 minutos tendrás la comida en la puerta de casa.
          </ModalBody>
          <ModalFooter>
            <Button color="green" onClick={() => this.toggle(14) }>
              Cerrar
            </Button>
          </ModalFooter>
        </Modal>

        <Modal
          isOpen={this.state.modal11}
          toggle={() => this.toggle(11)}
          frame
          position="top"
        >
          <ModalBody className="text-center">
          Se ha añadido a su pedido el producto seleccionado
            <Button color="orange" onClick={() => this.toggle(11)}>
              Cerrar
            </Button>
          </ModalBody>
        </Modal>
      <br></br>
      <br></br>

    </Container>
    );
  }
}

export default Pedironline;

