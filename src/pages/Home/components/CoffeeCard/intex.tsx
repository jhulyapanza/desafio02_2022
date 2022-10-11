import {RegularText, TitleText } from "../../../../components/Typhography";
import {AddCartWrapper, CardFooter, CoffeeCardContainer, Description, Name, Tags} from "./styles";
import {QuantityInput} from "../../../../components/QuantityInput";
import {ShoppingCart} from "phosphor-react";
import {formatMoney} from "../../../../utils/formatMoney";
import {useCart} from "../../../../hooks/useCart";
import {useState} from "react";
import {set} from "immer/dist/utils/common";

export interface Coffee{
    id: number;
    tags: string[];
    name: string;
    description: string;
    photo: string;
    price: number;
}

interface CoffeeProps{
    coffee: Coffee;
}

export function CoffeeCard({coffee}: CoffeeProps){
    const [quantity, setQuantity] = useState(1);
    const {addCoffeeToCart} = useCart();

    function handleIncrease (){
        setQuantity(state => state + 1);
    }

    function handleDecrease(){
        setQuantity(state => state -1)
    }

    function handleAddToCart(){
        const coffeeToAdd ={
            ...coffee,
            quantity: 1
        }
        addCoffeeToCart(coffeeToAdd)
    }
    const formattedPrice = formatMoney(coffee.price);
    return (
        <CoffeeCardContainer>
            <img src={`/coffees/${coffee.photo}`} alt=""/>
            <Tags>
                {coffee.tags.map(tag => (
                    <span key={`${coffee.id}${tag}`}>{tag}</span>
                ))}
            </Tags>
            <Name>{coffee.name}</Name>
            <Description>{coffee.description}</Description>
            <CardFooter>
                <div>
                    <RegularText size="s">R$</RegularText>
                    <TitleText size="m" color="text" as="strong">{formattedPrice}</TitleText>
                </div>
                <AddCartWrapper>
                    <QuantityInput
                        onIncrease={handleIncrease}
                        onDecrease={handleDecrease}
                        quantity={quantity}
                    />
                    <button onClick={handleAddToCart}>
                        <ShoppingCart size={22} weight="fill"/>
                    </button>
                </AddCartWrapper>
            </CardFooter>
        </CoffeeCardContainer>
    )
}