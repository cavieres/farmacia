import { Component, OnInit } from '@angular/core';
import { MedicineService } from './medicine.service';

@Component({
    selector: 'medicines',
    template: '<h2>{{name}}</h2>'
})

export class MedicinesComponent implements OnInit {
    name = '';

    constructor(medicineService: MedicineService) {
        this.name = medicineService.medicineName;
    }

    ngOnInit(): void {

    }
}