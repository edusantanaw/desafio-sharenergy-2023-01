import { generateToken } from "../../protocols/helper/generateToken";
import { creadentials } from "../../protocols/usecases/authusecase";

export class AuthUsecase {
  constructor(
    private readonly credentials: creadentials,
    private readonly generateToken: generateToken
  ) {}
  async auth(username: string, password: string) {
    if (username !== this.credentials.username) throw "User not found!";
    if (password !== this.credentials.password) throw "Password is invalid!";
    const token = await this.generateToken.generate(username);
    return token;
  }
}
