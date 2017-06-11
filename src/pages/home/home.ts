import { FoodFiltersModalPage } from './../food-filters-modal/food-filters-modal';
import { Component } from '@angular/core';
import { NavController, ModalController, PopoverController, ViewController } from 'ionic-angular';
import { HomeViewEnum } from "../../providers/enum";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  enumHomeView = HomeViewEnum;
  homeView = HomeViewEnum.Grid;
  filteredFoods = [];
  filters = {
    categories: []
  }
  allFoods = [
    { id: 1, name: 'Name 1', description: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.', price: 69, categoryId: 1 },
    { id: 2, name: 'Name 2', description: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.', price: 169, categoryId: 1 },
    { id: 3, name: 'Name 3', description: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.', price: 199, categoryId: 4 },
    { id: 4, name: 'Name 4', description: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.', price: 99, categoryId: 3 },
  ];

  constructor(public navCtrl: NavController, private modalCtrl: ModalController, public popoverCtrl: PopoverController) {
    this.filteredFoods = this.allFoods;
  }

  presentFoodFiltersModal() {
    let modal = this.modalCtrl.create(FoodFiltersModalPage, this.filters.categories);
    modal.onDidDismiss((data) => {
      if (data && data.length > 0) {
        this.filters.categories = data;
        this.filteredFoods = this.allFoods.filter(f => this.filters.categories.indexOf(f.categoryId) > -1);
      } else {
        this.filteredFoods = this.allFoods;
      }
    });
    modal.present();
  }

  presentEyePopover(event) {
    let popover = this.popoverCtrl.create(HoemViewPopoverPage);
    popover.onDidDismiss((data) => {
      this.homeView = data;
    })
    popover.present({ ev: event });
  }

}

@Component({
  template: `
    <ion-list>
      <ion-list-header>View</ion-list-header>
      <button ion-item icon-left (click)="close(enumHomeView.Grid)"><ion-icon name="grid"></ion-icon> Grid</button>
      <button ion-item icon-left (click)="close(enumHomeView.List)"><ion-icon name="list"></ion-icon> List</button>
    </ion-list>
  `
})
export class HoemViewPopoverPage {

  enumHomeView = HomeViewEnum;

  constructor(public viewCtrl: ViewController) { }

  close(selectedHomeView) {
    this.viewCtrl.dismiss(selectedHomeView);
  }
}