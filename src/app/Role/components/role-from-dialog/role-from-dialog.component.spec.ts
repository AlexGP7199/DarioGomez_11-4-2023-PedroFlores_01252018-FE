import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleFromDialogComponent } from './role-from-dialog.component';

describe('RoleFromDialogComponent', () => {
  let component: RoleFromDialogComponent;
  let fixture: ComponentFixture<RoleFromDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoleFromDialogComponent]
    });
    fixture = TestBed.createComponent(RoleFromDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
