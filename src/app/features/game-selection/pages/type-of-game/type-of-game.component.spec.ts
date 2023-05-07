import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOfGameComponent } from './type-of-game.component';

describe('TypeOfGameComponent', () => {
  let component: TypeOfGameComponent;
  let fixture: ComponentFixture<TypeOfGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeOfGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeOfGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
