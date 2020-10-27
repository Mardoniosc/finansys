import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import currencyFormatter from 'currency-formatter';

import { CategoryService, Category } from '../../categories/shared';
import { EntryService, Entry } from '../../entries/shared';
import toastr from 'toastr';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
})
export class ReportsComponent implements OnInit {
  expenseTotal: any = 0;
  revenueTotal: any = 0;
  balance: any = 0;

  expenseChartData: any;
  revenueChartData: any;

  chartOpetions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  categories: Category[] = [];
  entries: Entry[] = [];

  @ViewChild('month') month: ElementRef = null;
  @ViewChild('year') year: ElementRef = null;

  constructor(
    private entryService: EntryService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.categoryService
      .getAll()
      .subscribe((categories) => (this.categories = categories));
  }

  generateReports() {
    const month = this.month.nativeElement.value;
    const year = this.year.nativeElement.value;

    if (!month || !year) {
      toastr.error(
        'Você precisa selecionar o Mês e o Ano para gerar os relatórios!'
      );
    } else {
      this.entryService
        .getByMonthAndYear(month, year)
        .subscribe((entries) => (this.entries = entries));
    }
  }
}
