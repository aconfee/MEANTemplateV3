import { Component, Input, OnInit } from '@angular/core';
import { ExampleService } from '../../services/example.service';
import { ExampleVm } from '../../viewModels/exampleVm.ts';

@Component({
  selector: 'example-thing',
  templateUrl: './example-thing.component.html'
})

export class ExampleThingComponent implements OnInit {
  title: string = 'Title In ExampleThing';
  exampleData: ExampleVm = new ExampleVm();

  @Input()
  text: string;

  constructor(private exampleService: ExampleService) {
  }

  ngOnInit(): void {
   this.exampleService.getData().then((data) => {
      this.exampleData = data;
      console.log(this.exampleData.data[0].name);
    });
  }
}
