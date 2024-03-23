import formBgOriginal from '../../../public/assets/images/formBgOriginal.png';
import formBgYellow from '../../../public/assets/images/formBgYellow.png';
import formBgWhite from '../../../public/assets/images/formBgWhite.png';
import {
  Post,
  PostsDocument,
  User,
  UserDocument,
  UsersDocument,
} from '@/app/src/dto';
import apolloClient from '@/app/src/apollo';

export interface FormAttribute {
  type: string;
  name: string;
  placeholder?: string;
}

export interface Form {
  type: string;
  name: string;
  placeholder?: string;
}

export function getFormAttributes<T>(input: T, forms: Form[]): FormAttribute[] {
  const attributes: FormAttribute[] = [];

  for (const [index, value] of Object.values(<any>input).entries()) {
    const attribute = {
      type: forms[index].type,
      name: forms[index].name,
      placeholder: forms[index].placeholder,
      value: String(value),
    };

    attributes.push(attribute);
  }

  return attributes;
}

export function setBackground(src?: string) {
  const node = document.getElementById('form-container');

  if (node) {
    const { style: s } = node;
    s.background = `url(${src ? src : formBgWhite.src})`;
    s.backgroundSize = 'contain';
    s.backgroundPosition = 'center';
  }
}

export const backGroundThemeHandler = {
  original: formBgOriginal.src,
  yellow: formBgYellow.src,
  white: formBgWhite.src,
};

export async function getUserData(): Promise<User | null> {
  try {
    const { data } = await apolloClient.query({ query: UserDocument });
    console.log({ data });
    return data.user;
  } catch (e) {
    return null;
  }
}

export async function getUsersData(): Promise<User[]> {
  try {
    const { data } = await apolloClient.query({ query: UsersDocument });
    return data.users;
  } catch (e) {
    return [];
  }
}

export async function getPostsData(): Promise<Post[]> {
  try {
    const { data } = await apolloClient.query({ query: PostsDocument });
    console.log({ data });
    return data.posts;
  } catch (e) {
    return [];
  }
}
