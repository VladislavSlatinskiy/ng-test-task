import {Component, Input, OnInit} from '@angular/core';
import {GoogleTranslateService, GoogleObj, Lang} from '../../services/googletranslate.service';

@Component({
    selector: 'app-translator',
    templateUrl: './translator.component.html',
    styleUrls: ['./translator.component.css'],
    providers: [GoogleTranslateService]
})
export class TranslatorComponent implements OnInit {
    public googleObj: GoogleObj = new GoogleObj();
    public result = '';
    private translateButton: any;
    defaultSrcLang = 'en';
    defaultTrgLang = 'ru';
    @Input() langs: Lang[];

    constructor(private _google: GoogleTranslateService) {
    }

    ngOnInit() {
        this.translateButton = document.getElementById('btnSubmit');
        this.googleObj.format = 'text';
        this.googleObj.source = 'en';
        this.googleObj.target = 'ru';
    }

    send() {
        this.translateButton.disabled = true;
        this._google.translate(this.googleObj).subscribe(
            (res: any) => {
                this.translateButton.disabled = false;
                this.result = res.data.translations[0].translatedText;
            },
            err => {
                console.log(err);
            }
        );
    }
}
