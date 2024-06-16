export default function ImageWindow(props) {
    return (
        <div className="flex flex-wrap max-w-sm rounded overflow-hidden shadow-lg p-2">
            <img
                className="w-full" 
                src={props.src}
                alt={props.alt}
            />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                    {props.title}
                </div>
                <p className="text-gray-700 text-base">
                    {props.text}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {props.tags?.map((t) => {
                    return (
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            {t}
                        </span>
                    );
                })}
            </div>
        </div>
    );
}