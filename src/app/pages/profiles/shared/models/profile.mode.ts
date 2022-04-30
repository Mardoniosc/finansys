import { BaseResourceModel } from 'src/app/shared';

export class Profile extends BaseResourceModel {
  constructor(
    public id?: number,
    public name?: string
  ) {
    super();
  }

  static fromJson(jsonData: any): Profile {
    return Object.assign(new Profile(), jsonData);
  }
}
