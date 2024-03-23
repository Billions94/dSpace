'use client';

import {
  Avatar,
  Button,
  ModalBody,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';
import React from 'react';
import { useInput } from '@/packages/utils/hooks';
import { loginInputState } from '@/packages/forms/formState';
import { LoginInput } from '@/packages/forms/interface';
import { useRouter } from 'next/navigation';
import { LoginUserView } from '@/app/src/components/user/LoginUserView';
import { setBackground } from '@/packages/utils/funcs';
import { useLoginMutation } from '@/app/src/dto';
import { getStoreState, useAppStore } from '@/app/src/store/Zustand';
import { Modal, ModalContent, ModalFooter } from '@nextui-org/modal';

export const LoginForm: React.FC = () => {
  const router = useRouter();
  const [login, { loading }] = useLoginMutation();
  const { input, handleChange } = useInput<LoginInput>(loginInputState);
  const { setToken, setUser, setIsLoggedIn } = useAppStore(getStoreState);
  const { isOpen, onOpen } = useDisclosure();

  const className = {
    form: ' p-10 dark:mix-blend-luminosity h-1/2 rounded-curved',
    inputContainer: 'mb-3 mt-3',
    input: `py-2 px-3 border-1 border-black dark:border-inherit  dark:placeholder:text-[#FFE0C9]
    placeholder:text-black bg-transparent w-full rounded-curved`,
    'sign-up': 'p-2 border-transparent mt-2',
    loginButton: 'bg-orange-400 w-full rounded-curved',
    button: 'ml-2 bg-orange-400 border-0 rounded-curved',
    title: 'text-center text-xxl dark:text-orange-400 mb-2 text-black',
    avatar: 'w-20 h-20 text-large text-center items-center',
    accountPrerequisite: 'text-sm dark:text-orange-400',
    modal: 'bg-login dark:bg-loginDark dark:mix-blend-luminosity',
    modalHeader: 'flex flex-col gap-1 mb-5',
    modalFooter: 'flex flex-col items-center justify-center',
  };

  const handleSubmit = React.useCallback(
    async function (e: any) {
      e.preventDefault();

      try {
        const { data } = await login({ variables: { input } });

        if (data) {
          const { accessToken, refreshToken } = data.login!;

          if (accessToken && refreshToken) {
            setToken({ accessToken, refreshToken });
            setUser();
            setIsLoggedIn();
            router.push('/ai-content');
          }
        }
      } catch (e) {
        console.log(e);
      }
    },
    [input, login, router, setIsLoggedIn, setToken, setUser]
  );

  if (loading) {
    return <>Loading......</>;
  }

  return (
    <div>
      {isOpen && <Button onPress={onOpen}>Proceed</Button>}
      <form className={className.form} onSubmit={handleSubmit}>
        <h1 className={className.title}>Login</h1>
        <LoginUserView>
          <Avatar
            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            className={className.avatar}
          />
        </LoginUserView>
        <div>
          <div className={className.inputContainer}>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              className={className.input}
              value={input.email}
              onChange={handleChange}
            />
          </div>
          <div className={className.inputContainer}>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className={className.input}
              value={input.password}
              onChange={handleChange}
            />
          </div>
          <div className={className.inputContainer + `cursor-pointer mt-5`}>
            <Button
              type="submit"
              variant="flat"
              className={className.loginButton}
            >
              <span>login</span>
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
