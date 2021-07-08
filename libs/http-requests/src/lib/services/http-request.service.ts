/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestStatus } from '@syncspace-crypto-analysis/graphql-config';
import { Observable } from 'rxjs';
import { retry, throttleTime } from 'rxjs/operators';
import { HttpGeneric } from './http-generic.service';

declare let process: any;
const env = process.env.NODE_ENV;

const apiRoot = (env === 'production') ? 
  'https://abel-ani.herokuapp.com' : 
  'http://localhost:3000';

export interface FileResponseDTO<T> {
  status: RequestStatus;
  data: T;
}
  
@Injectable({
  providedIn: 'root'
})
export class HttpRequestService extends HttpGeneric {

  constructor(private readonly httpClient: HttpClient) {
    super(apiRoot, httpClient);
  }

  uploadFile(file: File): Observable<FileResponseDTO<string>> {
    const formData = new FormData();
    formData.append('file', file);
    return this.post<FormData, FileResponseDTO<string>>(formData, `upload-file`)
      .pipe(
        retry(3),
        throttleTime(500)
      );
  }

  uploadMultipleFiles(files: File[]): Observable<FileResponseDTO<string[]>> {
    const formData = new FormData();
    for (const file of files) {
      formData.append('files[]', file);
    }
    return this.post<FormData, FileResponseDTO<string[]>>(formData, `upload-multiple-files`)
      .pipe(
        retry(3),
        throttleTime(500)
      );
  }
}
