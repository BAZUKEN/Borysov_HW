import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-component',
  template: `
    <p>
      book-component works!
    </p>
  `,
  styleUrls: ['./book-component.component.css']
})
export class BookComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
