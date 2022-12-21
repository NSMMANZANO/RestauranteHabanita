import React, { Component } from "react";
import {
  Jumbotron,
  Container,
  Iframe
} from "mdbreact";

class DondeEstamos extends Component {
  render() {
    return(
    <Container>
      <br></br>
      <br></br>
      <Jumbotron>
        <h2 >Estamos en pleno centro de Sevilla, en Callejón Golfo, en la zona de la Alfalfa.</h2>
      <br></br>



        <hr className="my-2" />
      <br></br>

        <p>
        Nuestro horario es el siguiente:
        </p>
        <p>
        Lunes a viernes
        </p>
        <p>
        8:00 a 23:30
        </p>
        <p>
        Sábado, Domingo y Festivos
        </p>
        <p>
        9:00 a 00:30
        </p>        
      </Jumbotron>
      <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.9621246245297!2d-5.993672948876313!3d37.39072797973223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126c1acfd6f3d1%3A0xdd4d6b2da31277e6!2sHabanita!5e0!3m2!1ses!2ses!4v1670676487036!5m2!1ses!2ses"/>
    </Container>
    );
  }
}

export default DondeEstamos;
