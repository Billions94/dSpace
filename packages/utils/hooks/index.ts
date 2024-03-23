import { useEffect, useState } from 'react';
import { getStoreState, useAppStore } from '@/app/src/store/Zustand';
import { useRouter } from 'next/navigation';

export function useInput<T>(inputState: T) {
  const [input, setInput] = useState(inputState);

  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>): void {
    setInput({ ...input, [target.name]: target.value });
  }

  function resetInput(): void {
    setInput(inputState);
  }

  return { input, handleChange, resetInput };
}

export function useAuthorizationGuard() {
  const router = useRouter();
  const { isLoggedIn } = useAppStore(getStoreState);

  useEffect(() => {
    if (isLoggedIn) {
      return;
    } else {
      router.push('/login');
    }
  }, [isLoggedIn, router]);
}
