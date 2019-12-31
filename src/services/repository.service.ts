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

  // configure the URL by adding a page index and the date of a month ago from the current date as query string parameters 
  private adapteUrl(pageIndex: number): string {
    const currentDate = new Date().setMonth(new Date().getMonth() - 1);
    const dateOfMonthAgo = this.pip.transform(currentDate, 'yyyy-MM-dd');
    const url = this.baseGithubEndPoint + '?q=created:>' + dateOfMonthAgo + '&sort=stars&order=desc&page=' + pageIndex;
    return url;
  }

  // send an HTTP GET methode to the api end-point using the configured url from the adapteUrl methode
  public getRepositories(pageIndex: number): Observable<any> {
    let url = this.adapteUrl(pageIndex);
    return this.http.get(url);
  }

}
