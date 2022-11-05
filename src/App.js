// React
import React, { useEffect, useState } from "react";

// Components
import Modal from "./Modal";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section className="container d-flex flex-column justify-content-center align-items-center" style={{gap:20}}>
      <button
        type="button"
        className="openModalBtn btn btn-info text-white"
        onClick={() => {
          setOpenModal(!openModal);
        }}
      >
        PoKemon generator
      </button>
      {openModal && <Modal closeModal={setOpenModal} />}
    </section>
  );
}

export default App;
