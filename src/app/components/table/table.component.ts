import { Component, OnInit } from '@angular/core';
import { SmartTableDataService } from '../../services/smart-table-data.service';

@Component({
  selector: 'app-smart-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  constructor(private smartTableDataService: SmartTableDataService) {}

  ths = [
    'id',
    'title',
    'price',
    'description',
    'category',
    'image',
    'rating',
  ];

  trs: any[] | undefined;

  ngOnInit() {
    this.smartTableDataService.getTableData()
      .subscribe((data) => {
        this.trs = data.map(tr => Object.keys(tr).map(key =>tr[key]));
      });

  }

}
