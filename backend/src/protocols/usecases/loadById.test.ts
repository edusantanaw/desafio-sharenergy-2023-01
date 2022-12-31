import {
  badRequest,
  noFound,
  server,
  success,
} from "../../../src/utils/helpers/httpResponse";
import { validClient } from "../../../src/utils/helpers/validUser";
import { LoadClientUsecaseSpy } from "../../../tests/mocks/loadClientUsecase";
import { InvalidParamError } from "../../utils/errors/InvalidEmailError";
import { loadClientUsecase } from "./loadClient";

class LoadClientById {
  constructor(private readonly loadClientUsecase: loadClientUsecase) {}
  async handle({ id }: { id: string }) {
    try {
      if (!id) return badRequest(new InvalidParamError("id"));
      const client = await this.loadClientUsecase.loadById(id);
      if (!client) return noFound("Client");
      return success(client);
    } catch (error) {
      return server(error);
    }
  }
}

function makeSut() {
  const loadClientUsecase = new LoadClientUsecaseSpy();
  const loadAllClient = new LoadClientById(loadClientUsecase);
  return { loadAllClient, loadClientUsecase };
}

describe("Load all", () => {
  test("Should return status 400 if id is not provided", async () => {
    const { loadAllClient } = makeSut();
    const response = await loadAllClient.handle({ id: "" });
    expect(response).toEqual(badRequest(new InvalidParamError("id")));
  });

  test("Should return status 204 if client not found", async () => {
    const { loadAllClient } = makeSut();
    const response = await loadAllClient.handle({ id: "any_id" });
    expect(response).toEqual(noFound("Client"));
  });
  test("Should return status 200 and an client", async () => {
    const { loadAllClient, loadClientUsecase } = makeSut();
    loadClientUsecase.client = validClient;
    const response = await loadAllClient.handle({ id: "any_id" });
    expect(response).toEqual(success(validClient));
  });
});
