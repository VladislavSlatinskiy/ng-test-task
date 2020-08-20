import {Component, Input, OnInit} from '@angular/core';
import {GoogleTranslateService, TranslateObj, Lang} from '../../services/googletranslate.service';

@Component({
    selector: 'app-translator',
    templateUrl: './translator.component.html',
    styleUrls: ['./translator.component.css'],
    providers: [GoogleTranslateService]
})
export class TranslatorComponent implements OnInit {
    private translateButton: any;
    @Input() languagesList: Lang[];
    @Input() translateObject: TranslateObj;

    constructor(private googleService: GoogleTranslateService) {}

    ngOnInit(): void {
        this.translateButton = document.getElementById('btnSubmit');
    }

    send(): void{
        this.translateButton.disabled = true;
        this.googleService.translate(this.translateObject).subscribe(
            (res: any) => {
                this.translateButton.disabled = false;
                this.translateObject.result = res.data.translations[0].translatedText;
                this.saveToHistory();
            },
            err => {
                console.log(err);
            }
        );
    }

    private saveToHistory(): void
    {
        let translateObjectList: TranslateObj[] = [];
        const historyString = localStorage.getItem('history');
        if (historyString !== undefined && historyString !== null && historyString !== '') {
            translateObjectList = JSON.parse(historyString);
        }
        translateObjectList.push(this.translateObject);
        localStorage.setItem('history', JSON.stringify(translateObjectList));
    }
}
