/*
  Hooks - we can define hook data type for initial state
*/

import React, { useRef, useState } from "react";

const Input: React.FC = () => {
  const [count, setCount] = useState<number | null | undefined>(2);
  const ShoppingListInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = ShoppingListInputRef.current!.value;
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Shopping list</label>
      <input type="text" id="text" ref={ShoppingListInputRef}/>
      <button>Add shopping item</button>
    </form>
  );
};

export default Input;
