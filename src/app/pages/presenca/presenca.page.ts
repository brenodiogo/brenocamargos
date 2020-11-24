import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Convidados } from 'src/app/data/convidados';

@Component({
  selector: 'app-presenca',
  templateUrl: './presenca.page.html',
  styleUrls: ['./presenca.page.scss'],
})
export class PresencaPage implements OnInit {

  public listaDePresenca = (new Convidados()).ListaDePresenca;

  constructor(private menu: MenuController) { }

  ngOnInit() {
    this.menu.close();
  }

}
