import React from 'react'

interface TabButtonProps {
  text: string;
  onClick: () => void;
  selected: boolean;
}

function TabButton({text, onClick, selected = false}: TabButtonProps) {
  return (
    <button className={`btn btn-${selected ? 'primary' : "dark"} btn-lg w-sm-50 w-md-25 me-2`} onClick={onClick}>{text}</button>
  )
}

export default TabButton