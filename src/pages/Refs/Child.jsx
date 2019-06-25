import React, { useRef } from 'react'

const Child = () => {
  const test = () => {
    console.log('test')
  }
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }))
  return (
    <div>Child</div>
  )
}

export default Child
