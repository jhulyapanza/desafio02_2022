import { RegularText } from "../../../../components/Typhography";
import {ConfirmationSectionContainer} from "./styles";
import {Button} from "../../../../components/Button";
import {useCart} from "../../../../hooks/useCart";
import {formatMoney} from "../../../../utils/formatMoney";

const DELIVERY_PRICE = 3.5;

export function ConfirmationSection(){
    const {cartItemsTotal, cartQuantity} = useCart();
    const cartTotal = DELIVERY_PRICE + cartItemsTotal;
    const formattedItemsTotal = formatMoney(cartItemsTotal);
    const totalOrder = formatMoney(cartTotal);
    const formatDeliveryPrice = formatMoney(DELIVERY_PRICE);
    return(
        <ConfirmationSectionContainer>
            <div>
                <RegularText size="s">Total de itens</RegularText>
                <RegularText>R$ {formattedItemsTotal}</RegularText>
            </div>
            <div>
                <RegularText size="s">Entrega</RegularText>
                <RegularText>R$ {formatDeliveryPrice}</RegularText>
            </div>
            <div>
                <RegularText size="l" weight="700" color="subtitle">Total</RegularText>
                <RegularText size="l" weight="700" color="subtitle">R$ {totalOrder}</RegularText>
            </div>
            <Button text="Confirmar pedido" disabled={cartQuantity <= 0} type="submit"/>
        </ConfirmationSectionContainer>
    )
}