import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DashboardService {

    xml:BehaviorSubject<any>=new BehaviorSubject<any>(null)

    constructor(private http:HttpClient){}

    getCountries():Observable<any[]>{
        return this.http.get('https://restcountries.eu/rest/v2/all')
        .pipe(map((countries:any[])=>countries))
    }

    setXML(xml){
        this.xml.next(xml)
    }

    getXML(){
        return this.xml.asObservable()
    }
    
}