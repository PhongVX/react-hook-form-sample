import * as React from 'react';
import classNames from 'classnames';

interface TextFieldProps {
    onChange?: (event: any) => void
    onInput?: (event: any) => void
    onKeyPress?: (event: any) => void
    onKeyDown?: (event: any) => void
    placeHolder?: string
    value?: string
    defaultValue?: string
    type?: string
    style?: object
    disabled?: boolean
    className?: string
    ref?: any
    errors?: any
    name?: string
    register?:any
}

const TextField: React.FC<TextFieldProps> = React.forwardRef((props) => {
    const {style, name, errors, register, disabled, className, ...restProps} = props;
    return (
        <>
        <input
            {...restProps}
            style={{...style}} 
            {...register(name)}
            type={props?.type || 'text'}
            disabled={disabled} 
            className={classNames('text-field', className)}
        />
        </>
    )
});

export default TextField;