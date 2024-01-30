import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    setShowModal(true);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowModal(false);
    }
  };

  return (
    <div>
      {/* Your regular page content */}

      {showModal && (
        <div className="modal fixed inset-0 overflow-y-auto">
          <div className="modal-content flex items-center justify-center min-h-screen pt-4 pb-20 text-center">
            <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>

            <div
              ref={modalRef}
              className={`modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto relative transform transition-transform duration-500 ease-in-out animate-${showModal ? 'enter' : 'leave'}`}
            >
              <button
                className="close-button absolute top-4 right-4"
                onClick={() => setShowModal(false)}
              >
                <FontAwesomeIcon icon={faTimes} className="text-purple-500" />
              </button>

              <div className="bg-amber-50 p-8 rounded-xl text-black">
                <h3 className="text-red-400 font-medium pt-2 pb-4">Work in Progress</h3>
                <p className="py-2">Currently, I am working on this.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
