import React from "react";
import { Routes, Route } from "react-router-dom";
import "./shop.styles.scss";
import { db, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import CollectionPage from "../collection/collection.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { collection, onSnapshot } from "firebase/firestore";

class ShopPage extends React.Component {
  unsubscribeFromSnapShot = null;

  componentDidMount() {
    const collectionRef = collection(db, "collections");
    
    onSnapshot(collectionRef, (snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
        console.log(collectionsMap);
        }
    );
  
  }

  render() {
    return (
      <div className="shop-page">
        <Routes>
          <Route index element={<CollectionsOverview />} />
          <Route path=":collectionID" element={<CollectionPage />} />
        </Routes>
      </div>
    );
  }
}

export default ShopPage;
