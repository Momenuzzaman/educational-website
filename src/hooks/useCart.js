import { useEffect, useState } from "react";
import { getStoredCart } from "../Components/utilities/fakedb";


const useCart = (tutorials) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = getStoredCart();
        const saveCart = [];
        for (const id in storedCart) {
            const addedTutorial = tutorials.find(tutorial => tutorial.id === id);
            if (addedTutorial) {
                const quantity = storedCart[id];
                addedTutorial.quantity = quantity;
                saveCart.push(addedTutorial);
            }
        }
        setCart(saveCart);
    }, [tutorials]);
    return [cart, setCart];
};
export default useCart;