import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ImageSliderComponent} from './image-slider.component';

const routes: Routes = [
    {
        path: '', component: ImageSliderComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ImageSliderRoutingModule {
}
