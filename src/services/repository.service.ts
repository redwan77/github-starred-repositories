import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common'

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  private pip: DatePipe;
  private baseGithubEndPoint = 'https://api.github.com/search/repositories';

  constructor(private http: HttpClient) {
    this.pip = new DatePipe('en-US');
  }

  // configure the URL by adding a page index and the date of 30 days ago from the current date as query string parameters 
  private adapteUrl(pageIndex: number): string {

    const todayDate = new Date();
    const dateOfMonthAgo = todayDate.setTime(todayDate.getTime() - 30 * 24 * 60 * 60 * 1000);
    const dateOfMonthAgoFormatted = this.pip.transform(dateOfMonthAgo, 'yyyy-MM-dd');
    const url = this.baseGithubEndPoint + '?q=created:>' + dateOfMonthAgoFormatted + '&sort=stars&order=desc&page=' + pageIndex;
    return url;
  }

  // send an HTTP GET methode to the api end-point using the configured url from the adapteUrl methode
  public getRepositories(pageIndex: number): Observable<any> {
    const url = this.adapteUrl(pageIndex);
    return this.http.get(url);
  }

}
