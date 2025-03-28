import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorchartComponent } from './colorchart.component';

describe('ColorchartComponent', () => {
  let component: ColorchartComponent;
  let fixture: ComponentFixture<ColorchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorchartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
