import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadeCrudComponent } from './atividade-crud.component';

describe('AtividadeCrudComponent', () => {
  let component: AtividadeCrudComponent;
  let fixture: ComponentFixture<AtividadeCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtividadeCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadeCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
