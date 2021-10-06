import { Component, OnInit } from '@angular/core';
import {DataStorageService} from "../shared/data-storage.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private dataStorageService:DataStorageService) { }

  onSaveData(){
this.dataStorageService.storeProducts();
  }
  onFetchData(){
    this.dataStorageService.fetchProducts();
  }
  ngOnInit(): void {
  }

}
