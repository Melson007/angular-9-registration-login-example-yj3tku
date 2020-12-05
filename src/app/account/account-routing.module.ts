import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LayoutComponent } from "./layout.component";
import { LoginComponent } from "./login.component";
import { RegisterComponent } from "./register.component";

import { MatGridListModule } from "@angular/material/grid-list";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "login ", component: LoginComponent },
      { path: "register", component: RegisterComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  MatGridListModule,
  exports: [RouterModule]
})
export class AccountRoutingModule {}
