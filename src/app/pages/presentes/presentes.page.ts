import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-presentes',
  templateUrl: './presentes.page.html',
  styleUrls: ['./presentes.page.scss'],
})
export class PresentesPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
    this.menu.close();
  }

}
