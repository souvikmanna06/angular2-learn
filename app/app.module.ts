
import { NgModule }          from '@angular/core';
import { BrowserModule }     from '@angular/platform-browser';

import { SharedModule }      from './shared/shared.module';
import { UsersModule }       from './users/users.module';

import { AppComponent }      from './app.component';
import { HomeComponent }     from './home.component';
import { NavBarComponent }   from './navbar.component';
import { NotFoundComponent } from './not-found.component';

import { usersRouting }      from './users/users.routing';

import { routing }           from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        SharedModule,
        UsersModule,
        usersRouting,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        NavBarComponent,
        NotFoundComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { 
}