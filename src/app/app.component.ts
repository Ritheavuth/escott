import { Component, OnInit } from '@angular/core';
import { LaundryService } from '../services/laundry.service';
import { Laundry } from '../models/laundry';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  LaundryMachines : Laundry[] = [];

  constructor(private service : LaundryService) {
    
  }

  ngOnInit(){
    this.getDataFromAPI();
  }

  getDataFromAPI(){
    this.service.getLaundryData().subscribe(res => {
      this.LaundryMachines = res;
    })
  }

}