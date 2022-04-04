import { useEffect, useState } from "react";
import { data } from "../Data/data.js";

const useReviews = () =>{
    
    const [reviews, setReviews] = useState([]);

    useEffect( () =>{setReviews(data);
    }, []);

    return [reviews, setReviews];
}

export default useReviews;