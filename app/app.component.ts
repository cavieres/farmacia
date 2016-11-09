import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <a routerLink="/dashboard">Dashboard</a>
        <a routerLink="/medicamentos">Medicamentos</a>
        <router-outlet></router-outlet>
    ` // ex <medicines></medicines>
})

export class AppComponent {
    title = 'Farmacia Real';
}