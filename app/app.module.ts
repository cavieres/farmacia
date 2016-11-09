import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import {  MedicinesComponent } from './medicines.component'

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        MedicinesComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule {}