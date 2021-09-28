import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
@Injectable({
    providedIn: 'root'
})
export class appService {

    constructor(private http: HttpClient) { }

    insertshort(data) {
        return this.http.post<any>('/add',data)
            .toPromise()
            .then(data => { return data; });
    }

    listshort() {
        return this.http.get<any>('/list')
            .toPromise()
            .then(data => { return data; });
    }

    async canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
        return this.http.get<any>('/list/'+route.url[0].path)
        .toPromise()
        .then(data => { 
            if (data[0]?.original) {
                window.location.href=data[0].original
                return false
            } else {
                return true
            }
            
        });
       
    }
}