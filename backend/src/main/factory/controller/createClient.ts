import { CreateClientController } from "../../../presentational/controller/client/create";
import { CpfValidator } from "../../../utils/helpers/cpfValidator";
import { EmailValidator } from "../../../utils/helpers/emailValidator";
import { makeCreateClientUsecase } from "../usecases/createClient";

export function makeCreateCLientController() {
  const emailValidator = new EmailValidator();
  const cpfValidator = new CpfValidator();
  const createClientUsecase = makeCreateClientUsecase();
  return new CreateClientController(
    emailValidator,
    cpfValidator,
    createClientUsecase
  );
}
