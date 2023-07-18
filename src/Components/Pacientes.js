import React, { useState } from 'react';
import axios from 'axios';
import Table from 'tu_componente_tabla'; // Importa el componente de tabla que estés utilizando
import Modal from 'tu_componente_modal'; // Importa el componente de modal que estés utilizando

const MyComponent = () => {
  const [data, setData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Función para cargar los datos desde la API
  const loadData = () => {
    axios.get('http://31.220.21.118:8000/api/paciente/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  // Función para crear un nuevo registro
  const createItem = (newItem) => {
    axios.post('http://31.220.21.118:8000/api/paciente/', newItem)
      .then(response => {
        loadData();
        setModalOpen(false);
      })
      .catch(error => {
        console.log(error);
      });
  };

  // Función para actualizar un registro existente
  const updateItem = (updatedItem) => {
    axios.put(`http://31.220.21.118:8000/api/paciente/${updatedItem.id}`, updatedItem)
      .then(response => {
        loadData();
        setModalOpen(false);
        setSelectedItem(null);
      })
      .catch(error => {
        console.log(error);
      });
  };

  // Función para eliminar un registro
  const deleteItem = (itemId) => {
    axios.delete(`http://31.220.21.118:8000/api/paciente/${itemId}`)
      .then(response => {
        loadData();
      })
      .catch(error => {
        console.log(error);
      });
  };

  // Función para abrir el modal de nuevo registro
  const openNewModal = () => {
    setSelectedItem(null);
    setModalOpen(true);
  };

  // Función para abrir el modal de edición de un registro
  const openEditModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
  };

  // Carga los datos iniciales al montar el componente
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <button onClick={openNewModal}>Nuevo</button>
      <Table data={data} onEdit={openEditModal} onDelete={deleteItem} />

      {modalOpen && (
        <Modal onClose={closeModal}>
          <Form
            item={selectedItem}
            onSave={selectedItem ? updateItem : createItem}
            onCancel={closeModal}
          />
        </Modal>
      )}
    </div>
  );
};

export default MyComponent;