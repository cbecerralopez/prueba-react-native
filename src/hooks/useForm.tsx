import { useState } from 'react';

const useForm = <T extends Object>(formulario: T) => {
  const [state, setState] = useState(formulario);

  const onChange = (value: string, campo: keyof T) => {
    setState({
      ...state,
      [campo]: value,
    });
  };
  const cleanForm = (campo: keyof T) => {
    setState({
      ...state,
      ['nombre']: '',
      ['apellido']: '',
      ['email']: '',
      ['password']: '',
      ['usuario']: '',
    });
  }

  return {
    ...state,
    onChange,
    cleanForm,
  }
};
export default useForm;
