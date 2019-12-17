export type ApiHeader = {
    key: string;
    value: string;
}

export type KeyValue<T, U> = {
    key: T;
    value: U;
}

export type ApiMethod =  "POST" | "GET";

export type ApiResult = "success" | "failure";

export type ApiError = {
  ErrorCode: string,
  Description: string,
};

export type ApiResponse<T> = {
  Result: ApiResult,
  Response: T | ApiError,
};

export type ApiLifeExpectancyResponse = {
  region: string;
  gho: string;
  gender: string;
  year: number,
  number_of_years: number,
};