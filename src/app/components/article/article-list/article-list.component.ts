import { Component, OnInit, OnDestroy } from '@angular/core';
import { ZyllemApiService } from '../../../app.service';
import { Article } from '../../../model/article';
import { BehaviorSubject, Subscription } from 'rxjs';
import * as moment from 'moment';
import { ArticleService } from '../../../services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit, OnDestroy {

  constructor(
    protected zylemApiService: ZyllemApiService,
    protected articleService: ArticleService,
    protected router: Router
  ) { }

  articles$: BehaviorSubject<Article[]> = new BehaviorSubject([]);
  subscriptions: Subscription[] = [];

  ngOnInit() {
    this.getArticles();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription)=> {
      subscription.unsubscribe();
    })
  }

  getArticles() {
    let subscription = this.zylemApiService.getArticles().subscribe((articles) => {
      const formattedArticles = articles.map((article) => {
        article.publishedAt = moment(article.publishedAt).format('MMMM DD, YYYY');
        return article;
      });
      this.articles$.next(formattedArticles);
    });

    this.subscriptions.push(subscription);
  }

  setArticle(article:Article){
    this.articleService.setSelectedArticle(article);
    this.router.navigate(['/article']);
  }

}
