import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Article } from '../model/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private selectedArticle$: BehaviorSubject<Article> = new BehaviorSubject(null);
  constructor() {

  }

  getSelectedArticle() {
    return this.selectedArticle$.asObservable();
  }

  setSelectedArticle(article: Article) {
    this.selectedArticle$.next(article);
  }
}
