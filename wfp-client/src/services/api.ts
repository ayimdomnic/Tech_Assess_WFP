import { ApiMethod, KeyValue} from "../helpers/types";

export class ApiService {
    private _method: ApiMethod | undefined;
    private _headers: string[][] = [];

    constructor(private _authToken?: string) {
    }

    get authToken(): string | undefined {
        return this._authToken
    }

    set authToken(newAuthToken) {
        this._authToken = newAuthToken;
    }

    get headers(): string[][] {
        return this._headers;
    }
    set method(newMethod: ApiMethod) {
        this._method = newMethod
    }

    public setHeaders(headers: KeyValue<string, string>[]): ApiService {
        for (const i in headers) {
            if (headers[i].hasOwnProperty('key') && headers[i].hasOwnProperty('value')) {
                this._headers.push([headers[i].key, headers[i].value])
            }
        }
        return this;
    }

    public resetHeaders():void {
        this._headers = [];
    }

    public setMethod(newMethod: ApiMethod): ApiService {
        this._method = newMethod;
        return this;
    }

    public request<T>(body: T): RequestInit {
        return {
            headers: this._headers,
            method: this._method,
            body: JSON.stringify(body)
        }
    }

}

export class RequestBody<T> {
    constructor(private _requestBody: T) {
    }

    get requestBody(): T {
        return this._requestBody;
    }

    set requestBody(newRequestBody) {
        this._requestBody = newRequestBody
    }
}

export default ApiService;