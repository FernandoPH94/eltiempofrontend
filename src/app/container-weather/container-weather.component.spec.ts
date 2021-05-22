import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerWeatherComponent } from './container-weather.component';

describe('ContainerWeatherComponent', () => {
  let component: ContainerWeatherComponent;
  let fixture: ComponentFixture<ContainerWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerWeatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
