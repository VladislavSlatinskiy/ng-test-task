import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TranslatorComponent } from './form/translator/translator.component';
import { HistoryItemComponent } from './history-item/history-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TranslatorComponent,
    HistoryItemComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
