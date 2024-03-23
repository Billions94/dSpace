'use client';

import React from 'react';
import { getFormAttributes } from '@/packages/utils/funcs';
import { useInput } from '@/packages/utils/hooks';
import { RegisterInput } from '@/packages/forms/interface';
import { registerForm, registerInputState } from '@/packages/forms/formState';
import { LoginUserView } from '@/app/src/components/user/LoginUserView';
import { Avatar, Button } from '@nextui-org/react';

export const RegisterForm: React.FC = () => {
  const { input, handleChange } = useInput<RegisterInput>(registerInputState);
  const className = {
    form: ' p-10 dark:mix-blend-luminosity h-1/2 rounded-curved',
    inputContainer: 'mb-3 mt-3',
    input: `py-2 px-3 border-1 border-black dark:border-inherit  dark:placeholder:text-[#FFE0C9]
         placeholder:text-black bg-transparent w-full rounded-curved`,
    title: 'text-center text-xxl dark:text-orange-400 mb-2 text-black',
    avatar: 'w-20 h-20 text-large text-center items-center',
    registerButton: 'bg-orange-400 w-full rounded-curved',
  };

  return (
    <div>
      <form className={className.form}>
        <h1 className={className.title}>Register</h1>
        <LoginUserView>
          <Avatar
            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            className={className.avatar}
          />
        </LoginUserView>

        {getFormAttributes(input, registerForm).map((attribute) => (
          <div key={attribute.name}>
            <div className={className.inputContainer}>
              <input
                id={attribute.name}
                type={attribute.type}
                name={attribute.name}
                placeholder={attribute.placeholder}
                className={className.input}
                value={input.email}
                onChange={handleChange}
              />
            </div>
          </div>
        ))}

        <div className={className.inputContainer + `cursor-pointer mt-5`}>
          <Button
            type="submit"
            variant="flat"
            className={className.registerButton}
          >
            <span>login</span>
          </Button>
        </div>
      </form>
    </div>
  );
};
