import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { FuturisticLayoutComponent } from './futuristic-layout/futuristic-layout.component';
import { FuseLoadingBarComponent } from './components/fuse-loading-bar/fuse-loading-bar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    LayoutComponent,
    FuseLoadingBarComponent,
    FuturisticLayoutComponent,
  ],
})
export class LayoutModule {}
