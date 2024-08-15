function ClimbingRoute(props) {
    return (
        <div className="m-2 py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5">
                    <p className="text-lg text-black font-semibold">
                        {props.name}
                    </p>
                    <p className="text-slate-500 font-medium">
                        Grade: {props.grade}
                    </p>
                    <p className="text-slate-500 font-medium">
                        Setter: {props.setter}
                    </p>
                    <p className="text-slate-500 font-medium">
                        Number of Flashes: {props.flashes}
                    </p>
                    <p className="text-slate-500 font-medium">
                        Number of Sends: {props.sends}
                    </p>
                </div>
                {props.editRouteData}
                {props.addData}
                {props.deleteRoute}
            </div>
        </div>
    );
} 


export default ClimbingRoute;