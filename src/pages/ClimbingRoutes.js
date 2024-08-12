import { useState, useEffect } from "react";
import ClimbingRoute from "../components/ClimbingRoute";
import AddRoute from "../components/AddRoute";
import EditRouteData from "../components/EditRouteData";
import AddData from "../components/AddData";

export default function ClimbingRoutes() {
    const [listRoutes, setListRoutes] = useState([])

    function newRoute(name, grade, setter) {
        const newRoute = {
          name: name,
          grade: grade,
          setter: setter,
          flashes: 0,
          sends: 0,
        }
        fetch('http://127.0.0.1:4000/api/v1/climbing-routes', {
          method: 'POST',
          headers: { "Content-Type": "application/json"},
          body: JSON.stringify(newRoute)
        }).then(() => {
          console.log("New Route Added");
        })
        setListRoutes([...listRoutes, newRoute]);
      }

      useEffect(() => {
        fetch('http://127.0.0.1:4000/api/v1/climbing-routes')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setListRoutes(Array.from(data.data.climbingRoutes))
        })
        .catch((e) => {

        })
      }, [])

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
                    editRouteData = {editRouteData}
                    addData = {addData}
                />
                );
            })}
            <AddRoute newRoute={newRoute} />
        </div>
    )
}