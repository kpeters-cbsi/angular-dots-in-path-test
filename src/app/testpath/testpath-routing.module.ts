import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowIdComponent } from './show-id/show-id.component';

const routes: Routes = [
  {
    path: '',
    children: [{ path: ':id', component: ShowIdComponent }],
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestpathRoutingModule {}
