import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Hys } from "../model/hys";

@Injectable({
    providedIn: 'root'
})
export class HysS {

    URL = ' https://portafolio-backend-production-789a.up.railway.app/hys/';

    url = 'http://localhost:8080/hys/';

    constructor(private httpClient: HttpClient) { }

    public lista(): Observable<Hys[]> {
        return this.httpClient.get<Hys[]>(this.URL + 'lista');
    }

    public detail(id: number): Observable<Hys> {
        return this.httpClient.get<Hys>(this.URL + `details/${id}`);
    }

    public save(hys: Hys): Observable<any> {
        return this.httpClient.post<any>(this.URL + 'create', hys);
    }

    public update(id: number, hys: Hys): Observable<any> {

        return this.httpClient.put<any>(this.URL + `update/${id}`, hys);
    }

    public delete(id: number): Observable<any> {

        return this.httpClient.delete<any>(this.URL + `delete/${id}`);
    }

}