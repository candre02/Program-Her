// import react
import React from 'react';
// import backgroundimage
import backgroundImage from "../assets/images/coder.jpeg";
// import chakra-ui
import { Container } from '@chakra-ui/react';


// this is the homepage of programher
function ProgramHer() {
    return(
        <Container>
        <div
        className="bg-image p-5 text-center shadow-1-strong rounded my-2 text-white img-fluid"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: "700px",
          width: "1200px",
          outline: "2px solid black",
          padding: "20em",
          backgroundRepeat: "no-repeat",
          backgroundPostion: "center",
          backgroundSize: "108%"   
        }}
      >

      </div>
    </Container>

    );
}

// export programher
export default ProgramHer;