import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

export class CrudService {
    private entity: string;
    private http: HttpClient;

    constructor(http: any, entity: string) {
        this.entity = entity;
        this.http = http;
    }

    public list(params?: string): Observable<any> {
        return this.http.get(
            `${environment.API_URL}/${this.entity}${params ? `?${params}` : ''}`
        );
    }

    public created(data: any): Observable<any> {
        return this.http.post(
            `${environment.API_URL}/${this.entity}`, data);
    }

    public update(id: number, data: any): Observable<any> {
        return this.http.put(
            `${environment.API_URL}/${this.entity}/${id}`, data);
    }

    public show(id: number): Observable<any> {
        return this.http.get(
            `${environment.API_URL}/${this.entity}/${id}`);
    }

    public delete(id: number): Observable<any> {
        return this.http.delete(
            `${environment.API_URL}/${this.entity}/${id}`);
    }
}