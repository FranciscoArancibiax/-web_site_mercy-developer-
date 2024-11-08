import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SWOficinaComponent } from './swoficina.component';

describe('SWOficinaComponent', () => {
  let component: SWOficinaComponent;
  let fixture: ComponentFixture<SWOficinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SWOficinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SWOficinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
