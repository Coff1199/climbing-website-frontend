import { useState } from "react";
import ClimbingRoute from "../components/ClimbingRoute";
import AddRoute from "../components/AddRoute";
import EditRouteData from "../components/EditRouteData";
import AddData from "../components/AddData";

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

    function newRoute(name, grade, setter, img) {
        const newRoute = {
          id: listRoutes[listRoutes.length-1].id+1,
          name: name,
          grade: grade,
          setter: setter,
          flashes: 0,
          send: 0,
          img: img
        }
        setListRoutes([...listRoutes, newRoute]);
      }

      function updateRoute(id, newName, newGrade, newSetter) {
        const updatedListRoutes = listRoutes.map((route) => {
            if (id === route.id) {
              return { ...route, name: newName, setter: newSetter, grade: newGrade };
            }
            return route;
          }
        );
        setListRoutes(updatedListRoutes);
      }

      function updateData(id, flashes, sends) {
        const updatedListRoutes = listRoutes.map((route) => {
            if (id === route.id) {
                if (Number(flashes) >= 0 && Number(sends) >= 0) {
                    return { ...route, flashes: Number(route.flashes) + Number(flashes), sends: Number(route.sends) + Number(sends)};
                }
            }
            return route;
          }
        );
        setListRoutes(updatedListRoutes);
      }

    return (
        <div className='flex flex-wrap justify-center '>
            {listRoutes.map((r) => {
                const editRouteData = <EditRouteData
                id={r.id}
                name={r.name}
                grade={r.grade}
                setter={r.setter}
                updateRoute={updateRoute}
              />
              const addData = <AddData
                id={r.id}
                sends={r.name}
                flashes={r.grade}
                updateData={updateData}
              />
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
                    editRouteData = {editRouteData}
                    addData = {addData}
                />
                );
            })}
            <AddRoute newRoute={newRoute} />
        </div>
    )
}