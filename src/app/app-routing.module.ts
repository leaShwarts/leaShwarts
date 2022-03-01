import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerClaimComponent } from './components/customer-claim/customer-claim.component';

const routes: Routes = [
  { path: '', component:CustomerClaimComponent , pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
