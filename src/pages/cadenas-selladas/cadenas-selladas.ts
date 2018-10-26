import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Searchbar } from 'ionic-angular';
import { DetallesCadenasSelladasPage } from '../detalles-cadenas-selladas/detalles-cadenas-selladas';

@Component({
  selector: 'page-cadenas-selladas',
  templateUrl: 'cadenas-selladas.html'
})
export class CadenasSelladasPage {
  @ViewChild(Searchbar) searchBar: Searchbar;
  titles: string[];
  notes: string[];
  states: boolean[];
  icons: string[];
  colors: string[];
  hours: string[];
  showFilterItems: boolean;
  cadenasSelladas: Array<{title: string, note: string, state: boolean, icon: string, color: string, hour: string}>;
  constCadenas: Array<{title: string, note: string, state: boolean, icon: string, color: string, hour: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.icons = ['checkmark-circle', 'close-circle'];
    this.states  = [true, false];
    this.titles = ['SIACAM', 'Autorización de Instancias', 'Participaciones Municipios'];
    this.notes = ['Estimado usuario le informamos que se firmó correctamente. Instancia de solicitud de adecuación con Código de Barras 9efbb2ebdab64632aa67d6958879efbb2ebdab64632aa67d695887ddfd1ddfd1 el día 02 de agosto del 2018 a las 3:43 pm ', 
                  'Estimado usuario le informamos que no se firmó correctamente. Instancia de solicitud de presupuestal con Código de Barras 3c8780d8cf2a4d20a3c8780d8cf2a4d20a7a987cd21b52be97a987cd21b52be9 el día 23 de septiembre del 2018 a las 9:16 am'];
    this.colors = ['primary', 'danger'];
    this.hours = ['3:43 pm', '9:16 am'];

    this.cadenasSelladas = [];
    this.constCadenas = [];
    for(let i = 1; i < 11; i++) {
      let val = Math.floor(Math.random() * 2);
      this.cadenasSelladas.push({
        title: this.titles[Math.floor(Math.random() * this.titles.length)],
        note: this.notes[val],
        state: this.states[val],
        icon: this.icons[val],
        color: this.colors[val],
        hour: this.hours[val]
      });
    }
 
    this.constCadenas = this.cadenasSelladas;
    this.showFilterItems = false;    
  }

  actionShowDetails(event, item) {    
    this.showFilterItems = false;
    this.navCtrl.push(DetallesCadenasSelladasPage, {
      item: item
    });
    this.cadenasSelladas = this.constCadenas;
  }

  filterItems(event: any) {
    const val = event.target.value;    

    if (val && val.trim() != '') {
      this.cadenasSelladas = this.cadenasSelladas.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1) || (item.note.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }else{
      this.cadenasSelladas = this.constCadenas;
    }

  }

  actionShowFilterItems(event: any, flag: boolean){
    this.showFilterItems = flag;  
    this.searchBar.setFocus();  
    if(flag === false)
      this.cadenasSelladas = this.constCadenas;
  }
}
