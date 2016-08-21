import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { routing }        from './app.routing';

import { AppComponent } from './app.component';
import { ExampleThingComponent } from './components/exampleThing/example-thing.component';
import { AboutComponent } from './components/about/about.component';

import { ExampleService } from './services/example.service';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    AppComponent,
    ExampleThingComponent,
    AboutComponent
  ],
  providers: [
    ExampleService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
