import React from 'react';
import {
  useForm,
  FieldError,
  useFormContext
} from 'react-hook-form';
import 'src/views/styles.scss';

function NestedComponent() {
    const {register,  formState: { errors }} = useFormContext();
    const customMessageValidation = (label: string, error: FieldError) => {
    switch (error.type) {
      case 'required':
        return `${label} is required`;
      case 'max':
      case 'min':
        return `${label} is invalid number`;
      case 'typeError':
        return `${label} is type error`; 
    }
  }
  return (
    <>
        <input className='full-width' placeholder='Nested Field' {...register('nestedField')} />
        {errors.nestedField && <span className='error-message'>{customMessageValidation('Nested Field', errors.nestedField)} </span>}
    </>
  );
}

export default NestedComponent;