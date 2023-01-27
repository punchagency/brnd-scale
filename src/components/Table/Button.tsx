import React from 'react'
import DeleteIcon from '../svgs/DeleteIcon'

const Button = ({bootstrapClass, content, clickFunc}: any) => {
  return (
    <button onClick={clickFunc} className={bootstrapClass}>{content}</button>
  )
}

export default Button