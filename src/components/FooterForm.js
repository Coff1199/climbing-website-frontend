import { useState } from "react";
const apiUrl = process.env.REACT_APP_API_CONN;

export default function FooterForm() {
    const [name, setName] = useState('');
    const [suggestion, setSuggestion] = useState('');

    return (
        <>
        <div className="bg-gray-300 py-5 flex flex-col justify-center">
            <form id="suggestion-form" onSubmit={(e) => {
                e.preventDefault();
                console.log(apiUrl);
                fetch(apiUrl+'/api/v1/form-data', {
                    method:"POST",
                    headers: { "Content-Type": "application/json"},
                    body: JSON.stringify({name, suggestion})
                })
                .then(()=> {
                    console.log("Sent form data")
                })
                setName('');
                setSuggestion('');
            }}>
                <div className="m-2">
                    <h3 className="flex justify-center">Have any issues or suggestions?</h3>
                    <div className="flex flex-col items-center mb-6"> 
                        <div>
                            <label 
                                htmlFor="name"
                                className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
                            >
                                Name 
                            </label>
                            <input 
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded max-w-25 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                                id="name" 
                                type="text" 
                                placeholder="John Doe"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value)
                                }}
                            />
                        </div>
                        <div>
                            <label 
                                htmlFor="suggestion-box"
                                className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
                            >
                                Issues/Suggestions 
                            </label>
                            <input 
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded max-w-25 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500 h-20"
                                id="suggestion-box" 
                                type="text" 
                                value={suggestion}
                                onChange={(e) => {
                                    setSuggestion(e.target.value)
                                }}
                            />
                        </div>
                        <div>
                            <input 
                                className="flex justify-center bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-2" 
                                id="submit-button"
                                type="submit"
                                text="Send"
                                form="suggestion-form"
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </>
    )
}