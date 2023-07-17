import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { HttpClientModule } from "@angular/common/http";
import { TrComponent } from './components/tr/tr.component';
import { TdComponent } from './components/td/td.component';
import { StringComponent } from './components/string/string.component';
import { HostDirective } from './directives/host.directive';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TrComponent,
    TdComponent,
    StringComponent,
    HostDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
