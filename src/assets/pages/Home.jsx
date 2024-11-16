import React from "react";
import MainLayout from "../layouts/main";
import MapView from "../components/MapView/main";
import Search from "../components/Search/main";

function Home(){
    return (
        <MainLayout>
            {/* <Search/> */}
            <MapView/>
        </MainLayout>
    );
}

export default Home; 


