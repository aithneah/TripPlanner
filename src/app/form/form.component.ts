import {Component, Directive, Input, OnInit} from '@angular/core';
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
  userNameModel: string;
  userBDateModel: any;
  userDietModel: string;

  users: any[]=[];

  countries: any;
  countryCities: any;
  tripCities: any[] = [];
  startDate: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/api/countries').subscribe(data => {
      this.countries = data;
        console.log(this.countries);
    },
      err => {
        console.log('Something went wrong with API get!');
      });
    this.onCountrySelected(1);
  }


  onCountrySelected(value) {
    this.http.get('api/cities/country/' + value).subscribe(data => {
      this.countryCities = data;
        console.log(this.countryCities);
    },
      err => {
        console.log('Something went wrong with API get!');
      });
  }

  onDateSubmit(value) {
    this.startDate = value;
    console.log(this.startDate);
  }

  addDestinationPoint(val) {
        this.tripCities.push({'id': val});
        console.log(this.tripCities);
  }

  onTripmateSubmit() {
    this.users.push({name: this.userNameModel, bdate: this.userBDateModel, diet: this.userDietModel});
  }
}

