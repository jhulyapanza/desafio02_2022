import { TitleText } from "../../../../components/Typhography";
import {CoffeeList, OurCoffeesContainer} from "./styles";
import {CoffeeCard} from "../CoffeeCard/intex";
import { coffees } from "../../../../data/coffees";

export function OurCoffees(){
    return(
        <OurCoffeesContainer className="container">
            <TitleText size="l" color="subtitle" >Nossos cafés</TitleText>
            <CoffeeList>
                {coffees.map((coffee) => (
                    <CoffeeCard key={coffee.id} coffee={coffee}/>
                ))}
            </CoffeeList>
        </OurCoffeesContainer>
    )
}