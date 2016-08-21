import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { routing }        from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ExampleThingComponent } from './components/exampleThing/example-thing.component';

import { ExampleService } from './services/example.service';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    ExampleThingComponent,
    HomeComponent,
    AboutComponent,
    AppComponent
  ],
  providers: [
    ExampleService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
