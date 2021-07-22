import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import {TextField, Input, Checkbox } from '@material-ui/core';

import 'src/views/styles.scss';

interface FormFields {
  firstName: string
  gender: string
  lastName: string
  save: boolean
  uILib: string
  uILib2: string
  uICheckbox: boolean
}

function IntegratingWithUILib() {
  const { register, watch, control, handleSubmit } = useForm<FormFields>();
  // const watchAllFields = watch();

  React.useEffect(()=>{
    console.log('Do some thing');
  }, [watch('firstName')]);

  const onSubmit = (data: FormFields) => console.log(data);
  const handleSubmitButtonClick = () => {
    handleSubmit((data)=>{
      console.log('handleSubmitButtonClick Data', data);
    })();
  }
  return (
    <>
      <div className='form-wrapper'>
        <form  onSubmit={handleSubmit(onSubmit)}>
          <TextField className='full-width' placeholder='UILib' {...register('uILib')}/>
          <Input className='full-width' placeholder='UILib2' {...register('uILib2')} />
          <Controller 
             name='uICheckbox'
             control={control}
             defaultValue={true}
             render={({ field }) => <Checkbox  {...field} />}
          />
          
          <br /><br />
          <input className='full-width' placeholder='First Name' {...register("firstName")} />
          <br /><br />
          <input className='full-width' placeholder='Last Name' {...register("lastName")} />
          <br /><br />
          <select className='full-width' {...register("gender")}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
          <input type='checkbox' {...register('save')} />
          <br /><br />
          <button  className='full-width' type='button' onClick={handleSubmitButtonClick}>Submit</button>
          <br /><br />
          <input className='full-width' type="submit" />
          <br />
        </form>
      </div>
      <div className='text-center'></div>
    </>
  );
}

export default IntegratingWithUILib;