import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common'

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  private pip = new DatePipe('en-US');
  private baseGithubEndPoint = 'https://api.github.com/search/repositories';

  constructor(private http: HttpClient) {
    this.pip = new DatePipe('en-US');
  }


  private adapteEndPoint(pageIndex: number): string {
    const currentDate = new Date().setMonth(new Date().getMonth() - 1);
    let date = this.pip.transform(currentDate, 'yyyy-MM-dd');
    let url = this.baseGithubEndPoint + '?q=created:>' + date + '&sort=stars&order=desc&page=' + pageIndex;
    console.log(url) ;
    return url;
  }

  public getRepositories(pageIndex: number): Observable<any> {
    let url = this.adapteEndPoint(pageIndex);
    return this.http.get(url);
  }

}
