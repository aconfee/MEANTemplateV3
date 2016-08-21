// Angular components
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule }     from '@angular/http';
import { routing }        from './app.routing';
import 'rxjs/add/operator/toPromise';

// Application components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ExampleThingComponent } from './components/exampleThing/example-thing.component';

// Application services
import { ExampleService } from './services/example.service';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    HttpModule
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
