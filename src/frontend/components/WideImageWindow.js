export default function WideImageWindow(props) {
    return (
        <div className="w-full rounded overflow-hidden shadow-lg m-2">
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
                {props.tags?.map((t, index) => (
                    <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {t}
                    </span>
                ))}
            </div>
        </div>
    );
}
