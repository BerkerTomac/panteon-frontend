import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAvailableBuildingTypes } from '../../features/configuration/actions/configurationActions';
import './ConfigurationModal.css';

const ConfigurationModal = ({ onClose, onSave }) => {
  const dispatch = useDispatch();
  const { availableBuildingTypes, status, error } = useSelector((state) => state.configuration);

  const [buildingType, setBuildingType] = useState('');
  const [buildingCost, setBuildingCost] = useState('');
  const [constructionTime, setConstructionTime] = useState('');
  const [formError, setFormError] = useState('');

  useEffect(() => {
    dispatch(fetchAvailableBuildingTypes());
  }, [dispatch]);

  const handleSave = () => {
    if (!buildingType || !buildingCost || !constructionTime) {
      setFormError('All fields are required.');
      return;
    }
    if (buildingCost <= 0) {
      setFormError('Building cost must be greater than zero.');
      return;
    }
    if (constructionTime < 30 || constructionTime > 1800) {
      setFormError('Construction time must be between 30 and 1800 seconds.');
      return;
    }

    onSave({ buildingType, buildingCost, constructionTime });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add Configuration</h2>
        {formError && <p className="error">{formError}</p>}
        {status === 'loading' && <p>Loading available building types...</p>}
        {error && <p className="error">{error}</p>}
        <div className="form-group">
          <label>Building Type</label>
          <select value={buildingType} onChange={(e) => setBuildingType(e.target.value)}>
            <option value="">Select a building type</option>
            {availableBuildingTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Building Cost</label>
          <input
            type="number"
            value={buildingCost}
            onChange={(e) => setBuildingCost(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Construction Time (seconds)</label>
          <input
            type="number"
            value={constructionTime}
            onChange={(e) => setConstructionTime(e.target.value)}
          />
        </div>
        <button onClick={handleSave}>OK</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default ConfigurationModal;
