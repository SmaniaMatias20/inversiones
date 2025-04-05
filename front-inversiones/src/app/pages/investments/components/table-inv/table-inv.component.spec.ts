import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableInvComponent } from './table-inv.component';

describe('TableInvComponent', () => {
  let component: TableInvComponent;
  let fixture: ComponentFixture<TableInvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableInvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
