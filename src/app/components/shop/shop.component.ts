import { Component, OnInit } from '@angular/core';
import {Record} from 'src/app/record';
import {RecordService} from 'src/app/record.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  records: Record[];
  constructor(private recordService: RecordService) { }

  ngOnInit() {
    this.getRecords();
  }

   getRecords(): void {
    this.recordService.getRecords().subscribe(records => this.records = records);

  }
}
