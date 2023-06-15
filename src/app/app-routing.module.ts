import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FlutterProjectsComponent } from './projects/flutter_projects/flutter-projects/flutter-projects.component';
import { WebProjectsComponent } from './projects/web_projectss/web-projects/web-projects.component';
import { LoaderComponent } from './loader/loader.component';
import { ThirdPageComponent } from './sections/about/third_page/third-page/third-page.component';
import { ProjectsSectionComponent } from './sections/projects/projects-section/projects-section.component';
import { NinePageComponent } from './nine_page/nine-page/nine-page.component';
import { TenPageComponent } from './ten_page/ten-page/ten-page.component';
import { ReactComponent } from './projects/react/react.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'flutterprojects', component: FlutterProjectsComponent },
  { path: 'angularprojects', component: WebProjectsComponent },
  { path: 'reactprojects', component: ReactComponent },
  { path: 'about', component: ThirdPageComponent },
  { path: 'projects', component: ProjectsSectionComponent },
  { path: 'skills', component: NinePageComponent },
  { path: 'expirience', component: TenPageComponent },
  // { path: 'work', component:HowweworkComponent ,  },
  // { path: 'projects', component: ProjectsComponent,  },
  // { path: 'contact', component: ContacctComponent,  },
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
