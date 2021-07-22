import * as React from 'react';
import classNames from 'classnames';

interface OptionProps {
    onChange?: (event: any) => void
    value?: string
    defaultValue?: string
    style?: object
    disabled?: boolean
    className?: string
    ref?: any
}

const TextField: React.FC<OptionProps> = React.forwardRef((props) => {
    const {style, disabled, className, ...restProps} = props;
    return (
        <input
            {...restProps}
            style={{...style}} 
            disabled={disabled} 
            className={classNames('text-field', className)}
        />
    )
});

export default TextField;