'use client';

import React, { ReactNode } from 'react';
import apolloClient from '@/app/src/apollo/index';
import { ApolloProvider } from '@apollo/client';

export const ApolloClientWrapper = ({ children }: { children: ReactNode }) => (
  <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
);
