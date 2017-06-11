import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodFiltersModalPage } from './food-filters-modal';

@NgModule({
  declarations: [
    FoodFiltersModalPage,
  ],
  imports: [
    IonicPageModule.forChild(FoodFiltersModalPage),
  ],
  exports: [
    FoodFiltersModalPage
  ]
})
export class FoodFiltersModalPageModule {}
