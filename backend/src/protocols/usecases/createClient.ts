import { client } from "../../domain/entities/client";

export interface clientUsecase {
  create: (data: client) => Promise<client>;
}
