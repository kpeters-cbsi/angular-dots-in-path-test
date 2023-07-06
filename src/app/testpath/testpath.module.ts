import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestpathRoutingModule } from './testpath-routing.module';
import { ShowIdComponent } from './show-id/show-id.component';

@NgModule({
  declarations: [
    ShowIdComponent
  ],
  imports: [CommonModule, TestpathRoutingModule],
})
export class TestpathModule {}
