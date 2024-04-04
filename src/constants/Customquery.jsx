import React, { useEffect, useContext } from 'react';
import { UserContext } from './UserContextProvider';

const Customquery = () => {
    const { setUser } = useContext(UserContext);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const url = "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae";
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }
                const userData = await response.json();
                setUser(userData);
            } catch (error) {
                console.error("Error fetching data:", error);
                // Optionally, handle error state or display a message to the user
            }
        };

        fetchApi();

        // Cleanup function (optional)
        return () => {
            // Any cleanup code can go here if necessary
        };
    }, [setUser]); // Add dependencies if needed

    // Since this component is only responsible for fetching data, return null
    return null;
}

export default Customquery;

// const[data, setData] = useState(null)
//   useEffect( ()=>{
//         const fetchApi = async() => {
//           const url = "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
//           const response = await fetch(url);
//           const resJson = await response.json();
//           console.log(resJson);
    
//           setData(resJson);
//         }
//         fetchApi();
//       },[])

// if(error){
//     return (<h1>Error</h1>)
// }
// if(loading){
//     return (<h1>Loading...</h1>)
// }


 // const fetchapi = async ()=>{
        //     try {
        //         setLoading(true)
        //         setError(false)
        //         const response = await axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
        //         console.log(response.data)
        //         setUser(response.data)
        //         setLoading(false)
        //     } catch (error) {
        //         setError(true)
        //         setLoading(false)
        //     }
        // }
        // fetchapi();