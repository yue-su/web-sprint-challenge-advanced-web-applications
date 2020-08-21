import React, { useState } from "react"
import { axiosWithAuth } from "./utils/axiosWithAuth"

const initialColor = {
  color: "",
  code: { hex: "" },
}

const ColorList = ({ colors, updateColors }) => {
  const [editing, setEditing] = useState(false)
  const [colorToEdit, setColorToEdit] = useState(initialColor)

  const editColor = (color) => {
    setEditing(true)
    setColorToEdit(color)
  }

  const saveEdit = (e) => {
    e.preventDefault()
    axiosWithAuth()
      .put(`/api/colors/${colorToEdit.id}`, colorToEdit)
      .then((res) => {
        //console.log(res.data)
        const updatedColor = [...colors].map((color) => {
          if (color.id === colorToEdit.id) {
            return {
              ...color,
              color: colorToEdit.color,
              code: {
                ...color.code,
                hex: colorToEdit.code.hex,
              },
            }
          } else return color
        })
        updateColors(updatedColor)
        setEditing(false)
      })

    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now?
  }

  const deleteColor = (color) => {
    axiosWithAuth()
      .delete(`/api/colors/${color.id}`)
      .then((res) => {
        const updatedColor = [...colors].filter(
          (color) => color.id !== res.data
        )
        updateColors(updatedColor)
      })
  }

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map((color) => (
          <li
            key={color.color}
            data-testid="color"
            onClick={() => editColor(color)}
          >
            <span>
              <span
                className="delete"
                onClick={(e) => {
                  e.stopPropagation()
                  deleteColor(color)
                }}
              >
                x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={(e) =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={(e) =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value },
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      {/* stretch - build another form here to add a color */}
    </div>
  )
}

export default ColorList
