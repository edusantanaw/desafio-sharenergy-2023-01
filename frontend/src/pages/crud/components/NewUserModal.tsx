import { Form, Input, Label, Modal } from "./newUser.styles";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { clientForm } from "../../../util/schemas/client";
import {createClient} from '../../../services/client.service'

interface props {
  handleModal: () => void;
}


type data = {
  id?: string;
  name: string;
  email: string;
  phone: number;
  number: number;
  street: string;
  city: string;
  cpf: string;

}

export const NewUserModal = ({ handleModal }: props) => {
   async function handleCreate(data: FieldValues) {
      const {city, street, number, ...rest} = data as data
      const address = {
        city,
        street,
        number
      }
      const response = await createClient({...rest, address: address})
    }

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({ resolver: yupResolver(clientForm) });
    
  return (
    <Modal>
      <div className="close" onClick={handleModal}></div>
      <Form
        onSubmit={handleSubmit(handleCreate)}
        onKeyPress={(e) => e.key === "Enter" && handleSubmit(handleCreate)}
      >
        <div className="column">
          <Label>Nome</Label>
          <Input type="text" placeholder="Digite o nome"   {...register("name")} />
          <p className="error">{errors?.name && <>{errors.name.message} </>}</p>
        </div>
        <div className="column">
          <Label>Email</Label>
          <Input type="email" placeholder="Digite o email"   {...register("email")} />
          <p className="error">{errors?.email && <>{errors.email.message} </>}</p>
        </div>
        <div className="column">
          <Label>Telefone</Label>
          <Input type="number"  placeholder="Digite o telefone"   {...register("phone")} />
          <p className="error">{errors?.phone && <>{errors.phone.message} </>}</p>
        </div>
        <div className="column">
          <Label>Cpf</Label>
          <Input type="text" placeholder="Digite o cpf"   {...register("cpf")} />
        <p className="error">{errors?.cpf && <>{errors.cpf.message} </>}</p>
        </div>
        <div className="column">
          <Label>Rua</Label>
          <Input type="text" placeholder="Digite a rua"   {...register("street")} />
          <p className="error">{errors?.street && <>{errors.street.message} </>}</p>
        </div>
        <div className="row">
          <div className="column">
            <Label>Cidade</Label>
            <Input type="text" placeholder="Digite a cidade"   {...register("city")} />
            <p className="error">{errors?.city && <>{errors.city.message} </>}</p>
          </div>
          <div className="column">
            <Label>Numero</Label>
            <Input type="number"  placeholder="Digite o numero"  {...register("number")} />
            <p className="error">{errors?.number && <>{errors.number.message} </>}</p>
          </div>
        </div>
        <input type="submit" />
      </Form>
    </Modal>
  );
};
