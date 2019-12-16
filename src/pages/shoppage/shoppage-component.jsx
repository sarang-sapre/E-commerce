import React from 'react';

import SHOP_DATA from './shopdata';

import CollectionPreview from '../../component/collection-preview/collection-preview.components';


class ShopPage extends React.Component{
constructor(props){
    super(props);
this.state={
 collections:SHOP_DATA
}
}
render(){
    const {collections}=this.state;
    return(
        <div>
            {
                collections.map(({id,...othervalues}) => (
                    <CollectionPreview key={id} {...othervalues}/> 
                ))
            }
        </div>
    )
}
}

export default ShopPage;