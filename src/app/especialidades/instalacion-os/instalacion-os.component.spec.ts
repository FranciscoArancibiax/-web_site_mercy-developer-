import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalacionOSComponent } from './instalacion-os.component';

describe('InstalacionOSComponent', () => {
  let component: InstalacionOSComponent;
  let fixture: ComponentFixture<InstalacionOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstalacionOSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstalacionOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
