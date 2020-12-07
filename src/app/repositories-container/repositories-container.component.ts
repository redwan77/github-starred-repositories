import { Component, OnInit } from '@angular/core';
import { RepositoryService } from 'src/services/repository.service';
import { Repository } from 'src/models/Repository';
import { RepositoryApiAdapter } from 'src/models/RepositoryApiAdapter';

@Component({
  selector: 'app-repositories-container',
  templateUrl: './repositories-container.component.html',
  styleUrls: ['./repositories-container.component.css']
})
export class RepositoriesContainerComponent implements OnInit {

  private repositories: Array<Repository>;
  private pageIndex = 1;
  private isScrolling = false;

  constructor(private service: RepositoryService) {
    this.repositories = new Array<Repository>();
  }

  ngOnInit() {
    this.loadRepositories(this.pageIndex);
  }

  // the methode to invoke when the user si at the buttom of the page. 
  // increment the pageIndex and loadRepositories based on the new Index .
  // set the boolean isScrolling to true to show the "Loading more repositories ..." label. 
  public onScroll(): void {
    this.isScrolling = true;
    this.pageIndex++;
    this.loadRepositories(this.pageIndex);
  }

  // Load the repositories according to the page number into the array of repositories 
  private loadRepositories(pageIndex: number): void {
    this.service.getRepositories(pageIndex).subscribe(
      (response: any) => {
        let repos = response.items;
        for (let i = 0; i < repos.length; i++) {
          this.repositories.push(RepositoryApiAdapter.adapte(repos[i]));
        }
        this.isScrolling = false;
      }
    );
  }
}
