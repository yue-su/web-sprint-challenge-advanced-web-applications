import React, { useState, useEffect } from "react"
import Bubbles from "./Bubbles"
import ColorList from "./ColorList"
import { Box } from "@material-ui/core"
import { fetchColors } from "./fetchColors"

const BubblePage = () => {
  const [colorList, setColorList] = useState([])

  useEffect(() => {
    fetchColors().then((res) => {
      setColorList(res.data)
      //console.log(res)
    })
  }, [])

  return (
    <Box align="center">
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </Box>
  )
}

export default BubblePage

