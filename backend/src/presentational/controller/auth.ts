import { authUseCase } from "../../protocols/usecases/authusecase";
import { InvalidParamError } from "../../utils/errors/InvalidParamError";
import { badRequest, server, success } from "../../utils/helpers/httpResponse";

export class AuthController {
  constructor(private readonly autUseCase: authUseCase) {}
  async handle({ username, password }: { username: string; password: string }) {
    try {
      if (!username) return badRequest(new InvalidParamError("username"));
      if (!password) return badRequest(new InvalidParamError("password"));
      const accessToken = await this.autUseCase.auth(username, password);
      return success({ accessToken, user: username });
    } catch (error) {
      return server(error);
    }
  }
}
