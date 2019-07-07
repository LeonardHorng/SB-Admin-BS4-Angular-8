import { Component } from '@angular/core';
import {IAlbum, IEvent, Lightbox, LIGHTBOX_EVENT, LightboxEvent, LightboxConfig} from 'ngx-lightbox';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent {
    public albums: Array<IAlbum>;
    private subscription: Subscription;
    constructor(
        private lightbox: Lightbox,
        private lightboxEvent: LightboxEvent,
        private lighboxConfig: LightboxConfig
    ) {
        this.albums = [];
        for (let i = 1; i <= 3; i++) {
            const src = './assets/images/image-' + i + '.jpg';
            const caption = 'Image ' + i + ' caption here';
            const thumb =  './assets/images/image-' + i + '.jpg';
            const album = {
                src: src,
                caption: caption,
                thumb: thumb
            };

            this.albums.push(album);
        }

        // set default config
        this.lighboxConfig.fadeDuration = 1;
    }

    open(index: number): void {
        this.subscription = this.lightboxEvent.lightboxEvent$.subscribe((event: IEvent) => this._onReceivedEvent(event));

        // override the default config
        this.lightbox.open(this.albums, index, {
            wrapAround: true,
            showImageNumberLabel: true,
            disableScrolling: true
        });
    }

    private _onReceivedEvent(event: IEvent): void {
        if (event.id === LIGHTBOX_EVENT.CLOSE) {
            this.subscription.unsubscribe();
        }
    }

}
