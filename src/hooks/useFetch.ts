import { useState } from 'react';
import { AxiosError } from 'axios';

export const useFetching = (callback: () => Promise<void>) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetching = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (e: AxiosError | unknown) {
      if (e instanceof AxiosError) {
        setError(e.message);
      } else {
        setError('An error occurred');
      }
    } finally {
      setIsLoading(false);
    }
  };
  return [fetching, isLoading, error];
};
