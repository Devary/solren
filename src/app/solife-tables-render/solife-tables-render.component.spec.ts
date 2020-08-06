import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolifeTablesRenderComponent } from './solife-tables-render.component';

describe('SolifeTablesRenderComponent', () => {
  let component: SolifeTablesRenderComponent;
  let fixture: ComponentFixture<SolifeTablesRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolifeTablesRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolifeTablesRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
