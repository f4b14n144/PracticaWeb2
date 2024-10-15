import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcursosComponent } from './acursos.component';

describe('AcursosComponent', () => {
  let component: AcursosComponent;
  let fixture: ComponentFixture<AcursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcursosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
