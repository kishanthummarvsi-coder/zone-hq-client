import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanCard } from './kanban-card';

describe('KanbanCard', () => {
  let component: KanbanCard;
  let fixture: ComponentFixture<KanbanCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KanbanCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KanbanCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
