import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

export default function AddData(props) {
    const id  = props.id;
    const [flashes, setFlashes] = useState('');
    const [sends, setSends] = useState('');

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button 
                onClick={handleShow} 
                className="px-4 py-1 text-sm text-green-700 font-semibold rounded-full border border-green-300 hover:text-white hover:bg-green-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2">
                Add Data
            </button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>Add data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form id='editmodal' className="w-full max-w-sm" onSubmit= {(e) => {
                        e.preventDefault();
                        setFlashes('');
                        setSends('');
                        props.updateData(id, flashes, sends);
                    }}>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="flashes">
                                    Flashes to add
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" 
                                    id="flashes" 
                                    placeholder="0"
                                    type="text" 
                                    value={flashes}
                                    onChange={(e) => {
                                        setFlashes(e.target.value)
                                    }}
                                />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="sends">
                                Sends to add
                            </label>
                            </div>
                            <div className="md:w-2/3">
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" 
                                    id="sends"
                                    type="text"
                                    placeholder="0"
                                    value={sends}
                                    onChange={(e) => {
                                        setSends(e.target.value)
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
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" 
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