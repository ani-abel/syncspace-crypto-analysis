import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class HttpGeneric {
  constructor(
    protected _baseURL: string,
    protected _httpClient: HttpClient,
  ) { }

  post<T, U>(payload: T, urlSegment: string): Observable<U> {
    return this._httpClient.post<U>(`${this._baseURL}/${urlSegment}`, payload);
  }

  get<U>(urlSegment: string): Observable<U> {
    return this._httpClient.get<U>(`${this._baseURL}/${urlSegment}`);
  }

  patch<T, U>(payload: T, urlSegment: string): Observable<U> {
    return this._httpClient.patch<U>(`${this._baseURL}/${urlSegment}`, payload);
  }

  delete<U>(urlSegment: string): Observable<U> {
    return this._httpClient.delete<U>(`${this._baseURL}/${urlSegment}`);
  }
}
