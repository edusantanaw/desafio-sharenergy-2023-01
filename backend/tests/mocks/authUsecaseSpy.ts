import { authUseCase } from "../../src/protocols/usecases/authusecase";

export class AuthUseCaseSpy implements authUseCase {
  token = "token";
  isPasswordValid = false;
  userExists: string | null = null;
  async auth(username: string, password: string) {
    this.isPasswordValid;
    this.token;
    this.userExists;
    if (!this.userExists) throw "User not found!";
    if (!this.isPasswordValid) throw "Password is invalid!";
    return this.token;
  }
}
