import React, { useState } from 'react'
import { useGamepads } from 'react-gamepads'
export default function App() {
  const [gamepads, setGamepads] = useState({})
  useGamepads((gamepads) => setGamepads(gamepads))
  // Shows when the "fourth button" of "first gamepad" is pressed
  return <div>{gamepads[0].buttons[4].pressed ? 'Pressed' : 'Not Pressed'}</div>
}
