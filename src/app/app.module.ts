import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroFormComponent } from './heroes/hero-form/hero-form.component';
import { MyInputComponent } from './html/element/my-input/my-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent,
    MyInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
