import { Permition } from 'src/app/pages/permitions/shared';
import { BaseResourceModel } from 'src/app/shared';

export class Profile extends BaseResourceModel {
  constructor(
    public id?: number,
    public name?: string,
    public permissoes?: Permition[]
  ) {
    super();
  }

  static fromJson(jsonData: any): Profile {
    return Object.assign(new Profile(), jsonData);
  }
}
