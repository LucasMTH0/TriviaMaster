import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SelectCategoryComponent } from './select-category.component';

describe('SelectCategoryComponent', () => {
  let component: SelectCategoryComponent;
  let fixture: ComponentFixture<SelectCategoryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SelectCategoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
