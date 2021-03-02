import React, { useState } from 'react'

export function WhoAmI() {
  const [name, setName] = useState("");
  
  function handleChange(event) {
    setName(event.target.value);
  }

  function onSaveButtonClick() {
    console.log(`Save ${name} to redux`);
  }

  return (
    <div>
      <label>Please enter your name:</label>
      <input type="text" value={name} onChange={handleChange} />
      <button onClick={onSaveButtonClick}>
        Save
      </button>
    </div>
  )
}
