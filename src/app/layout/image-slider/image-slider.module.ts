import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageSliderComponent} from './image-slider.component';
import {ImageSliderRoutingModule} from './image-slider-routing.module';
import { PageHeaderModule } from './../../shared';
import { LightboxModule } from 'ngx-lightbox';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        ImageSliderRoutingModule,
        PageHeaderModule,
        LightboxModule,
        NgbCarouselModule,
        NgbAlertModule
    ],
    declarations: [ImageSliderComponent]
})
export class ImageSliderModule {}
