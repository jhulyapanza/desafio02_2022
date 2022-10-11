import {HomeContainer} from "./styles";
import {Intro} from "./components/Intro";
import {OurCoffees} from "./components/OurCoffees";
import {useCart} from "../../hooks/useCart";

export function HomePage(){
    const {cartItens} = useCart();
    return (
        <HomeContainer>
            <Intro/>
            <OurCoffees/>
        </HomeContainer>
    );
}