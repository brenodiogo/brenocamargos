import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
      path: 'informacoes',
      loadChildren: () => import('./pages/informacoes/informacoes.module').then( m => m.InformacoesPageModule)
  },
  {
    path: 'presenca',
    loadChildren: () => import('./pages/presenca/presenca.module').then( m => m.PresencaPageModule)
  },
  {
    path: 'presentes',
    loadChildren: () => import('./pages/presentes/presentes.module').then( m => m.PresentesPageModule)
  },
  {
    path: 'contato',
    loadChildren: () => import('./pages/contato/contato.module').then( m => m.ContatoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
