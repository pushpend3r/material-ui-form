import React, { Component } from "react";
import { Typography, Button } from "@material-ui/core";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Typography variant="h2" gutterBottom>
          App
        </Typography>
        <Typography variant="h1" gutterBottom>
          App
        </Typography>
        <Typography variant="body1" gutterBottom>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad libero
          exercitationem, praesentium possimus similique ex suscipit
          consectetur, eveniet tenetur expedita ut beatae laborum in sunt id
          inventore commodi accusamus voluptatibus delectus blanditiis veritatis
          error obcaecati. Quam tempora veniam autem qui, quia optio impedit
          sint soluta culpa omnis odit commodi vero.
        </Typography>
        <Button variant="contained" color="primary">
          Click here
        </Button>
      </>
    );
  }
}

export default App;
