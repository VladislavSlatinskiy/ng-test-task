import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class GoogleTranslateService {
    private apiUrl: string;
    private key = 'AIzaSyDQ3aOjXiKn5rLXVNTp-PeXuKunsNkysfM';

    constructor(private http: HttpClient) {}

    public translate(obj: TranslateObj): any {
        this.apiUrl = 'https://translation.googleapis.com/language/translate/v2?key=';
        return this.http.post(this.apiUrl + this.key, obj);
    }

    public getSupportedLanguages(): any {
        this.apiUrl = 'https://translation.googleapis.com/language/translate/v2/languages?key=';
        const params = this.key + '&target=ru';
        return this.http.get(this.apiUrl + params);
    }
}

export class TranslateObj {
    q: string;
    source: string;
    target: string;
    format: string;
    result: string;

    constructor(source: string, target: string)
    {
        this.format = 'text';
        this.source = source;
        this.target = target;
    }
}

export class Lang
{
    language: string;
    name: string;
}

