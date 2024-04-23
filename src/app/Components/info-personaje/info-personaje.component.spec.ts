import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPersonajeComponent } from './info-personaje.component';

describe('InfoPersonajeComponent', () => {
  let component: InfoPersonajeComponent;
  let fixture: ComponentFixture<InfoPersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoPersonajeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
