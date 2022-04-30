import { BaseResourceModel } from 'src/app/shared';

export class Permition extends BaseResourceModel {
  constructor(
    public id?: number,
    public name?: string,
    public url?: string,
    public permition_pai_id?: number
  ) {
    super();
  }

  static fromJson(jsonData: any): Permition {
    return Object.assign(new Permition(), jsonData);
  }
}
