import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {
  useForm,
  FieldError,
  FormProvider
} from 'react-hook-form';
import 'src/views/styles.scss';
import NestedComponent from 'src/views/Nested/NestedComponent';

interface FormFields {
  firstName: string
  gender: string
  age: number
  nestedField: string
}

const schema = yup.object().shape({
  firstName: yup.string().required(),
  nestedField: yup.string().required(),
  age: yup.number().positive().integer().min(18).max(150).required(),
  gender: yup.string()
});

function SchemaValidation() {
  const method = useForm<FormFields>({
    resolver: yupResolver(schema)
  });
  const { register, watch, formState: { errors }, handleSubmit } = method
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
      case 'typeError':
        return `${label} is type error`;
    }
  }

  return (
    <>
      <div className='form-wrapper'>
        <FormProvider {...method}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <NestedComponent />
            <br /><br />
            <input className='full-width' placeholder='First Name' {...register('firstName')} />
            {errors.firstName && <span className='error-message'>This field required</span>}
            <br /><br />
            <input className='full-width' placeholder='Age' {...register('age')} />
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
        </FormProvider>
      </div>
      <div className='text-center'>Data: {JSON.stringify(watchAllFields)}</div>
    </>
  );
}

export default SchemaValidation;