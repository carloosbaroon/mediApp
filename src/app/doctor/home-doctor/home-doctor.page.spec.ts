import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeDoctorPage } from './home-doctor.page';

describe('HomeDoctorPage', () => {
  let component: HomeDoctorPage;
  let fixture: ComponentFixture<HomeDoctorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDoctorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeDoctorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
