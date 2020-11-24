import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Informacoes } from 'src/app/data/informacoes';

@Component({
  selector: 'app-informacoes',
  templateUrl: './informacoes.page.html',
  styleUrls: ['./informacoes.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InformacoesPage implements OnInit {
  
  public listaDeInformacoes = (new Informacoes()).ListaDeInformacoes;

  constructor(private menu: MenuController) { }

  ngOnInit() {
    this.menu.close();
  }

}
