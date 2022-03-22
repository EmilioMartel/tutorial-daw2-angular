import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author-component',
  templateUrl: './author-component.component.html',
  styleUrls: ['./author-component.component.css']
})
export class AuthorComponentComponent implements OnInit {
  authorName = "Emilio Martel Díaz";
  link = "https://github.com/EmilioMartel/tutorial-daw2-angular";

  constructor() { }

  ngOnInit(): void {
  }

}
