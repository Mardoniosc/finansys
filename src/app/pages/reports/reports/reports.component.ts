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
        .subscribe(this.setValues.bind(this));
    }
  }

  private setValues(entries: Entry[]) {
    this.entries = entries;
    this.calculeteBalance();
    this.setChartData();
  }

  private calculeteBalance() {
    let expenseTotal = 0;
    let revenueTotal = 0;

    this.entries.forEach((e) => {
      if (e.type === 'revenue') {
        revenueTotal += currencyFormatter.unformat(e.amount, { code: 'BRL' });
      } else {
        expenseTotal += currencyFormatter.unformat(e.amount, { code: 'BRL' });
      }
    });

    this.expenseTotal = currencyFormatter.format(expenseTotal, { code: 'BRL' });
    this.revenueTotal = currencyFormatter.format(revenueTotal, { code: 'BRL' });
    this.balance = currencyFormatter.format(revenueTotal - expenseTotal, {
      code: 'BRL',
    });
  }

  private setChartData() {
    const chartData = [];

    this.categories.forEach((category) => {
      const filteredEntries = this.entries.filter(
        (e) => e.categoryId === category.id && e.type === 'revenue'
      );

      if (filteredEntries.length > 0) {
        const totalAmound = filteredEntries.reduce(
          (total, entry) =>
            total + currencyFormatter.unformat(entry.amount, { code: 'BRL' }),
          0
        );

        chartData.push({
          categoryName: category.name,
          totalAmount: totalAmound,
        });
      }
    });

    this.revenueChartData = {
      labels: chartData.map((item) => item.categoryName),
      datasets: [
        {
          label: 'Gráfico de Receitas',
          backgroundColor: '#9CCC65',
          data: chartData.map((item) => item.totalAmount),
        },
      ],
    };
  }
}
