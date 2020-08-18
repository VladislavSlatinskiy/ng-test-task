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
        this.googleService.getSupportedLanguages().subscribe(
            (lang: any) => {
                this.languagesList = lang.data.languages;
                localStorage.setItem('languages', JSON.stringify(this.languagesList));
            },
            err => {
                console.log(err);
            });
    }

    public openTranslator(): void {
        this.isShowTranslator = !this.isShowTranslator;
        this.currentTranslateObject = this.translateObjectList[this.translateObjectList.length - 1];
        this.currentTranslateObject.q = '';
        this.currentTranslateObject.result = '';
    }

    ngOnInit(): void {
        const languagesString = localStorage.getItem('languages');
        const historyString = localStorage.getItem('history');
        if (languagesString === undefined || languagesString === null || languagesString === '') {
            this.setLanguages();
        } else {
            this.languagesList = JSON.parse(languagesString);
        }
        if (historyString === undefined || historyString === null || historyString === '') {
            this.translateObjectList = [new TranslateObj('en', 'ru')];
        } else {
            this.translateObjectList = JSON.parse(historyString);
        }
    }

}
