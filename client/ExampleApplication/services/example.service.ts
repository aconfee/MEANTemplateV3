import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { ExampleVm } from '../viewModels/exampleVm.ts';

@Injectable()
export class ExampleService {

  private dataUrl = 'api/testdata/57b1702a03e6b25ae9f99e42';

  constructor(private http: Http) { }

  getData(): Promise<ExampleVm>{

    return this.http.get(this.dataUrl)
     .toPromise()
     .then(response => response.json() as ExampleVm)
     .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
