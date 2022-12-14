import { useState } from "react";

function useInput(validationCheck) {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValueValid = validationCheck(value);
  const isAllValid = isValueValid || !isTouched;

  const onChangeHandler = (e) => setValue(e.target.value);
  const onBlurHandler = (e) => setIsTouched(true);

  const reset = () => {
    setValue("");
    setIsTouched(false);
  };

  return {
    value,
    isValueValid,
    isAllValid,
    onChangeHandler,
    onBlurHandler,
    reset,
  };
}

export default useInput;
