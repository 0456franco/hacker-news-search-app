import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ErrorHandlerComponent } from './error-handler.component';

describe('ErrorHandlerComponent', () => {
  
  let component: ErrorHandlerComponent;
  let fixture: ComponentFixture<ErrorHandlerComponent>;
  
  let data: any = {
    errorMessage : "There was an error."
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorHandlerComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue: data }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
