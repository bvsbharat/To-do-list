import { useState } from "react";

const useInputState = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChangeHandler = (e) => setValue(e.target.value);
  const reset = (e) => setValue("");

  return [value, onChangeHandler, reset];
};

export { useInputState };
