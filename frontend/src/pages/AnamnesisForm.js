import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const AnamnesisForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    allergies: '',
    allergiesDetails: '',
    epilepsy: '',
    heartDisease: '',
    heartPass: '',
    diabetes: '',
    respiratory: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="anamnesis-form">
      <h1>{t('form.title')}</h1>
      <form>
        <section>
          <h2>{t('form.medical')}</h2>
          <div>
            <label>{t('form.allergies')}</label>
            <select name="allergies" value={formData.allergies} onChange={handleChange}>
              <option value="">{t('form.select')}</option>
              <option value="yes">{t('form.yes')}</option>
              <option value="no">{t('form.no')}</option>
            </select>
          </div>
          {formData.allergies === 'yes' && (
            <div>
              <label>{t('form.allergiesDetails')}</label>
              <input
                type="text"
                name="allergiesDetails"
                value={formData.allergiesDetails}
                onChange={handleChange}
              />
            </div>
          )}
        </section>
      </form>
    </div>
  );
};

export default AnamnesisForm;