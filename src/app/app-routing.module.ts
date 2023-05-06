import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FlutterProjectsComponent } from './projects/flutter_projects/flutter-projects/flutter-projects.component';
import { WebProjectsComponent } from './projects/web_projectss/web-projects/web-projects.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'flutterprojects', component: FlutterProjectsComponent },
  { path: 'angularprojects', component: WebProjectsComponent },
  // { path: 'whatwedo', component: WhatwedoComponent },
  // { path: 'work', component:HowweworkComponent ,  },
  // { path: 'projects', component: ProjectsComponent,  },
  // { path: 'contact', component: ContacctComponent,  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
