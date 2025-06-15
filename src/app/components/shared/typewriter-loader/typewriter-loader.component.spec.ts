import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypewriterLoaderComponent } from './typewriter-loader.component';

describe('TypewriterLoaderComponent', () => {
  let component: TypewriterLoaderComponent;
  let fixture: ComponentFixture<TypewriterLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TypewriterLoaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypewriterLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
