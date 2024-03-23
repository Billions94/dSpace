import { LoginInput, RegisterInput } from '@/packages/forms/interface';
import { Form } from '@/packages/utils/funcs';

export const loginInputState: LoginInput = {
  email: '',
  password: '',
};

export const registerInputState: RegisterInput = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const registerForm: Form[] = [
  {
    name: 'userName',
    placeholder: 'Username',
    type: 'text',
  },
  {
    name: 'email',
    placeholder: 'Email',
    type: 'text',
  },
  {
    name: 'password',
    placeholder: 'Password',
    type: 'password',
  },
  {
    name: 'confirmPassword',
    placeholder: 'Confirm Password',
    type: 'password',
  },
];
