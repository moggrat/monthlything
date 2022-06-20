import { useParams } from 'react-router-dom';

import ThingGallery from "../utils/thinggallery";
import LargeThing from "../utils/largething.js";

function Home() {

    let { id } = useParams();

    if(id){
        return (
        <>
            <LargeThing id={id}/>
        </>
        );
    }
    else{
        return (
        <>
            <h1>Gallery</h1>
            <ThingGallery/>
        </>
        );
    }


}

export default Home;
