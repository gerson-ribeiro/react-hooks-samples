import { useState } from "react";

const useChangeContext = () => {
  const [changeContext, setChangeContext] = useState(true);
  const handleChange = () => {
    setChangeContext(!changeContext);
  };

  return { changeContext, handleChange };
};

export default useChangeContext;
