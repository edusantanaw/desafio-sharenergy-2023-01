import { address, client } from "../../../domain/entities/client";
import { InvalidParamError } from "../../../utils/errors/InvalidEmailError";
import {
  badRequest,
  server,
  success,
} from "../../../utils/helpers/httpResponse";
import { validator } from "../../../protocols/helper/validator";
import { EmailValidatorSpy } from "../../../../tests/mocks/emailValidator";
import { CpfValidatorSpy } from "../../../../tests/mocks/cpfValidator";
import { validClient } from "../../../utils/helpers/validUser";

interface updateClientUsecase {
  update: (data: { data: client; id: string }) => Promise<client>;
}

class UdateClientController {
  constructor(
    private readonly emailValidator: validator,
    private readonly cpfValidator: validator,
    private readonly updateClientUsecase: updateClientUsecase
  ) {}

  async handle({ data, id }: { data: client; id: string }) {
    try {
      const { address, cpf, email, name, phone } = data;
      if (!id) return badRequest(new InvalidParamError("id"));
      if (!name) return badRequest(new InvalidParamError("nome"));

      if (!this.emailValidator.isValid(email))
        return badRequest(new InvalidParamError("email"));

      if (!phone) return badRequest(new InvalidParamError("telefone"));

      if (!this.cpfValidator.isValid(cpf))
        return badRequest(new InvalidParamError("cpf"));

      if (!address) return badRequest(new InvalidParamError("endereço"));
      const updatedClient = await this.updateClientUsecase.update({
        data: data,
        id: id,
      });
      return success(updatedClient);
    } catch (error) {
      return server(error);
    }
  }
}
class UpdateClientUsecase {
  client: client | null = null;
  emailAlreadyUsed = false;
  async update({ data, id }: { data: client; id: string }) {
    if (!this.client) throw "Cliente não encontrado!";
    if (this.emailAlreadyUsed) throw "O email já esta sendo usado!";
    return this.client;
  }
}

function makeSut() {
  const updateClientUsecase = new UpdateClientUsecase();
  const emailValidator = new EmailValidatorSpy();
  const cpfValidator = new CpfValidatorSpy();
  const updateClientController = new UdateClientController(
    emailValidator,
    cpfValidator,
    updateClientUsecase
  );
  return {
    updateClientController,
    emailValidator,
    cpfValidator,
    updateClientUsecase,
  };
}

describe("Client update controller", () => {
  test("should return status 400 if id is not provided", async () => {
    const { updateClientController } = makeSut();
    const response = await updateClientController.handle({
      data: {} as client,
      id: "",
    });
    expect(response).toEqual(badRequest(new InvalidParamError("id")));
  });
  test("Should return status 400 if name is not provided", async () => {
    const { updateClientController } = makeSut();
    const response = await updateClientController.handle({
      data: {} as client,
      id: "any_id",
    });
    expect(response).toEqual(badRequest(new InvalidParamError("nome")));
  });
  test("Should return status 400 if email is not provided", async () => {
    const { updateClientController, emailValidator } = makeSut();
    emailValidator.valid = false;
    const response = await updateClientController.handle({
      id: "any_id",
      data: { name: "any_name" } as client,
    });
    expect(response).toEqual(badRequest(new InvalidParamError("email")));
  });
  test("Should return status 400 if phone is not provided", async () => {
    const { updateClientController } = makeSut();
    const response = await updateClientController.handle({
      data: {
        name: "any_name",
        email: "any_email@email.com",
        address: {},
      } as client,
      id: "any_id",
    });
    expect(response).toEqual(badRequest(new InvalidParamError("telefone")));
  });
  test("Should return status 400 if cpf is not provided", async () => {
    const { updateClientController, cpfValidator } = makeSut();
    cpfValidator.valid = false;
    const response = await updateClientController.handle({
      data: {
        name: "any_name",
        email: "any_email@email.com",
        cpf: "",
        phone: 1234,
        address: {} as any,
      },
      id: "any_id",
    });
    expect(response).toEqual(badRequest(new InvalidParamError("cpf")));
  });
  test("Should return status 400 if address is not provided", async () => {
    const { updateClientController } = makeSut();
    const response = await updateClientController.handle({
      data: {
        name: "any_name",
        email: "any_email@email.com",
        phone: 1234,
        cpf: "123.123.123.10",
        address: null as unknown,
      } as client,
      id: "any_id",
    });
    expect(response).toEqual(badRequest(new InvalidParamError("endereço")));
  });

  test("Should throw if user not exists", async () => {
    const { updateClientController } = makeSut();
    const response = await updateClientController.handle({
      data: validClient,
      id: "any_id",
    });
    expect(response).toEqual(server("Cliente não encontrado!"));
  });
  test("Should throw if email already being used", async () => {
    const { updateClientController, updateClientUsecase } = makeSut();
    updateClientUsecase.client = validClient;
    updateClientUsecase.emailAlreadyUsed = true;
    const response = await updateClientController.handle({
      data: validClient,
      id: "any_id",
    });
    expect(response).toEqual(server("O email já esta sendo usado!"));
  });
  test("Should throw if email already being used", async () => {
    const { updateClientController, updateClientUsecase } = makeSut();
    updateClientUsecase.client = validClient;
    const response = await updateClientController.handle({
      data: validClient,
      id: "any_id",
    });
    expect(response).toEqual(success(validClient));
  });
});
