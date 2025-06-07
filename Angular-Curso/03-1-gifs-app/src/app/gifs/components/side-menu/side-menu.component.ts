import { Component } from '@angular/core';
import { GifsSideMenuHeaderComponent } from './gifs-side-menu-header/gifs-side-menu-header.component';
import { GifsSideMenuOptionsComponent } from './gifs-side-menu-options/gifs-side-menu-options.component';

@Component({
  selector: 'side-menu',
  imports: [GifsSideMenuHeaderComponent, GifsSideMenuOptionsComponent],
  templateUrl: 'side-menu.component.html',
})
export class SideMenuComponent { }
