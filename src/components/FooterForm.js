export default function FooterForm(props) {
    return (
        <>
        <div className="bg-gray-300 py-1 flex flex-col justify-center">
            <form id="contact-form" onSubmit={(info) => {
                console.log(info)
            }}>
                <div className="m-2">
                    <h3 className="flex justify-center">Have any questions or suggestions?</h3>
                    <div className="flex flex-col items-center mb-6"> 
                        <div>
                            <label 
                                for="name"
                                className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
                            >
                                Name 
                            </label>
                            <input 
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded max-w-25 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                                id="name" 
                                type="text" 
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label 
                                for="email"
                                className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
                            >
                                Email 
                            </label>
                            <input 
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded max-w-25 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                                id="email" 
                                type="text" 
                                placeholder="john.doe1234@gmail.com"
                            />
                        </div>
                        <div>
                            <label 
                                for="suggestion-box"
                                className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
                            >
                                Questions/Suggestions 
                            </label>
                            <input 
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded max-w-25 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500 h-10"
                                id="suggestion-box" 
                                type="text" 
                            />
                        </div>
                    </div>
                </div>
            </form>
            <button 
                className="flex justify-center bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-2" 
                form='contact-form'
                /*onClick=*/
            >
                Contact
            </button>
        </div>
    </>
    )
}