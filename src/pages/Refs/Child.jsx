import React, { useRef, useImperativeHandle, forwardRef } from 'react'
import { Form } from 'antd'

import Grandson from './Grandson'

const ChildInput = (props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      // inputRef.current.focus();
      console.log('focus')
    }
  }))
  return (
    <Form ref={inputRef}>
      <input type="text"/>
    </Form>
  )
}
const Child = forwardRef(ChildInput)
export default Child
