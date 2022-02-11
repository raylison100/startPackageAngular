import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutRoutingModule } from './layout.component';

describe('LayoutRoutingModule', () => {
  let component: LayoutRoutingModule;
  let fixture: ComponentFixture<LayoutRoutingModule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutRoutingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutRoutingModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
