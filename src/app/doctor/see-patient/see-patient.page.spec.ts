import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeePatientPage } from './see-patient.page';

describe('SeePatientPage', () => {
  let component: SeePatientPage;
  let fixture: ComponentFixture<SeePatientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeePatientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeePatientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
