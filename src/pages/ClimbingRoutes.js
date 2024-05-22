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
            },

            {
                id: 2,
                grade: 'V3',
                name: '',
                setter: 'John Doe',
                flashes: 10,
                sends: 67,
                img: ''
            },

            {
                id: 3,
                grade: 'V3',
                name: '',
                setter: 'John Doe',
                flashes: 10,
                sends: 67,
                img: ''
            },

            {
                id: 4,
                grade: 'V3',
                name: '',
                setter: 'John Doe',
                flashes: 10,
                sends: 67,
                img: ''
            },

            {
                id: 5,
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
        <div className='flex flex-wrap justify-center '>
            {listRoutes.map((r) => {
                return (
                <ClimbingRoute
                    key={r.id}
                    id={r.id}
                    name={r.name}
                    grade={r.grade}
                    setter={r.setter}
                    flashes={r.flashes}
                    sends={r.sends}
                    img={r.img}
                />
                );
            })}
        </div>
    )
}