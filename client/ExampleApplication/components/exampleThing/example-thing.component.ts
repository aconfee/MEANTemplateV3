import { Component, Input, OnInit } from '@angular/core';

import { ExampleService } from '../../services/example.service';

import { Person } from '../../viewModels/person.ts';

@Component({
  selector: 'example-thing',
  templateUrl: './example-thing.component.html'
})

export class ExampleThingComponent implements OnInit {
  title: string = 'Title In ExampleThing';
  people: Person[];

  @Input()
  text: string;

  constructor(private exampleService: ExampleService) {
  }

  ngOnInit(): void {
   this.exampleService.getData().then(people => this.people = people);
  }
}
