import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesasViewComponent } from './mesas-view.component';

describe('MesasViewComponent', () => {
  let component: MesasViewComponent;
  let fixture: ComponentFixture<MesasViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesasViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesasViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
