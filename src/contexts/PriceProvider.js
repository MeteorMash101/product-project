import { useReducer } from 'react';

import PriceContext from './price-context';

const defaultPriceState = {
    colorToPrice: new Map([
        ["RED", 300],
        ["YELLOW", 250],
        ["BLUE", 180],
        ["GREEN", 100],
        ["PURPLE", 80],
        ["ORANGE", 50],
        ["PINK", 25],
        ["GREY", 10],
    ]),
};

const priceReducer = (state, action) => {
    if (action.type === 'SET_COLOR_TO_PRICE') {
        let updatedColorToPrice = new Map(state.colorToPrice) // create copy of map
        updatedColorToPrice.set(action.colorToSet, action.newPrice)
        return {
            colorToPrice: updatedColorToPrice,
        };
    }
    return defaultPriceState; // safety (shudnt reach here...!)
};

const PriceProvider = (props) => {
    const [priceState, dispatchCartAction] = useReducer(
        priceReducer,
        defaultPriceState
    );
    const setColorToPriceHandler = (colorToSet, newPrice) => { // item b/c when you add said 'item' it is grouped w/ the same types.
        dispatchCartAction({ type: 'SET_COLOR_TO_PRICE', colorToSet: colorToSet, newPrice: newPrice });
    };
    const priceContext = {
        colorToPrice: priceState.colorToPrice,
        setColorToPrice: setColorToPriceHandler,
    };
    return (
        <PriceContext.Provider value={priceContext}>
            {props.children}
        </PriceContext.Provider>
    );
};

export default PriceProvider;
