import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll'; 
import {CommonModule} from "@angular/common";


import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { RepositoriesContainerComponent } from './repositories-container/repositories-container.component';
import { RepositoryComponent } from './repository/repository.component';
import { ThousandsFormatterPipe } from './pipes/thousands-formatter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RepositoriesContainerComponent,
    RepositoryComponent,
    ThousandsFormatterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
