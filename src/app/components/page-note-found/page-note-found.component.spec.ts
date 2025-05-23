import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNoteFoundComponent } from './page-note-found.component';

describe('PageNoteFoundComponent', () => {
  let component: PageNoteFoundComponent;
  let fixture: ComponentFixture<PageNoteFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageNoteFoundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNoteFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
