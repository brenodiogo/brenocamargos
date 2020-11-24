import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PresentesPage } from './presentes.page';

describe('PresentesPage', () => {
  let component: PresentesPage;
  let fixture: ComponentFixture<PresentesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PresentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
