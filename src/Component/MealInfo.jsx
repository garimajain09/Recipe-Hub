import { useState } from "react";
import { NavLink, useParams } from "react-router-dom"

function MealInfo() {
    const { mealid } = useParams();
    const [info, setInfo] = useState();
    const getInfo = async () => {
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
        const jsonData = await get.json();
        setInfo(jsonData.meals[0]);
    }
    if (info != "") {
        getInfo();
    }
    return (
        <div className="mymeal">
            {
                !info ? "Data Not found" :
                    <div className="mealInfo">
                        <img src={info.strMealThumb} />
                        <div className="info">
                            <h1>Recipe Detail</h1>
                            <button>{info.strMeal}</button>
                            <h3>Instructions</h3>
                            <p>{info.strInstructions}</p>
                        </div>
                        
                    </div>
            }
            <NavLink to='/'><p className="back"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
</svg>
</p></NavLink>
            
        </div>

    )
}

export default MealInfo
