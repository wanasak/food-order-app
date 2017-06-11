import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the FoodFiltersModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-food-filters-modal',
  templateUrl: 'food-filters-modal.html',
})
export class FoodFiltersModalPage {

  categories = [
    { categoryId: 1, name: 'Soup' },
    { categoryId: 2, name: 'Deep Fried' },
    { categoryId: 3, name: 'Beef' },
    { categoryId: 4, name: 'Rice' },
    { categoryId: 5, name: 'Seafood' },
    { categoryId: 6, name: 'Drinks' },
    { categoryId: 7, name: 'Desserts' }
  ];
  selectedCategories = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.selectedCategories = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodFiltersModalPage');
  }

  onCategoryToggle(categoryId, $event) {
    if ($event.value)
      this.selectedCategories.push(categoryId);
    else {
      var removeIndex = this.selectedCategories.indexOf(categoryId);
      this.selectedCategories.splice(removeIndex, 1);
    }
  }

  onClickCancel() {
    this.viewCtrl.dismiss();
  }

  onClickOK() {
    this.viewCtrl.dismiss(this.selectedCategories);
  }

}
