import { Repository } from './Repository';

export class RepositoryApiAdapter {

    /*
     the adapter pattern is used to adapt the data comming from the back-end service 
     with the model data in the front-end application so any changes on both sides requires modification only in the addapter class
    */
    public static adapte(item: any): Repository {
        return new Repository(
            item.name,
            item.owner.avatar_url,
            item.description,
            item.stargazers_count,
            item.open_issues_count,
            this.submitted(item.created_at),
            item.owner.login,
        );
    }

    private static submitted(createdAt: string): string {
        let createdDate = new Date(createdAt);
        let timeSinceCreated = this.diffrenceInDays(createdDate, new Date());
        return timeSinceCreated == 0 ? 'today' : timeSinceCreated + (timeSinceCreated == 1 ? ' day' : ' days');
    }

    private static diffrenceInDays(dt1: Date, dt2: Date): number {
        return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));
    }
}
