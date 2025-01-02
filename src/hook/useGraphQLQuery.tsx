import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { useQuery } from '@tanstack/react-query';
import { request, RequestDocument } from 'graphql-request';

export const useGraphQLQuery = <TData, TVariables extends object = {}>(
  queryKey: any,
  query: RequestDocument | TypedDocumentNode<TData, TVariables>,
  variables: TVariables,
  url: string
) => {
  return useQuery<TData>({
    queryKey,
    queryFn: async () => {
      return await request<TData>(url, query, variables);
    },
  });
};