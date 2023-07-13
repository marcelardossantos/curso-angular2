import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteComandoComponent } from './componente-comando.component';

describe('ComponenteComandoComponent', () => {
  let component: ComponenteComandoComponent;
  let fixture: ComponentFixture<ComponenteComandoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteComandoComponent]
    });
    fixture = TestBed.createComponent(ComponenteComandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
