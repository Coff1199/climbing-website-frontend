import { useState } from "react";
import ClimbingRoute from "../components/ClimbingRoute";

export default function ClimbingRoutes() {
    const [listRoutes, setListRoutes] = useState(
        [
            {
                id: 0,
                grade: 'V4',
                name: '',
                setter: 'John Doe',
                flashes: 2,
                sends: 30,
                img: ''
            },

            {
                id: 1,
                grade: 'V3',
                name: '',
                setter: 'John Doe',
                flashes: 10,
                sends: 67,
                img: ''
            }
        ]
    );

    return (
        <div className='flex flex-wrap'>
            <ClimbingRoute 
                name='Blue devil'
                grade='V3'
                setter='John'
                flashes='27'
                sends='100'
            />
            <ClimbingRoute 
                name='baba'
                grade='V3'
                setter='John'
                flashes='27'
                sends='100'
            />
            <ClimbingRoute 
                name='baba'
                grade='V3'
                setter='John'
                flashes='27'
                sends='100'
            />
            <ClimbingRoute 
                name='baba'
                grade='V3'
                setter='John'
                flashes='27'
                sends='100'
            />
        </div>
    )
}