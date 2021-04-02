import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';

import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
  mask?: boolean;
  isFocused: boolean;
  isFilled: boolean;
}

const Input: React.FC<InputProps> = ({
  name,
  icon: Icon,
  mask,
  isFocused,
  isFilled,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, error, registerField } = useField(name);

  const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    e.currentTarget.maxLength = 5;

    let { value } = e.currentTarget;

    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{2})(\d)/, '$1.$2');

    e.currentTarget.value = value;
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Container isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
        <Icon size={20} />
        {mask ? (
          <input ref={inputRef} onKeyUp={handleKeyUp} {...rest} />
        ) : (
          <input ref={inputRef} {...rest} />
        )}
      </Container>
      {error && (
        <Error>
          <text>{error}</text>
        </Error>
      )}
    </>
  );
};

export default Input;
