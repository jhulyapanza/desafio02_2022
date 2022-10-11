import {CompleteOrderContainer} from "./styles";
import {CompleteOrderForm} from "./components/CompleteOrderForm";
import {SelectedCoffees} from "./components/SelectedCoffees/inde";
import * as zod from "zod";
import { useNavigate } from "react-router-dom";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm, FormProvider} from "react-hook-form";
import { useCart } from "../../hooks/useCart";

enum PaymentMethods {
    credit = "credit",
    debit = "debit",
    money = "money",
}

const confirmOrderFormValidationShema = zod.object({
    cep: zod.string().min(1, "Informe o CEP"),
    street: zod.string().min(1, "Informe o Rua"),
    number: zod.string().min(1, "Informe o Número"),
    complement: zod.string(),
    district: zod.string().min(1, "Informe o Bairro"),
    city: zod.string().min(1, "Informe a Cidade"),
    uf: zod.string().min(1, "Informe a UF"),
    paymentMethod: zod.nativeEnum(PaymentMethods, {
        errorMap: () => {
            return { message: "Informe o método de pagamento" };
        },
    }),
});

export type OrderData = zod.infer<typeof confirmOrderFormValidationShema>

type ConfirmOrderFormData = OrderData;

export function CompleteOrderPage(){
    const confirmedOrderForm = useForm<ConfirmOrderFormData>({
        resolver: zodResolver(confirmOrderFormValidationShema)
    });

    const { handleSubmit } = confirmedOrderForm;

    const navigate = useNavigate();
    const { cleanCart } = useCart();

    function handleConfirmOrder(data: ConfirmOrderFormData) {
        navigate("/orderConfirmed", {
            state: data,
        });
        cleanCart();
    }

    return(
        <FormProvider {...confirmedOrderForm}>
            <CompleteOrderContainer className="container" onSubmit={handleSubmit(handleConfirmOrder)}>
                <CompleteOrderForm/>
                <SelectedCoffees/>
            </CompleteOrderContainer>
        </FormProvider>
    )
}