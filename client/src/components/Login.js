import React, { useState } from "react"
import { Box, TextField, Paper, Button } from "@material-ui/core"
import { axiosWithAuth } from "./utils/axiosWithAuth"
import { useHistory } from "react-router-dom"

const Login = () => {
  const history = useHistory()

  const [item, setItem] = useState({ username: "", password: "" })

  const updateHandler = (event) => {
    const { name, value } = event.target
    setItem({ ...item, [name]: value })
  }

  const submitHandler = (event) => {
    event.preventDefault()
    axiosWithAuth()
      .post("/api/login", item)
      .then((res) => {
        localStorage.setItem("token", res.data.payload)
        history.push("/bubbles")
      })
  }

  return (
    <Box align="center">
      <Box maxWidth="50%">
        <Paper>
          <form>
            <Box m={5}>
              <TextField
                label="Username"
                name="username"
                value={item.username}
                onChange={updateHandler}
              ></TextField>
              <TextField
                label="password"
                type="password"
                name="password"
                value={item.password}
                onChange={updateHandler}
              ></TextField>
              <Button onClick={submitHandler} color="primary">
                Submit
              </Button>
            </Box>
          </form>
        </Paper>
      </Box>
    </Box>
  )
}

export default Login
