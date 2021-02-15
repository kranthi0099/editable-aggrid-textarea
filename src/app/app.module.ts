import { NgModule } from "@angular/core";
import { AgGridModule } from "ag-grid-angular";

import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AgGridModule.withComponents([])],
  bootstrap: [AppComponent]
})
export class AppModule {}
