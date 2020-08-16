import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GoogleTranslateService 
{
  url = 'https://translation.googleapis.com/language/translate/v?key=';
  key = 'AIzaSyDQ3aOjXiKn5rLXVNTp-PeXuKunsNkysfM';
  
  constructor(private http: HttpClient) { }
  
  translate(obj: GoogleObj) 
  {
    return this.http.post(this.url + this.key, obj);
  }
}

export class GoogleObj 
{
  q: string;
  source: string;
  target: string;
  format: string;
}

