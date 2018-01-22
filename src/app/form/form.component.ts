import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

// class User{
//   id: number;
//   name: string;
//   bdate: any;
//   diet: string;
// }

export class FormComponent implements OnInit {
  private usersList = [];

  constructor() { }

  ngOnInit() {

  }

  addTraveler() {

  }

}
