import { useState } from 'react';
import { useEffect } from 'react';
import { Link} from "react-router-dom";


function LargeThing() {
    // TODO year state >>> load <yearnav> which changes year state 
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // EFFECT: FETCH JSON
    useEffect(() => {
        fetch("https://moggrat.com/api-data/monthly-thing-data/",
        )
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    // JSON RETURN
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <>
                <div className='thing-gallery'>
                    {items["monthly-things"].thing.map(item => (

                        <article className="smallThing">
                            <Link to={"/gallery/"+item.id}>
                            <img src={item.image} alt="Thing Name" />
                            <h2>{item.title}</h2>
                            <p className='month'>({item.month})</p>
                            </Link>
                        </article>
                    ))}
                </div>
            </>
        );
    }

}

export default LargeThing;
