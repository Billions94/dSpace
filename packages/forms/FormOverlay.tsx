'use client';

import React from 'react';
import {
  Avatar,
  Button,
  ModalBody,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';
import { Modal, ModalContent, ModalFooter } from '@nextui-org/modal';
import { useRouter } from 'next/navigation';
import { LoginForm } from '@/packages/forms/LoginForm';
import { RegisterForm } from '@/packages/forms/RegisterForm';
import { setBackground } from '@/packages/utils/funcs';

export const FormOverlay: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [formState, setFormState] = React.useState<'login' | 'register'>(
    'login'
  );

  const getFormState = React.useMemo(() => formState === 'login', [formState]);

  const className = {
    formContainer:
      'flex flex-col items-center justify-center min-h-screen relative z-50',
    button: 'ml-2 bg-orange-400 border-0 rounded-curved',
    'sign-up': 'p-2 border-transparent mt-2',
    accountPrerequisite: 'text-sm dark:text-orange-400',
    modal: 'bg-login dark:bg-loginDark dark:mix-blend-luminosity',
    modalHeader: 'flex flex-col gap-1 mb-5',
    modalFooter: 'flex flex-col items-center justify-center',
  };

  React.useEffect(() => {
    setBackground();
  }, []);

  return (
    <div id="form-container" className={className.formContainer}>
      {!isOpen && <Button onPress={onOpen}>Proceed</Button>}
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className={className.modal}
      >
        <ModalContent>
          <ModalHeader className={className.modalHeader}></ModalHeader>
          <ModalBody>
            {getFormState ? <LoginForm /> : <RegisterForm />}
            {children && children}
          </ModalBody>

          <ModalFooter className={className.modalFooter}>
            <div className={className['sign-up']}>
              <span className={className.accountPrerequisite}>
                {getFormState
                  ? 'New here? Create an account'
                  : 'Already have an account? Log-in'}
              </span>
              <Button
                type="submit"
                size="sm"
                variant="faded"
                className={className.button}
                onClick={() =>
                  getFormState
                    ? setFormState('register')
                    : setFormState('login')
                }
              >
                {getFormState ? 'Sign-up' : 'Log-in'}
              </Button>
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
