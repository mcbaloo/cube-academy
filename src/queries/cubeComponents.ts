/**
 * Generated by @openapi-codegen
 *
 * @version 1.0.0
 */
import * as reactQuery from "@tanstack/react-query";
import { useCubeContext, CubeContext } from "./cubeContext";
import type * as Fetcher from "./cubeFetcher";
import { cubeFetch } from "./cubeFetcher";
import type * as Responses from "./cubeResponses";

export type CubeAcademyLoginError = Fetcher.ErrorWrapper<{
  status: 401;
  payload: Responses.Error;
}>;

export type CubeAcademyLoginRequestBody = {
  /**
   * @example test@test.com
   */
  email?: string;
  /**
   * @example <string>
   */
  password?: string;
};

export type CubeAcademyLoginVariables = {
  body?: CubeAcademyLoginRequestBody;
} & CubeContext["fetcherOptions"];

/**
 * Login an existing user
 */
export const fetchCubeAcademyLogin = (
  variables: CubeAcademyLoginVariables,
  signal?: AbortSignal,
) =>
  cubeFetch<
    Responses.AuthToken,
    CubeAcademyLoginError,
    CubeAcademyLoginRequestBody,
    {},
    {},
    {}
  >({ url: "/api/login", method: "post", ...variables, signal });

/**
 * Login an existing user
 */
export const useCubeAcademyLogin = (
  options?: Omit<
    reactQuery.UseMutationOptions<
      Responses.AuthToken,
      CubeAcademyLoginError,
      CubeAcademyLoginVariables
    >,
    "mutationFn"
  >,
) => {
  const { fetcherOptions } = useCubeContext();
  return reactQuery.useMutation<
    Responses.AuthToken,
    CubeAcademyLoginError,
    CubeAcademyLoginVariables
  >({
    mutationFn: (variables: CubeAcademyLoginVariables) =>
      fetchCubeAcademyLogin({ ...fetcherOptions, ...variables }),
    ...options,
  });
};

export type CubeAcademyRegisterError = Fetcher.ErrorWrapper<{
  status: 401;
  payload: Responses.Error;
}>;

export type CubeAcademyRegisterRequestBody = {
  /**
   * @example <string>
   */
  name?: string;
  /**
   * @example <email>
   */
  email?: string;
  /**
   * @example <password>
   */
  password?: string;
};

export type CubeAcademyRegisterVariables = {
  body?: CubeAcademyRegisterRequestBody;
} & CubeContext["fetcherOptions"];

/**
 * Register a new user
 */
export const fetchCubeAcademyRegister = (
  variables: CubeAcademyRegisterVariables,
  signal?: AbortSignal,
) =>
  cubeFetch<
    Responses.AuthToken,
    CubeAcademyRegisterError,
    CubeAcademyRegisterRequestBody,
    {},
    {},
    {}
  >({ url: "/api/register", method: "post", ...variables, signal });

/**
 * Register a new user
 */
export const useCubeAcademyRegister = (
  options?: Omit<
    reactQuery.UseMutationOptions<
      Responses.AuthToken,
      CubeAcademyRegisterError,
      CubeAcademyRegisterVariables
    >,
    "mutationFn"
  >,
) => {
  const { fetcherOptions } = useCubeContext();
  return reactQuery.useMutation<
    Responses.AuthToken,
    CubeAcademyRegisterError,
    CubeAcademyRegisterVariables
  >({
    mutationFn: (variables: CubeAcademyRegisterVariables) =>
      fetchCubeAcademyRegister({ ...fetcherOptions, ...variables }),
    ...options,
  });
};

export type CubeAcademyRetrieveNomineeListError =
  Fetcher.ErrorWrapper<undefined>;

export type CubeAcademyRetrieveNomineeListVariables =
  CubeContext["fetcherOptions"];

/**
 * Retrieve a complete list of all nominees
 */
export const fetchCubeAcademyRetrieveNomineeList = (
  variables: CubeAcademyRetrieveNomineeListVariables,
  signal?: AbortSignal,
) =>
  cubeFetch<
    Responses.Nominee,
    CubeAcademyRetrieveNomineeListError,
    undefined,
    {},
    {},
    {}
  >({ url: "/api/nominee", method: "get", ...variables, signal });

/**
 * Retrieve a complete list of all nominees
 */
export const useCubeAcademyRetrieveNomineeList = <TData = Responses.Nominee,>(
  variables: CubeAcademyRetrieveNomineeListVariables,
  options?: Omit<
    reactQuery.UseQueryOptions<
      Responses.Nominee,
      CubeAcademyRetrieveNomineeListError,
      TData
    >,
    "queryKey" | "queryFn" | "initialData"
  >,
) => {
  const { fetcherOptions, queryOptions, queryKeyFn } = useCubeContext(options);
  return reactQuery.useQuery<
    Responses.Nominee,
    CubeAcademyRetrieveNomineeListError,
    TData
  >({
    queryKey: queryKeyFn({
      path: "/api/nominee",
      operationId: "cubeAcademyRetrieveNomineeList",
      variables,
    }),
    queryFn: ({ signal }) =>
      fetchCubeAcademyRetrieveNomineeList(
        { ...fetcherOptions, ...variables },
        signal,
      ),
    ...options,
    ...queryOptions,
  });
};

