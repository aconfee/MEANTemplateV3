import { browserDynamicPlatform } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';
console.log("ENV: " + process.env.ENV);
if (process.env.ENV === 'production') {
  console.log("enabling prod mode");
  enableProdMode();
}
browserDynamicPlatform().bootstrapModule(AppModule);
