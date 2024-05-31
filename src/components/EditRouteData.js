import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function EditRouteData(props) {
    const id  = props.id;
    const [name, setName] = useState('');
    const [grade, setGrade] = useState('');
    const [setter, setSetter] = useState('');

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button 
                onClick={handleShow} 
                class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-300 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                Edit Route Data
            </button>

        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
            <Modal.Title>Edit Route Data</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form id='editmodal' className="w-full max-w-sm" onSubmit= {(e) => {
                    e.preventDefault();
                    setName('');
                    setGrade('');
                    setSetter('');
                    props.updateRoute(id, name , grade, setter);
                }}>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="name">
                                Route Name
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                                id="name" 
                                placeholder="Route1"
                                type="text" 
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value)
                                }}
                            />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="grade">
                            Grade
                        </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                                id="grade"
                                type="text"
                                placeholder="V0"
                                value={grade}
                                onChange={(e) => {
                                    setGrade(e.target.value)
                                }}
                            />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="setter">
                            Setter
                        </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                                id="setter" 
                                type="text"
                                placeholder="John Smith"
                                value={setter}
                                onChange={(e) => {
                                    setSetter(e.target.value)
                                }}
                            />
                        </div>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
            <button 
                className="bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded" 
                onClick={handleClose}
            >
                Close
            </button>
            <button 
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" 
                form='editmodal'
                onClick={handleClose}
            >
                Confirm
            </button>
            </Modal.Footer>
        </Modal>
    </>
  );
}

export default EditRouteData;