import { InvalidParamError } from "../../../src/utils/errors/InvalidParamError";
import {
  badRequest,
  server,
  success,
} from "../../../src/utils/helpers/httpResponse";
import { AuthController } from "../../../src/presentational/controller/auth";
import { AuthUseCaseSpy } from "../../mocks/authUsecaseSpy";

function makeSut() {
  const authUseCase = new AuthUseCaseSpy();
  const authController = new AuthController(authUseCase);
  return { authController, authUseCase };
}

describe("Auth controller", () => {
  test("Should return status 400 if username is not provied", async () => {
    const { authController } = makeSut();
    const response = await authController.handle({
      username: "",
      password: "",
    });
    expect(response).toEqual(badRequest(new InvalidParamError("username")));
  });

  test("Should return status 400 if username is not provied", async () => {
    const { authController } = makeSut();
    const response = await authController.handle({
      username: "valid_username",
      password: "",
    });
    expect(response).toEqual(badRequest(new InvalidParamError("password")));
  });

  test("Should return status 400 if user not exists", async () => {
    const { authController } = makeSut();
    const response = await authController.handle({
      username: "invalid_username",
      password: "valid_password",
    });
    expect(response).toEqual(server("User not found!"));
  });

  test("Should return status 400 if password is invalid", async () => {
    const { authController, authUseCase } = makeSut();
    authUseCase.userExists = "user";
    const response = await authController.handle({
      username: "valid_username",
      password: "invalid_password",
    });
    expect(response).toEqual(server("Password is invalid!"));
  });

  test("Should return status 200 and access token if currect creadentials is provided", async () => {
    const { authController, authUseCase } = makeSut();
    authUseCase.isPasswordValid = true;
    authUseCase.userExists = "user";
    const response = await authController.handle({
      username: "valid_username",
      password: "valid_password",
    });
    expect(response).toEqual(
      success({ accessToken: "token", user: "valid_username" })
    );
  });
});
