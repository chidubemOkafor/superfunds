import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { useQuery } from '@tanstack/react-query';
import { request, RequestDocument } from 'graphql-request';

export const useGraphQLQuery = (queryKey: any, query: RequestDocument | TypedDocumentNode<unknown, {}>, variables = {}, url: string) => {
  return useQuery({
    queryKey,
    queryFn: async () => {
      return await request(url, query, variables);
    },
  });
};

