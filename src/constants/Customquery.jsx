import { useEffect, useContext, useState } from 'react';
import { UserContext } from './UserContextProvider';
import axios from 'axios';

const Customquery = () => {
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const { setData } = useContext(UserContext)


    useEffect(() => {
        ;(async () => {
            try {
                setError(false)
                const response = await axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
                console.log(response.data)
                setData(response.data)
                setLoading(false)



            }
            catch (error) {
                setError(true)
            }

        })()





    }, [setData]);

    if (error) {
        return (
            <div>
                <h1>Error Occured</h1>
            </div>
        )
    }
    if (loading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }


    return null;
}

export default Customquery;