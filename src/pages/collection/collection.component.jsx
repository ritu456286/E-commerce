import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCollection} from "../../features/shop/shopSelectors";
import CollectionItem from "../../components/collection-item/collection-item.component";

import './collection.styles.scss';

const CollectionPage = () => {
    const { collectionID } = useParams();
     
    const collection = useSelector(selectCollection)( collectionID);   
    const { title, items } = collection;

    return (

    <div className="collection-page">
        <h2 className="title">{title}</h2>
        <div className="items">
            {items.map(item => (
                <CollectionItem key={item.id} item={item}/>
            ))}
        </div>
    </div>
    );
};

export default CollectionPage;

