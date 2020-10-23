import { Component, OnInit, AfterContentChecked } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { switchMap } from 'rxjs/operators';
import toastr from 'toastr';
import { Entry, EntryService } from '../shared';
import { Category, CategoryService } from '../../categories/shared';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css'],
})
export class EntryFormComponent implements OnInit, AfterContentChecked {
  currentAction: string;
  entryForm: FormGroup;
  pageTitle: string;
  serverErrorMessages: string[] = null;
  submittingForm: boolean = false;
  entry: Entry = new Entry();
  categories: Array<Category>;
  imaskConfig = {
    mask: Number,
    scale: 2,
    thousandsSeparator: '',
    padFractionalZeros: true,
    normalizeZeros: true,
    radix: ',',
  };

  opcoes = null;

  ptBR = {
    firstDayOfWeek: 0,
    dayNames: [
      'Domingo',
      'Segunda',
      'Terça',
      'Quarta',
      'Quinta',
      'Sexta',
      'Sábado',
    ],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    dayNamesMin: ['Do', 'Se', 'Te', 'Qu', 'Qu', 'Se', 'Sa'],
    monthNames: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ],
    monthNamesShort: [
      'Jan',
      'Fev',
      'Mar',
      'Abr',
      'Mai',
      'Jun',
      'Jul',
      'Ago',
      'Set',
      'Out',
      'Nov',
      'Dez',
    ],
    today: 'Hoje',
    clear: 'Limpar',
  };

  constructor(
    private entryService: EntryService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.setCurrentAction();
    this.buildEntryForm();
    this.loadEntry();
    this.loadCategories();
    this.opcoes = this.typeOptions;
  }

  ngAfterContentChecked() {
    this.setPageTitle();
  }

  submitForm() {
    this.submittingForm = true;

    if (this.currentAction === 'new') {
      this.createEntry();
    } else {
      this.updateEntry();
    }
  }

  get typeOptions(): Array<any> {
    return Object.entries(Entry.types).map(
      ([value, text]) => {
        return {
          text: text,
          value: value,
        }
      }
    )
  }

  // PRIVATE METHODS

  private setCurrentAction() {
    if (this.route.snapshot.url[0].path === 'new') {
      this.currentAction = 'new';
    } else {
      this.currentAction = 'edit';
    }
  }

  private buildEntryForm() {
    this.entryForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(2)]],
      description: [null],
      type: ["expense", [Validators.required]],
      amount: [null, [Validators.required]],
      date: [null, [Validators.required]],
      paid: [true, [Validators.required]],
      categoryId: [null, [Validators.required]],
    });
  }

  private loadEntry() {
    if (this.currentAction === 'edit') {
      this.route.paramMap
        .pipe(
          switchMap((parms) =>
            this.entryService.getById(Number(parms.get('id')))
          )
        )
        .subscribe(
          (data) => {
            this.entry = data;
            this.entryForm.patchValue(this.entry);
          },
          (err) => console.error('Erro ao carregar a entradas', err)
        );
    }
  }

  private setPageTitle() {
    if (this.currentAction === 'new') {
      this.pageTitle = 'Cadastro de Novo lançamento';
    } else {
      const entryName = this.entry.name || '';
      this.pageTitle = 'Editando lançamento: ' + entryName;
    }
  }

  private createEntry() {
    const entry: Entry = Entry.fromJson(this.entryForm.value);
    console.log(entry);
    this.entryService.create(entry).subscribe(
      (entry) => this.actionForSuccess(entry),
      (err) => this.actionForError(err)
    );
  }

  private updateEntry() {
    const entry: Entry = Entry.fromJson(this.entryForm.value);

    this.entryService.update(entry).subscribe(
      (entry) => this.actionForSuccess(entry),
      (err) => this.actionForError(err)
    );
  }

  private actionForSuccess(entry: Entry) {
    toastr.success('Solicitação processada com sucesso!');

    this.router
      .navigateByUrl('entries', { skipLocationChange: true })
      .then(() => this.router.navigate(['entries', entry.id, 'edit']));
  }

  private actionForError(err) {
    toastr.error('Ocorreu um erro ao processar a sua solicitação!');

    this.submittingForm = false;

    if (err.status === 422) {
      this.serverErrorMessages = JSON.parse(err._body).erros;
    } else {
      this.serverErrorMessages = [
        'Falha na comunicação com o servidor. Favor tente mais tarde!',
      ];
    }
  }

  private loadCategories(){
    this.categoryService.getAll()
      .subscribe(
        categories => this.categories = categories,
        err => this.actionForError(err)
      )
  }
}
