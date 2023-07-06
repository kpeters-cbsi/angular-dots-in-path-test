import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponentComponent } from './test-component/test-component.component';

const routes: Routes = [
  { path: ':id', component: TestComponentComponent },
  {
    path: 'testpath',
    loadChildren: () =>
      import('./testpath/testpath.module').then((m) => m.TestpathModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
