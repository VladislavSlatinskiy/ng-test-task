import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class GoogleTranslateService {
    private apiUrl: string;
    private key = 'AIzaSyDQ3aOjXiKn5rLXVNTp-PeXuKunsNkysfM';

    constructor(private http: HttpClient) {
    }

    // tslint:disable-next-line:typedef
    public translate(obj: GoogleObj) {
        this.apiUrl = 'https://translation.googleapis.com/language/translate/v2?key=';
        return this.http.post(this.apiUrl + this.key, obj);
    }

    public getSupportedLanguages() {
        this.apiUrl = 'https://translation.googleapis.com/language/translate/v2/languages?key=';
        const params = this.key + '&target=ru';
        return this.http.get(this.apiUrl + params);
    }
}

export class GoogleObj {
    q: string;
    source: string;
    target: string;
    format: string;
}

export class GoogleLangResp
{
    data: { languages: Lang[]; };
}
export class Lang
{
    language: string;
    name: string;
}

