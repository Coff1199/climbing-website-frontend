import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

export default function AddData(props) {
    const id  = props.id;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button 
                onClick={handleShow} 
                className="px-4 py-1 text-sm text-red-700 font-semibold rounded-full border border-red-300 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2">
                Delete Route
            </button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>Delete Route</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form id='editmodal' className="w-full max-w-sm" onSubmit= {(e) => {
                        e.preventDefault();
                        props.deleteRouteData(id);
                    }}>
                        <div className="font-bold">
                            <div className="pr-4">
                                <h2 className="text-gray-500">
                                    Are you sure you want to delete this route?
                                </h2>
                                <p className="underline text-red-500">
                                    This action can not be undone
                                </p>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                <button 
                    className="bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded" 
                    onClick={handleClose}
                >
                    Cancel
                </button>
                <button 
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" 
                    form='editmodal'
                    onClick={handleClose}
                >
                    Confirm Deletion
                </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}