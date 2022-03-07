import { useState } from "react";

export const useModal = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  return [show, handleClick];
};
