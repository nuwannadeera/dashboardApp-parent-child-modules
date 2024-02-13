import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlistchildComponent } from './userlistchild.component';

describe('UserlistchildComponent', () => {
  let component: UserlistchildComponent;
  let fixture: ComponentFixture<UserlistchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserlistchildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserlistchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
