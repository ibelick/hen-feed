const REACT_APP_GRAPHQL_API = "https://hdapi.teztools.io/v1/graphql";

export const fetchGraphQL = async (
  operationsDoc: string,
  operationName: string,
  variables: {}
) => {
  const result = await fetch(REACT_APP_GRAPHQL_API, {
    method: "POST",
    body: JSON.stringify({
      query: operationsDoc,
      variables: variables,
      operationName: operationName,
    }),
  });
  return await result.json();
};
