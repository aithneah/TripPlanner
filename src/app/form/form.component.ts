import { Component, OnInit } from '@angular/core';
import {ICountries, ICountry} from '../interfaces';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Country} from '../Country';
import 'rxjs/add/operator/catch';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  countries: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/api/countries').subscribe(data => {
      this.countries = data;
        console.log(this.countries);
    },
      err => {
        console.log('Something went wrong with API get!');
      });

  }

  onCountrySelected($event) {

  }
  // addTraveler(); {
  //
  // }

}
