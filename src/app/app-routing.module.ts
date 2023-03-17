import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "info", pathMatch: "full" },
  { path: "info", loadChildren: () => import("../pages/info/info.module").then(m => m.InfoModule) },
  { path: "login", loadChildren: () => import("../pages/login/login.module").then(m => m.LoginModule) },
  { path: "projects", loadChildren: () => import("../pages/projects/projects.module").then(m => m.ProjectsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
