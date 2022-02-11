import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumCreatedComponent } from './album-created.component';

describe('AlbumCreatedComponent', () => {
  let component: AlbumCreatedComponent;
  let fixture: ComponentFixture<AlbumCreatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumCreatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
