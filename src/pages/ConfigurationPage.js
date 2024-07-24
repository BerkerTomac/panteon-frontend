import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchConfigurations, addConfiguration } from '../features/configuration/actions/configurationActions';
import './ConfigurationPage.css';
import AddConfigurationModal from '../components/Modals/ConfigurationModal';
import ConfigurationTable from '../components/ConfigurationTable/ConfigurationTable';

const ConfigurationPage = () => {
  const dispatch = useDispatch();
  const { configurations, status, error } = useSelector((state) => state.configuration);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(fetchConfigurations());
  }, [dispatch]);

  const handleAddConfiguration = async (configuration) => {
    await dispatch(addConfiguration(configuration));
    dispatch(fetchConfigurations()); // Fetch configurations again to refresh the table
    setShowModal(false);
  };

  return (
    <div className="configuration-page">
      <h1>Building Configurations</h1>
      {status === 'loading' && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <ConfigurationTable data={configurations} />
      <button className="add-button" onClick={() => setShowModal(true)}>Add Configuration</button>
      {showModal && (
        <AddConfigurationModal 
          onClose={() => setShowModal(false)}
          onSave={handleAddConfiguration}
          existingConfigurations={configurations}
        />
      )}
    </div>
  );
};

export default ConfigurationPage;
