import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article/article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ArticleListComponent, ArticleDetailComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ArticleListComponent, ArticleDetailComponent]
})
export class ComponentsModule { }
