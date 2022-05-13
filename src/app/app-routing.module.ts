import {NgModule} from "@angular/core";
import { RouterModule, Routes} from "@angular/router";
import {WelcomeComponent} from "./welcome/welcome.component";
import {SignComponent} from "./auth/sign/sign.component";
import {LoginComponent} from "./auth/login/login.component";
import {TrainingComponent} from "./training/training.component";

const routes:Routes = [
  {
    path: '', component: WelcomeComponent
  },
  {
    path: 'signup', component: SignComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'training', component: TrainingComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
