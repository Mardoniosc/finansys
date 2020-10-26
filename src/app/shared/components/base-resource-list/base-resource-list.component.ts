import { OnInit } from '@angular/core';
import { BaseResourceModel } from '../../models';
import { BaseResourceService } from '../../services';

export abstract class BaseResourceListComponent<T extends BaseResourceModel>
  implements OnInit {
  entries: T[] = [];

  constructor(
    protected resourceService: BaseResourceService<T>
  ) {}

  ngOnInit() {
    this.resourceService.getAll().subscribe(
      (entries) => (this.entries = entries.sort((a, b) => b.id - a.id)),
      (error) => alert('Erro ao carregar a lista' + error)
    );
  }

  deleteEntry(resource: T) {
    const mustDelete = confirm('Deseja realmente excluir este item?');
    if (mustDelete) {
      this.resourceService.delete(resource.id).subscribe(
        () =>
          (this.entries = this.entries.filter(
            (element) => element !== resource
          )),
        () => alert('Erro na exclusão')
      );
    }
  }
}
