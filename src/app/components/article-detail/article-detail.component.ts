import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../model/article';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit, OnDestroy {
  article: Article;
  subscriptions: Subscription[] = [];
  constructor(
    protected articleService: ArticleService
  ) { }

  ngOnInit() {
    let subscription = this.articleService.getSelectedArticle().subscribe((article) => {
      this.article = {...article};
    });

    this.subscriptions.push(subscription);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

}
