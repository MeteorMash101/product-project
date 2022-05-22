import React from 'react';

const PriceContext = React.createContext({
    // just dummy data (for auto-completion)
    colorToPrice: new Map(),
    setColorToPrice: (colorToSet, newPrice) => {}
});

export default PriceContext;