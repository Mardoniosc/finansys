import { Profile } from 'src/app/pages/profiles/shared/models/profile.model';
import { BaseResourceModel } from 'src/app/shared';

export class User extends BaseResourceModel {
  constructor(
    public id?: number,
    public nome?: string,
    public email?: string,
    public senha?: string,
    public dataNascimento?: string,
    public cpf?: string,
    public login?: string,
    public imagem?: string,
    public imagemProfile?: string,
    public criado?: string,
    public status?: number,
    public perfil?: Profile,
  ) {
    super();
  }

  static fromJson(jsonData: any): User {
    return Object.assign(new User(), jsonData);
  }
}
