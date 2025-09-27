import { Component, OnInit } from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';

//Importacion del servicio photo
import {photo} from '../services/photo';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
   imports: [IonicModule, CommonModule],
})
export class GalleryComponent  implements OnInit {

//Se inyecta el servicio e el constructor
  constructor(public photo_service : photo) { }



 async ngOnInit() {
  await this.photo_service.load_Saved_imgs() 
 }

}
