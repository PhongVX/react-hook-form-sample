import React from 'react';
import {
  useForm,
  FieldError,
} from 'react-hook-form';
import TextFieldCustom from 'src/components/TextField/Functional';

import 'src/views/styles.scss';

interface FormFields {
  firstName: string
  gender: string
  age: number
}

function Validation() {
  const { register, watch, formState: { errors }, handleSubmit } = useForm<FormFields>();
  const watchAllFields = watch();
  const onSubmit = (data: FormFields) => console.log(data);
  
  console.log(errors)

  const customMessageValidation = (label: string, error: FieldError) => {
    switch (error.type) {
      case 'required':
        return `${label} is required`;
      case 'max':
      case 'min':
        return `${label} is invalid number`;
    }
  }

  return (
    <>
      <div className='form-wrapper'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextFieldCustom errors={errors} className='full-width' name='FistName' register={register} />
          <br/><br/>
          <input className='full-width' placeholder='Age' {...register('age', { required: true, min: 1, max: 150 })} />
          {errors.age && <span className='error-message'>{customMessageValidation('Age', errors.age)} </span>}
          <br /><br />
          <select className='full-width' {...register("gender")}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
          <br /><br />
          <input className='full-width' type="submit" />
          <br />
        </form>
      </div>
      <div className='text-center'>Data: {JSON.stringify(watchAllFields)}</div>
    </>
  );
}

export default Validation;