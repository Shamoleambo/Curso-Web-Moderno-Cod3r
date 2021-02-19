import { catchError, map } from 'rxjs/operators';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:3001/products';

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
    ) { }

  showMessage(msg: string, isError: boolean = false): void{
    //nackBar.open receives three parameters, the second one(a string) is an action
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  create(product: Product): Observable<Product>{
    return this.http
      .post<Product>(this.baseUrl, product)
      .pipe(map(obj => obj), catchError(e => this.errorHandler(e)));
  }

  errorHandler(e: any): Observable<any>{
    this.showMessage('Ocorreu um Erraço!', true);
    console.log(e);
    return EMPTY;
  }

  read(): Observable<Product[]>{
    return this.http
      .get<Product[]>(this.baseUrl)
      .pipe(map(obj => obj), catchError(e => this.errorHandler(e)));
  }

  //This method will fill the form for the next method(update) update the product with the altered data
  readById(id: string): Observable<Product>{
    const url = `${this.baseUrl}/${id}`;
    return this.http
      .get<Product>(url)
      .pipe(map(obj => obj), catchError(e => this.errorHandler(e)));
  }

  update(product: Product): Observable<Product>{
    const url = `${this.baseUrl}/${product.id}`;
    return this.http
      .put<Product>(url, product)
      .pipe(map(obj => obj), catchError(e => this.errorHandler(e)));
  }

  delete(id: number): Observable<Product>{
    const url = `${this.baseUrl}/${id}`;
    return this.http
      .delete<Product>(url)
      .pipe(map(obj => obj), catchError(e => this.errorHandler(e)));
  }

}
