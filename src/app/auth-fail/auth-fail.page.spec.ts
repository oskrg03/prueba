import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuthFailPage } from './auth-fail.page';

describe('AuthFailPage', () => {
  let component: AuthFailPage;
  let fixture: ComponentFixture<AuthFailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthFailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthFailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
