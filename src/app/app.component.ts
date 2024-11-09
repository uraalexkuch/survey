import {AfterViewInit, Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DczFooterFullComponent} from './standart/dcz-footer-full/dcz-footer-full.component';
import {DczHeadNewComponent} from './standart/dcz-head-new/dcz-head-new.component';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DczHeadNewComponent, DczFooterFullComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'survey';
  isMobile: boolean = false;
  isTablet: boolean = false;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private deviceService: DeviceDetectorService
  ) {}

  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile();
    this.isTablet = this.deviceService.isTablet();
  }

  setHeight() {
    const header = this.el.nativeElement.querySelector('app-dcz-head-new');
    const footer = this.el.nativeElement.querySelector('app-dcz-footer-full');

    if (footer && header) {
      const footerHeightPx = footer.offsetHeight;
      const headerHeightPx = header.offsetHeight;

      const contentWrapper = this.el.nativeElement.querySelector('.content-wrapper');

      if (!this.isMobile && !this.isTablet) {
        // Встановлюємо мінімальну висоту для contentWrapper
        const minHeight = window.innerHeight - footerHeightPx - headerHeightPx;
        this.renderer.setStyle(contentWrapper, 'min-height', `${minHeight}px`);

        // Якщо контент не вписується в висоту, збільшуємо висоту contentWrapper
        if (contentWrapper.scrollHeight > minHeight) {
          this.renderer.setStyle(contentWrapper, 'height', `${contentWrapper.scrollHeight}px`);
        }

        // Встановлюємо відступ знизу для contentWrapper
        // this.renderer.setStyle(contentWrapper, 'padding-bottom', `${footerHeightPx}px`);
      }
    }
  }




  ngAfterViewInit(): void {
    // Ensure setHeight only executes if device is not a mobile or tablet
    // if (!this.isMobile && !this.isTablet) {
    this.setHeight();
    // }
  }
}
