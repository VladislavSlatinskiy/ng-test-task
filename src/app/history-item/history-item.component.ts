import {Component, Input, OnInit} from '@angular/core';
import {TranslateObj} from '../services/googletranslate.service';

@Component({
    selector: 'app-history-item',
    templateUrl: './history-item.component.html',
    styleUrls: ['./history-item.component.css']
})
export class HistoryItemComponent implements OnInit {
    @Input() translateObject: TranslateObj;

    constructor() {}

    ngOnInit(): void {}
}
