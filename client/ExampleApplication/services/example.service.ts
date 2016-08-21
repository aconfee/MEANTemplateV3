import { Injectable } from '@angular/core';

import { Person } from '../viewModels/person.ts';

@Injectable()
export class ExampleService {

  private exampleData: Person[] = [
    new Person('Adam'),
    new Person('Kim'),
    new Person('Max')
  ];

  getData(): Promise<Person[]>{
    return Promise.resolve(this.exampleData);
  }
}
