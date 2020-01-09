import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './components/article/article-list/article-list.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ArticleListComponent
  },
  {
    path:'article',
    component: ArticleDetailComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }