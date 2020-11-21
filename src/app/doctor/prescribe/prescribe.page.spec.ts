import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrescribePage } from './prescribe.page';

describe('PrescribePage', () => {
  let component: PrescribePage;
  let fixture: ComponentFixture<PrescribePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescribePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrescribePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
