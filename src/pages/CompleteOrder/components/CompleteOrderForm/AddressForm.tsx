import {AddressFormContainer} from "./styles";
import {Input} from "../../../../components/Input";
import {useFormContext} from "react-hook-form";

interface ErrorType{
    errors: {
        [key: string]:{
            message: string;
        }
    }
}

export function AddressForm(){
    const {register, formState} = useFormContext();
    const { errors } = formState as unknown as ErrorType;

    return(
        <AddressFormContainer>
            <Input
                placeholder="CEP"
                type="number"
                className="cep"
                {...register("cep")}
                error={errors.cep?.message}/>
            <Input
                placeholder="Rua"
                type="text"
                className="street"
                {...register("street")}
                error={errors.street?.message}
            />
            <Input
                placeholder="Número"
                type="number"
                {...register("number")}
                error={errors.number?.message}
            />
            <Input
                placeholder="Complemento"
                type="text"
                className="complement"
                {...register("complement")}
                error={errors.complement?.message}
                rightText="Opcional"
            />
            <Input
                placeholder="Bairro"
                type="text"
                {...register("district")}
                error={errors.district?.message}
            />
            <Input
                placeholder="Cidade"
                type="text"
                {...register("city")}
                error={errors.city?.message}
            />

            <Input
                placeholder="UF"
                type="text"
                {...register("uf")}
                error={errors.uf?.message}
            />
        </AddressFormContainer>
    )
}