import React, { Component } from "react";
import {
  Container,
  Iframe
} from "mdbreact";

class Carta extends Component {
  render() {
    return(
    <Container>
      <br></br>
      <br></br>
      <Iframe src="http://online.anyflip.com/kaisc/qosj/" />

        {/*   <iframe title = "Carta" width="100%" height="900"src="http://anyflip.com/bookcase/mexv/" seamless="seamless" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" ></iframe>
     {/*         <iframe width="100%" height="700"src="http://online.anyflip.com/rcaxc/crui/" seamless="seamless" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" ></iframe> */}
    </Container>
    );
  }
}

export default Carta;
