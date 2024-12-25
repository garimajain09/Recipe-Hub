import { useState } from "react";
import MealCards from "./MealCards";

const MainPage = () => {
    const [data, setData] = useState();
    const [search, setSearch] = useState("");
    const [msg, setMsg] = useState("");

    const handleInput = (e) => {
        setSearch(e.target.value);
    }
    const myfun = async () => {
        if (search == "") {
            setMsg("Please Enter Something");
        }
        else {
            const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            const jsonData = await get.json();
            setData(jsonData.meals);
            setMsg("");
        }

    }

    return (
        <>
            <h1 className="h1">RECIPE HUB</h1>
            <div className="container">
                <div className="searchBar">
                    <input type='text' placeholder="Enter Dish" onChange={handleInput} />
                    <button onClick={myfun}>Search
                    </button>
                </div>
                <h4 className="h1">{msg}</h4>
                {search ? <div>
                    <MealCards detail={data} />
                </div> : <p className="p"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="icon" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg> <br/>Search You favourite dish to know its Recipe</p>}

            </div>
        </>
    )
}

export default MainPage
