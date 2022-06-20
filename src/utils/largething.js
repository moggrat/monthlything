import { useState } from 'react';
import { useEffect } from 'react';


function LargeThing(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    // EFFECT: FETCH JSON
    useEffect(() => {
        fetch("https://moggrat.com/api-data/monthly-thing-data/"+props.id, 
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
        return <div className="pagetext">Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div className="pagetext">Loading...</div>;
    } else if (items["monthly-things"].thing[0]) {
        return (
            <>
                <div className="largeThing">
                    <img src={items["monthly-things"].thing[0].image} alt="Thing Name" />
                    <h1>{items["monthly-things"].thing[0].title}</h1>
                    <p>{items["monthly-things"].thing[0].description}  </p>
                    <p className='month'>({items["monthly-things"].thing[0].month})</p>
                </div>
            </>
        );
    }
    else {
        return (
            <div className="pagetext">
                <h1>Invalid Thing</h1>
                <p>The thing ID did not match any in our database... sorry.</p>
            </div>
        );
    }





}

export default LargeThing;
