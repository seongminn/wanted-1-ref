import { useCallback, useState } from 'react';

const useInput = (initValue) => {
  const [value, setValue] = useState(initValue);

  const onChange = useCallback(
    (e) => {
      setValue({ ...value, [e.target.name]: e.target.value });
    },
    [value],
  );

  const resetValue = useCallback(() => {
    setValue(initValue);
  }, [initValue]);

  return { value, onChange, resetValue };
};

export default useInput;
