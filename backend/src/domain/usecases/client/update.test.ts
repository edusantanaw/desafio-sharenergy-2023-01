import { ClientRepositorySpy } from "../../../../tests/mocks/repo/client";
import { clientRepository } from "../../../protocols/repository/client";
import { validClient } from "../../../utils/helpers/validUser";
import { client } from "../../entities/client";

class UpdateClientUsecase {
  constructor(private clientRepository: clientRepository) {}

  async update({ data, id }: { data: client; id: string }) {
    const verifyClientExists = await this.clientRepository.loadById(id);
    if (!verifyClientExists) throw "Cliente não encontrado!";

    if (data.email !== verifyClientExists.email) {
      const verifyEmailAlreadyBeingUsed =
        await this.clientRepository.loadByEmail(data.email);
      if (verifyEmailAlreadyBeingUsed) throw "O email já esta sendo usado!";
    }

    const newClient = await this.clientRepository.update({ data, id });
    return newClient;
  }
}

function makeSut() {
  const clientRepository = new ClientRepositorySpy();
  const updateClientUsecase = new UpdateClientUsecase(clientRepository);
  return { clientRepository, updateClientUsecase };
}

describe("Client update use case", () => {
  test("Should throw an error if client not exists", async () => {
    const { updateClientUsecase } = makeSut();
    const response = updateClientUsecase.update({
      data: validClient,
      id: "any_id",
    });
    expect(response).rejects.toBe("Cliente não encontrado!");
  });
  test("Should throw an error if client not exists", async () => {
    const { updateClientUsecase, clientRepository } = makeSut();
    const { email, ...restClient } = validClient;
    clientRepository.clientById = validClient;
    clientRepository.clientByEmail = {
      ...validClient,
      email: "used_email.com",
    };
    const response = updateClientUsecase.update({
      data: { ...restClient, email: "used_email.com" },
      id: "any_id",
    });
    expect(response).rejects.toBe("O email já esta sendo usado!");
  });
  test("Should throw an error if client not exists", async () => {
    const { updateClientUsecase, clientRepository } = makeSut();
    clientRepository.clientById = validClient;
    const response = await updateClientUsecase.update({
      data: validClient,
      id: "any_id",
    });
    expect(response).toEqual(validClient);
  });
});
