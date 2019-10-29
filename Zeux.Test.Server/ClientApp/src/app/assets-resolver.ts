import { Injectable } from '@angular/core';

import { Resolve, Router, ActivatedRoute, NavigationEnd, ActivatedRouteSnapshot } from '@angular/router';

import { Observable,of } from 'rxjs';
import { filter, map,tap,  } from 'rxjs/operators/';
import { Asset } from './my-assets/my-assets.component';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class AssetsResolver implements Resolve<Observable<Asset[]>> {
private alldata: Asset[] = [];
private isAssedRetrived = false;

  constructor(private route: ActivatedRoute,
    private http: HttpClient) { }

    private httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

  resolve(route: ActivatedRouteSnapshot): Observable<Asset[]> {
    const type = route.params.type.toLowerCase();
    const uriAsset = '/api/asset/Get/all';

    if(this.isAssedRetrived){
      return of(this.alldata.filter((asset: Asset) => type === 'all'|| !type || asset.type.name.toLowerCase() === type));
    }

    return this.http.get<Asset[]>(uriAsset, this.httpOptions).pipe(
    tap(res => {
      this.isAssedRetrived = true;
      this.alldata = res;
    }));


  }


}