export type CubeAcademyCreateNominationError = Fetcher.ErrorWrapper<undefined>;

export type CubeAcademyCreateNominationRequestBody = {
  /**
   * Must be a valid nominee_id
   */
  nominee_id: string;
  reason: string;
  /**
   * One of the following values: very_unfair,unfair,not_sure,fair,very_fair
   */
  process: string;
};

export type CubeAcademyCreateNominationVariables = {
  body: CubeAcademyCreateNominationRequestBody;
} & CubeContext["fetcherOptions"];

/**
 * Create a new nomination
 */
export const fetchCubeAcademyCreateNomination = (
  variables: CubeAcademyCreateNominationVariables,
  signal?: AbortSignal,
) =>
  cubeFetch<
    Responses.Nomination,
    CubeAcademyCreateNominationError,
    CubeAcademyCreateNominationRequestBody,
    {},
    {},
    {}
  >({ url: "/api/nomination", method: "post", ...variables, signal });

/**
 * Create a new nomination
 */
export const useCubeAcademyCreateNomination = (
  options?: Omit<
    reactQuery.UseMutationOptions<
      Responses.Nomination,
      CubeAcademyCreateNominationError,
      CubeAcademyCreateNominationVariables
    >,
    "mutationFn"
  >,
) => {
  const { fetcherOptions } = useCubeContext();
  return reactQuery.useMutation<
    Responses.Nomination,
    CubeAcademyCreateNominationError,
    CubeAcademyCreateNominationVariables
  >({
    mutationFn: (variables: CubeAcademyCreateNominationVariables) =>
      fetchCubeAcademyCreateNomination({ ...fetcherOptions, ...variables }),
    ...options,
  });
};

export type CubeAcademyGetAllNominationsError = Fetcher.ErrorWrapper<undefined>;

export type CubeAcademyGetAllNominationsVariables =
  CubeContext["fetcherOptions"];

/**
 * Retrieves all nominations set by the user
 */
export const fetchCubeAcademyGetAllNominations = (
  variables: CubeAcademyGetAllNominationsVariables,
  signal?: AbortSignal,
) =>
  cubeFetch<
    Responses.Nominations,
    CubeAcademyGetAllNominationsError,
    undefined,
    {},
    {},
    {}
  >({ url: "/api/nomination", method: "get", ...variables, signal });

/**
 * Retrieves all nominations set by the user
 */
export const useCubeAcademyGetAllNominations = <TData = Responses.Nominations,>(
  variables: CubeAcademyGetAllNominationsVariables,
  options?: Omit<
    reactQuery.UseQueryOptions<
      Responses.Nominations,
      CubeAcademyGetAllNominationsError,
      TData
    >,
    "queryKey" | "queryFn" | "initialData"
  >,
) => {
  const { fetcherOptions, queryOptions, queryKeyFn } = useCubeContext(options);

  return reactQuery.useQuery<
    Responses.Nominations,
    CubeAcademyGetAllNominationsError,
    TData
  >({
    queryKey: queryKeyFn({
      path: "/api/nomination",
      operationId: "cubeAcademyGetAllNominations",
      variables,
    }),
    queryFn: ({ signal }) =>
      fetchCubeAcademyGetAllNominations(
        { ...fetcherOptions, ...variables },
        signal,
      ),
    ...options,
    ...queryOptions,
  });
};

export type CubeAcademyGetNominationByIdPathParams = {
  nominationId: string;
};

export type CubeAcademyGetNominationByIdError = Fetcher.ErrorWrapper<undefined>;

export type CubeAcademyGetNominationByIdVariables = {
  pathParams: CubeAcademyGetNominationByIdPathParams;
} & CubeContext["fetcherOptions"];

/**
 * Retrieve a specific nomination by ID
 */
export const fetchCubeAcademyGetNominationById = (
  variables: CubeAcademyGetNominationByIdVariables,
  signal?: AbortSignal,
) =>
  cubeFetch<
    Responses.Nomination,
    CubeAcademyGetNominationByIdError,
    undefined,
    {},
    {},
    CubeAcademyGetNominationByIdPathParams
  >({
    url: "/api/nomination/{nominationId}",
    method: "get",
    ...variables,
    signal,
  });

/**
 * Retrieve a specific nomination by ID
 */
