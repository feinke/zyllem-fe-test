import { Component, OnInit, OnDestroy } from '@angular/core';
import { ZyllemApiService } from '../../../app.service';
import { Article, ArticleType } from '../../../model/article';
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
  currentArticleType: ArticleType = null;
  subscriptions: Subscription[] = [];

  ngOnInit() {
    this.getArticles();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  getArticles(type?: ArticleType) {
    let subscription = this.zylemApiService.getArticles().subscribe((articles) => {
      const formattedArticles = articles.map((article) => {
        article.publishedAt = moment(article.publishedAt).format('MMMM DD, YYYY');
        return article;
      });

      if (type) {
        const filteredArticle = this.filterArticle(articles, type);
        this.articles$.next(filteredArticle);
      }
      else {
        this.articles$.next(formattedArticles);
      }
    });

    this.subscriptions.push(subscription);
  }

  filterArticle(articles:Article[], type: ArticleType | null) {
    return articles.filter((article) => {
      return article.type === type;
    });
  }

  setArticle(article: Article) {
    this.articleService.setSelectedArticle(article);
    this.router.navigate(['/article']);
  }

}
