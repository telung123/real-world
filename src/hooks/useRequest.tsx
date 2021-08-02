/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import useSWR, { SWRConfiguration, SWRResponse } from 'swr'
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

/**
 * @see https://github.com/vercel/swr/blob/master/examples/axios-typescript/libs/useRequest.ts
 */

export type GetRequest = AxiosRequestConfig | null

export interface Return<Data, Error>
  extends Pick<
    SWRResponse<AxiosResponse<Data>, AxiosError<Error>>,
    'isValidating' | 'revalidate' | 'error' | 'mutate'
  > {
  data: Data | undefined
  response: AxiosResponse<Data> | undefined
  isLoading: boolean
}

export interface Config<Data = unknown, Error = unknown>
  extends Omit<
    SWRConfiguration<AxiosResponse<Data>, AxiosError<Error>>,
    'initialData'
  > {
  initialData?: Data
}

export default function useRequest<Data = unknown, Error = unknown>(
  request: GetRequest,
  { initialData, ...config }: Config<Data, Error> = {},
): Return<Data, Error> {
  const {
    data: response,
    error,
    isValidating,
    revalidate,
    mutate,
  } = useSWR<AxiosResponse<Data>, AxiosError<Error>>(
    request && JSON.stringify(request),
    /**
     * NOTE: Typescript thinks `request` can be `null` here, but the fetcher
     * function is actually only called by `useSWR` when it isn't.
     */
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    async () => await axios(request!),
    {
      ...config,
      initialData: initialData && {
        status: 200,
        statusText: 'InitialData',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        config: request!,
        headers: {},
        data: initialData,
      },
    },
  )

  return {
    data: response?.data,
    response,
    error,
    isValidating,
    isLoading: !response?.data && !error,
    revalidate,
    mutate,
  }
}
