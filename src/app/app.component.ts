import {Component, OnInit} from '@angular/core';
import {GoogleTranslateService, TranslateObj, Lang} from './services/googletranslate.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [GoogleTranslateService]
})
export class AppComponent implements OnInit {
    public languagesList: Lang[];
    public translateObjectList: TranslateObj[];
    public currentTranslateObject: TranslateObj;
    public isShowTranslator = false;

    constructor(private googleService: GoogleTranslateService) {}

    private setLanguages(): void {
        const languagesString = localStorage.getItem('languages');

        if (languagesString === undefined || languagesString === null || languagesString === '') {
            this.googleService.getSupportedLanguages().subscribe(
                (lang: any) => {
                    this.languagesList = lang.data.languages;
                    localStorage.setItem('languages', JSON.stringify(this.languagesList));
                },
                err => {
                    console.log(err);
                });
        } else {
            this.languagesList = JSON.parse(languagesString);
        }
    }

    private setHistoryList(): void {
        const historyString = localStorage.getItem('history');
        if (historyString === undefined || historyString === null || historyString === '') {
            this.translateObjectList = [];
        } else {
            this.translateObjectList = JSON.parse(historyString).reverse();
        }
    }

    public openTranslator(translateObject: TranslateObj = null): void {
        this.isShowTranslator = !this.isShowTranslator;
        if (this.isShowTranslator) {
            if(translateObject !== null) {
                this.currentTranslateObject = translateObject;
            } else {
                this.currentTranslateObject = this.translateObjectList.length > 0 ? this.translateObjectList[0] : new TranslateObj('en', 'ru');
                this.currentTranslateObject.q = '';
                this.currentTranslateObject.result = '';
            }
        } else {
            this.setHistoryList();
        }
    }

    ngOnInit(): void {
        this.setLanguages();
        this.setHistoryList();
    }

}
