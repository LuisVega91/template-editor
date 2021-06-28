import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  form: any = {};

  constructor() {
    this.form = JSON.parse(localStorage.getItem('form')) || {
      titulo: 'ESCUELA / DOMINICAL',
      subTitulo: 'SERVICIOS:',
      item: 'Domingos: 8:00 am - 12:00 am',
      item2: 'Jueves y Sabados: 6:00 pm - 8:00 pm',
      footer: 'EL CARMELO CALLE BOGOTÁ MZ J LOTE 2 1ER PISO',
      item3: 'Ayunos: 9:00 am - 12:00 pm',
      footer2: 'CARTAGENA - BOLIVAR',
    };
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    localStorage.setItem('form', JSON.stringify(this.form));
  }

}
