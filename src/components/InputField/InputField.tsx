import { useState } from "react";
import "./InputField.css";

interface InputFieldProps {
    id:          string;
    placeholder: string;
    value:       string;
    error?:      string;
    type:        React.HTMLInputTypeAttribute;
    onChange:    (value: string) => void;
    onSubmit?:   () => void;
}

export const InputField = ({
    id,
    placeholder,
    value,
    error,
    type,
    onChange,
    onSubmit,
}: InputFieldProps) => {
    const [focus, setFocus] = useState(false);
    return (
        <div>
            <div className={`input-field ${focus && 'input-field--active'} ${error && 'input-field--error'}`}>
                <input 
                    className='input-field__input'
                    type={type}
                    id={id}
                    name={type}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onFocus={_ => setFocus(true)}
                    onBlur={_ => setFocus(false)}
                    onKeyUp={onSubmit ? e => {
                        if (e.key === "Enter") {
                            onSubmit();
                        }
                    } : undefined}
                    required
                />

                <label 
                    className={`input-field__placeholder ${(focus || value.length > 0) && 'input-field__placeholder--active'}`}
                    htmlFor={id}
                >
                    {placeholder}
                </label>
            </div>

            { (error && error.length > 0) &&
                <span className='input-field__error'>
                    {error}
                </span>
            }
        </div>
    );
};
