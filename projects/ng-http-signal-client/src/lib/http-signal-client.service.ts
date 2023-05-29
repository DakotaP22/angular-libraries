import { Signal, WritableSignal, Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, startWith } from 'rxjs';

export interface HttpSignalClientReponse<T> {
  loading: boolean;
  error: any | null;
  data: T | null;
}

const initialValue = {
  loading: true,
  error: null,
  data: null,
};

@Injectable()
export class HttpSignalClient {
  private _http: HttpClient = inject(HttpClient);

  get<T>(
    url: string
  ): Signal<HttpSignalClientReponse<T>> {
    const req$: Observable<HttpSignalClientReponse<T>> = this._http
      .get<T>(url)
      .pipe(
        map((data: T) => {
          return { loading: false, error: null, data };
        }),
        catchError((error) => of({ loading: false, error, data: null }))
      );

    return toSignal(req$, { initialValue });
  }
}
