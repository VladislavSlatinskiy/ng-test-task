import {Component, OnInit} from '@angular/core';
import {GoogleTranslateService, Lang, GoogleLangResp} from './services/googletranslate.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [GoogleTranslateService]
})
export class AppComponent implements OnInit {
    title = 'ng-test';
    public langs: Lang[];

    // tslint:disable-next-line:variable-name
    constructor(private _google: GoogleTranslateService) {}

    private getLangs() {
        this._google.getSupportedLanguages().subscribe((lang: GoogleLangResp) => {
            this.langs = lang.data.languages;
            localStorage.setItem('langs', JSON.stringify(this.langs));
        });
    }

    ngOnInit(): void {
        const langstr = localStorage.getItem('testObject');
        if (langstr === undefined || langstr === null || langstr === '')
        {
            this.getLangs();
        }
        else
        {
            this.langs = JSON.parse(langstr);
        }
    }

}
