import React from 'react';

import CollectionPreview from '../../components/collection-preview/collection-preview.component'

import SHOP_DATA from './shop.data.js';

class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            collections: SHOP_DATA
        };
    }

    render() {
        const {collections} = this.state;
        return (<div className="shop-page">
            {
                collections.map(({id, ...otherCollectionPropos}) => (
                    <CollectionPreview key={id} {...otherCollectionPropos}/>
                ))
            }
        </div>);
    }
}

export default ShopPage;