import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ZyllemApiService } from './app.service';
import { ComponentsModule } from "./components/components.module";
import { AppRoutingModule } from './app-routing.module';
import { ArticleService } from './services/article.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    AppRoutingModule
  ],
  providers: [ZyllemApiService, ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
