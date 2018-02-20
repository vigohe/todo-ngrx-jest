import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { InputComponent } from './todo/components/input/input.component';
import { ListComponent } from './todo/components/list/list.component';
import { ItemComponent } from './todo/components/item/item.component';
import { TodoComponent } from './todo/containers/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ListComponent,
    ItemComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
