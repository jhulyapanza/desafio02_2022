import { TitleText } from "../../../../components/Typhography";
import {DetailsContainer, SelectedCoffeesContainer} from "./styles";
import {CoffeeCartCard} from "../CoffeeCartCard";
import {ConfirmationSection} from "./ConfirmationSection";
import {useCart} from "../../../../hooks/useCart";

export function SelectedCoffees(){
    const {cartItems} = useCart();
    return(
        <SelectedCoffeesContainer>
            <TitleText size="xs" color="subtitle">
                Cafés selecionados
            </TitleText>
            <DetailsContainer>
                {cartItems.map((item) => (
                    <CoffeeCartCard key={item.id} coffee={item}/>
                ))}
                <ConfirmationSection/>
            </DetailsContainer>
        </SelectedCoffeesContainer>
    )
}