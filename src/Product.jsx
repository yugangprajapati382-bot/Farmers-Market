import React from 'react'
import Shop from './Shop';
import Nav from './Nav';
import Box from './Box';
import Cal from './Cal';
import From from './From';
import Put from './Put';
import Pul from './Pul';

function Product() {
    return (
        <div>
            <Nav />
            <Shop />
            <Cal />
            <Box />
            <Put/>
            <Pul/>
            <From/>
        </div>
    )
}

export default Product;