export const useCubeAcademyGetNominationById = <TData = Responses.Nomination,>(
  variables: CubeAcademyGetNominationByIdVariables,
  options?: Omit<
    reactQuery.UseQueryOptions<
      Responses.Nomination,
      CubeAcademyGetNominationByIdError,
      TData
    >,
    "queryKey" | "queryFn" | "initialData"
  >,
) => {
  const { fetcherOptions, queryOptions, queryKeyFn } = useCubeContext(options);
  return reactQuery.useQuery<
    Responses.Nomination,
    CubeAcademyGetNominationByIdError,
    TData
  >({
    queryKey: queryKeyFn({
      path: "/api/nomination/{nominationId}",
      operationId: "cubeAcademyGetNominationById",
      variables,
    }),
    queryFn: ({ signal }) =>
      fetchCubeAcademyGetNominationById(
        { ...fetcherOptions, ...variables },
        signal,
      ),
    ...options,
    ...queryOptions,
  });
};

export type CubeAcademyUpdateNominationPathParams = {
  nominationId: string;
};

export type CubeAcademyUpdateNominationError = Fetcher.ErrorWrapper<undefined>;

export type CubeAcademyUpdateNominationRequestBody = {
  /**
   * Must be a valid nominee_id
   */
  nominee_id?: string;
  reason?: string;
  /**
   * Must be one of the following values: very_unfair,unfair,not_sure,fair,very_fair
   */
  process?: string;
};

export type CubeAcademyUpdateNominationVariables = {
  body?: CubeAcademyUpdateNominationRequestBody;
  pathParams: CubeAcademyUpdateNominationPathParams;
} & CubeContext["fetcherOptions"];

/**
 * Update a specific existing nominiation
 */
export const fetchCubeAcademyUpdateNomination = (
  variables: CubeAcademyUpdateNominationVariables,
  signal?: AbortSignal,
) =>
  cubeFetch<
    Responses.Nomination,
    CubeAcademyUpdateNominationError,
    CubeAcademyUpdateNominationRequestBody,
    {},
    {},
    CubeAcademyUpdateNominationPathParams
  >({
    url: "/api/nomination/{nominationId}",
    method: "put",
    ...variables,
    signal,
  });

/**
 * Update a specific existing nominiation
 */
export const useCubeAcademyUpdateNomination = (
  options?: Omit<
    reactQuery.UseMutationOptions<
      Responses.Nomination,
      CubeAcademyUpdateNominationError,
      CubeAcademyUpdateNominationVariables
    >,
    "mutationFn"
  >,
) => {
  const { fetcherOptions } = useCubeContext();
  return reactQuery.useMutation<
    Responses.Nomination,
    CubeAcademyUpdateNominationError,
    CubeAcademyUpdateNominationVariables
  >({
    mutationFn: (variables: CubeAcademyUpdateNominationVariables) =>
      fetchCubeAcademyUpdateNomination({ ...fetcherOptions, ...variables }),
    ...options,
  });
};

export type CubeAcademyDeleteNominationPathParams = {
  nominationId: string;
};

export type CubeAcademyDeleteNominationError = Fetcher.ErrorWrapper<undefined>;

export type CubeAcademyDeleteNominationVariables = {
  pathParams: CubeAcademyDeleteNominationPathParams;
} & CubeContext["fetcherOptions"];

/**
 * Delete a specific existing nomination
 */
export const fetchCubeAcademyDeleteNomination = (
  variables: CubeAcademyDeleteNominationVariables,
  signal?: AbortSignal,
) =>
  cubeFetch<
    Responses.Deletion,
    CubeAcademyDeleteNominationError,
    undefined,
    {},
    {},
    CubeAcademyDeleteNominationPathParams
  >({
    url: "/api/nomination/{nominationId}",
    method: "delete",
    ...variables,
    signal,
  });

/**
 * Delete a specific existing nomination
 */
export const useCubeAcademyDeleteNomination = (
  options?: Omit<
    reactQuery.UseMutationOptions<
      Responses.Deletion,
      CubeAcademyDeleteNominationError,
      CubeAcademyDeleteNominationVariables
    >,
    "mutationFn"
  >,
) => {
  const { fetcherOptions } = useCubeContext();
  return reactQuery.useMutation<
    Responses.Deletion,
    CubeAcademyDeleteNominationError,
    CubeAcademyDeleteNominationVariables
  >({
    mutationFn: (variables: CubeAcademyDeleteNominationVariables) =>
      fetchCubeAcademyDeleteNomination({ ...fetcherOptions, ...variables }),
    ...options,
  });
};

export type QueryOperation =
  | {
      path: "/api/nominee";
      operationId: "cubeAcademyRetrieveNomineeList";
      variables: CubeAcademyRetrieveNomineeListVariables;
    }
  | {
      path: "/api/nomination";
      operationId: "cubeAcademyGetAllNominations";
      variables: CubeAcademyGetAllNominationsVariables;
    }
  | {
      path: "/api/nomination/{nominationId}";
      operationId: "cubeAcademyGetNominationById";
      variables: CubeAcademyGetNominationByIdVariables;
    };
