import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePage implements OnInit {
  @ViewChild("header") header: HTMLElement;
  @ViewChild("subcontent") subcontent: HTMLElement;


  details = ['mohamed', 'jack', 'joe doe', 'mohamed', 'jack', 'joe doe', 'mohamed', 'jack', 'joe doe', 'mohamed', 'jack', 'joe doe', 'mohamed', 'jack', 'joe doe', 'mohamed', 'jack', 'joe doe', 'mohamed', 'jack', 'joe doe', 'mohamed', 'jack', 'joe doe', 'mohamed', 'jack', 'joe doe', 'mohamed', 'jack', 'joe doe', 'mohamed', 'jack', 'joe doe', 'mohamed', 'jack', 'joe doe'];

  constructor(public element: ElementRef,
    public renderer: Renderer2) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.renderer.addClass(this.header['el'], 'animated-delay');
    this.renderer.addClass(this.subcontent['el'], 'animated-delay');
  }

  onContentScroll(event: any) {

    if (event.detail.scrollTop >= 50) {
      // scroll down
      this.renderer.setStyle(this.header['el'], 'top', '-76px');
      this.renderer.setStyle(this.subcontent['el'], 'position', 'fixed');
      this.renderer.setStyle(this.subcontent['el'], 'top', '0');
    } else {
      // scroll up(initial)
      this.renderer.setStyle(this.header['el'], 'top', '0px');
      this.renderer.removeStyle(this.subcontent['el'], 'position');
      this.renderer.removeStyle(this.subcontent['el'], 'top');
    }



  }

}
