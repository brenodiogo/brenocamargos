import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PresencaPage } from './presenca.page';

describe('PresencaPage', () => {
  let component: PresencaPage;
  let fixture: ComponentFixture<PresencaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresencaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PresencaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
