import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Login from "./components/Login"
import "./styles.scss"
import { Container, Typography, Box } from "@material-ui/core"
import BubblePage from "./components/BubblePage"
import PrivateRoute from "./components/PrivateRoute"

function App() {
  return (
    <Router>
      <Container maxWidth="md">
        <Box my={3}>
          <Typography align="center" variant="h3">
            Bubbles of Color
          </Typography>
        </Box>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/bubbles" component={BubblePage} />
      </Container>
    </Router>
  )
}

export default App
