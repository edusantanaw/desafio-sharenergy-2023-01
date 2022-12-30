import { authUseCase } from "../../src/protocols/usecases/authusecase";

export class AuthUseCaseSpy implements authUseCase {
  token = "token";
  isPasswordValid = false;
  userExists: string | null = null;
  async auth(username: string, password: string) {
    this.isPasswordValid;
    this.token;
    this.userExists;
    if (!this.userExists) throw "Usuario não encontrado!";
    if (!this.isPasswordValid) throw "A senha é invalida!";
    return this.token;
  }
}
