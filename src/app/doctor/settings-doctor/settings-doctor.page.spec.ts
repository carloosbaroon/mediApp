import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SettingsDoctorPage } from './settings-doctor.page';

describe('SettingsDoctorPage', () => {
  let component: SettingsDoctorPage;
  let fixture: ComponentFixture<SettingsDoctorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsDoctorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsDoctorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
