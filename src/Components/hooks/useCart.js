import { useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = tutorials => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = getStoredCart();
        const saveCart = [];
        for (const id in storedCart) {
            const addToTutorial = tutorials.find(tutorial => tutorial.id === id);
            if (addToTutorial) {
                const quantity = storedCart[id];
                addToTutorial.quantity = quantity;
                saveCart.push(addToTutorial);
            }
            setCart(saveCart);
        }
    }, [tutorials]);
    return [cart, setCart];
};