    import React from "react";
import { Routes, Route } from "react-router-dom";
import './shop.styles.scss';
import CollectionPage from "../collection/collection.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

const ShopPage = () => {
    return (
        <div className="shop-page">
            <Routes>
                <Route index element={<CollectionsOverview />} />
                <Route path=":collectionID" element={<CollectionPage />} />
            </Routes>
        </div>
    );
};

export default ShopPage;
