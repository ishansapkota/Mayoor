import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { CarouselComponent, CarouselInnerComponent, CarouselItemComponent, ThemeDirective } from '@coreui/angular';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent{

  // slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });

  // ngOnInit(): void {
  //   this.slides[0] = {
  //     src: './assets/img/angular.jpg'
  //   };
  //   this.slides[1] = {
  //     src: './assets/img/react.jpg'
  //   };
  //   this.slides[2] = {
  //     src: './assets/img/vue.jpg'
  //   };
  // }

  // onItemChange($event: any): void {
  //   console.log('Carousel onItemChange', $event);
  // }

}
