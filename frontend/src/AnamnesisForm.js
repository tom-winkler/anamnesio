import React, { useState } from 'react';
import './AnamnesisForm.css';

function AnamnesisForm() {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    birthDate: '',
    address: '',
    phone: '',
    email: '',
    
    // Doctor Information
    familyDoctor: '',
    familyDoctorAddress: '',
    
    // Medical Conditions
    hasAllergies: 'no',
    allergiesDetails: '',
    hasEpilepsy: 'no',
    
    // Heart Conditions
    hasHeartConditions: 'no',
    heartConditions: {
      highBloodPressure: false,
      lowBloodPressure: false,
      heartAttack: false,
      pacemaker: false,
      valveDefect: false,
      myocarditis: false,
      artificialValve: false,
      other: ''
    },
    hasHeartPass: 'no',
    
    // Other Medical Conditions
    hasDiabetes: 'no',
    hasRespiratoryDisease: 'no',
    respiratoryDetails: '',
    hasThrombosis: 'no',
    thrombosisDetails: '',
    hasLiverDisease: 'no',
    hasCancer: 'no',
    cancerDetails: '',
    hasBleedingDisorder: 'no',
    hasInfectiousDisease: 'no',
    infectiousDiseaseDetails: '',
    hasArtificialJoints: 'no',
    
    // Medications
    takesMedications: 'no',
    medicationDetails: '',
    
    // Other Conditions
    hasOtherConditions: 'no',
    otherConditionsDetails: '',
    
    // Pregnancy (for female patients)
    isPregnant: 'no',
    pregnancyMonth: '',
    
    // Recall Service
    wantsRecall: 'no',
    
    // Agreements
    agreesWithDataPrivacy: false,
    agreesWithAppointmentPolicy: false,
    
    // Signature
    signatureDate: '',
    signature: ''
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  // Single function to handle nested checkbox/text changes
  const handleNestedInputChange = (event) => {
    const { name, type, checked, value } = event.target;
    // Split name="heartConditions.highBloodPressure" into [ 'heartConditions', 'highBloodPressure' ]
    const [parentKey, childKey] = name.split('.');
    setFormData((prev) => ({
      ...prev,
      [parentKey]: {
        ...prev[parentKey],
        [childKey]: type === 'checkbox' ? checked : value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add email sending logic here
  };

  return (
    <form onSubmit={handleSubmit} className="anamnesis-form">
      <h2>Anamnesebogen</h2>

      <section>
        <h3>Persönliche Informationen</h3>
        <div className="form-group">
          <label>Vorname:</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
          
          <label>Nachname:</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
          
          <label>Geburtsdatum:</label>
          <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} required />
          
          <label>Adresse:</label>
          <input type="text" name="address" value={formData.address} autoComplete="street-address" onChange={handleChange} required />
          
          <label>Telefon:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          
          <label>E-Mail:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
      </section>

      <section>
        <h3>Arzt Informationen</h3>
        <div className="form-group">
          <label>Hausarzt:</label>
          <input type="text" name="familyDoctor" value={formData.familyDoctor} autoComplete="off" onChange={handleChange} />
          
          <label>Adresse des Hausarztes:</label>
          <textarea name="familyDoctorAddress" value={formData.familyDoctorAddress} autoComplete="off" onChange={handleChange} />
        </div>
      </section>

      <section>
        <h3>Medizinische Bedingungen</h3>
        <div className="form-group">
          <label>Haben Sie Allergien?</label>
          <select name="hasAllergies" value={formData.hasAllergies} onChange={handleChange}>
            <option value="no">Nein</option>
            <option value="yes">Ja</option>
          </select>
          
          {formData.hasAllergies === 'yes' && (
            <div>
              <label>Details zu Allergien:</label>
              <textarea name="allergiesDetails" value={formData.allergiesDetails} onChange={handleChange} />
            </div>
          )}
          
          <label>Haben Sie Epilepsie?</label>
          <select name="hasEpilepsy" value={formData.hasEpilepsy} onChange={handleChange}>
            <option value="no">Nein</option>
            <option value="yes">Ja</option>
          </select>
        </div>
      </section>

      <section>
        <h3>Herzbedingungen</h3>
        <div className="form-group">
          <label>Haben Sie Herzprobleme?</label>
          <select name="hasHeartConditions" value={formData.hasHeartConditions} onChange={handleChange}>
            <option value="no">Nein</option>
            <option value="yes">Ja</option>
          </select>
          
          {formData.hasHeartConditions === 'yes' && (
            <div className="heart-conditions">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="heartConditions.highBloodPressure"
                  checked={formData.heartConditions.highBloodPressure}
                  onChange={handleNestedInputChange}
                />
                Bluthochdruck
              </label>

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="heartConditions.lowBloodPressure"
                  checked={formData.heartConditions.lowBloodPressure}
                  onChange={handleNestedInputChange}
                />
                Niedriger Blutdruck
              </label>

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="heartConditions.heartAttack"
                  checked={formData.heartConditions.heartAttack}
                  onChange={handleNestedInputChange}
                />
                Herzinfarkt
              </label>

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="heartConditions.pacemaker"
                  checked={formData.heartConditions.pacemaker}
                  onChange={handleNestedInputChange}
                />
                Herzschrittmacher
              </label>

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="heartConditions.valveDefect"
                  checked={formData.heartConditions.valveDefect}
                  onChange={handleNestedInputChange}
                />
                Herzklappenfehler
              </label>

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="heartConditions.myocarditis"
                  checked={formData.heartConditions.myocarditis}
                  onChange={handleNestedInputChange}
                />
                Herzmuskelentzündung
              </label>

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="heartConditions.artificialValve"
                  checked={formData.heartConditions.artificialValve}
                  onChange={handleNestedInputChange}
                />
                Künstliche Herzklappe
              </label>

              <label className="checkbox-label">
                Andere:
                <textarea
                  name="heartConditions.other"
                  value={formData.heartConditions.other}
                  onChange={handleNestedInputChange}
                />
              </label>
            </div>
          )}
          
          <label>Haben Sie einen Herzpass?</label>
          <select name="hasHeartPass" value={formData.hasHeartPass} onChange={handleChange}>
            <option value="no">Nein</option>
            <option value="yes">Ja</option>
          </select>
        </div>
      </section>

      <section>
        <h3>Andere medizinische Bedingungen</h3>
        <div className="form-group">
          <label>Haben Sie Diabetes?</label>
          <select name="hasDiabetes" value={formData.hasDiabetes} onChange={handleChange}>
            <option value="no">Nein</option>
            <option value="yes">Ja</option>
          </select>
          
          <label>Haben Sie Atemwegserkrankungen?</label>
          <select name="hasRespiratoryDisease" value={formData.hasRespiratoryDisease} onChange={handleChange}>
            <option value="no">Nein</option>
            <option value="yes">Ja</option>
          </select>
          
          {formData.hasRespiratoryDisease === 'yes' && (
            <div>
              <label>Details zu Atemwegserkrankungen:</label>
              <textarea name="respiratoryDetails" value={formData.respiratoryDetails} onChange={handleChange} />
            </div>
          )}
          
          <label>Haben Sie Thrombose?</label>
          <select name="hasThrombosis" value={formData.hasThrombosis} onChange={handleChange}>
            <option value="no">Nein</option>
            <option value="yes">Ja</option>
          </select>
          
          {formData.hasThrombosis === 'yes' && (
            <div>
              <label>Details zu Thrombose:</label>
              <textarea name="thrombosisDetails" value={formData.thrombosisDetails} onChange={handleChange} />
            </div>
          )}
          
          <label>Haben Sie Lebererkrankungen?</label>
          <select name="hasLiverDisease" value={formData.hasLiverDisease} onChange={handleChange}>
            <option value="no">Nein</option>
            <option value="yes">Ja</option>
          </select>
          
          <label>Haben Sie Krebs?</label>
          <select name="hasCancer" value={formData.hasCancer} onChange={handleChange}>
            <option value="no">Nein</option>
            <option value="yes">Ja</option>
          </select>
          
          {formData.hasCancer === 'yes' && (
            <div>
              <label>Details zu Krebs:</label>
              <textarea name="cancerDetails" value={formData.cancerDetails} onChange={handleChange} />
            </div>
          )}
          
          <label>Haben Sie Blutgerinnungsstörungen?</label>
          <select name="hasBleedingDisorder" value={formData.hasBleedingDisorder} onChange={handleChange}>
            <option value="no">Nein</option>
            <option value="yes">Ja</option>
          </select>
          
          <label>Haben Sie Infektionskrankheiten?</label>
          <select name="hasInfectiousDisease" value={formData.hasInfectiousDisease} onChange={handleChange}>
            <option value="no">Nein</option>
            <option value="yes">Ja</option>
          </select>
          
          {formData.hasInfectiousDisease === 'yes' && (
            <div>
              <label>Details zu Infektionskrankheiten:</label>
              <textarea name="infectiousDiseaseDetails" value={formData.infectiousDiseaseDetails} onChange={handleChange} />
            </div>
          )}
          
          <label>Haben Sie künstliche Gelenke?</label>
          <select name="hasArtificialJoints" value={formData.hasArtificialJoints} onChange={handleChange}>
            <option value="no">Nein</option>
            <option value="yes">Ja</option>
          </select>
        </div>
      </section>

      <section>
        <h3>Medikamente</h3>
        <div className="form-group">
          <label>Nehmen Sie Medikamente?</label>
          <select name="takesMedications" value={formData.takesMedications} onChange={handleChange}>
            <option value="no">Nein</option>
            <option value="yes">Ja</option>
          </select>
          
          {formData.takesMedications === 'yes' && (
            <div>
              <label>Details zu Medikamenten:</label>
              <textarea name="medicationDetails" value={formData.medicationDetails} onChange={handleChange} />
            </div>
          )}
        </div>
      </section>

      <section>
        <h3>Andere Bedingungen</h3>
        <div className="form-group">
          <label>Haben Sie andere Bedingungen?</label>
          <select name="hasOtherConditions" value={formData.hasOtherConditions} onChange={handleChange}>
            <option value="no">Nein</option>
            <option value="yes">Ja</option>
          </select>
          
          {formData.hasOtherConditions === 'yes' && (
            <div>
              <label>Details zu anderen Bedingungen:</label>
              <textarea name="otherConditionsDetails" value={formData.otherConditionsDetails} onChange={handleChange} />
            </div>
          )}
        </div>
      </section>

      <section>
        <h3>Schwangerschaft (für weibliche Patienten)</h3>
        <div className="form-group">
          <label>Sind Sie schwanger?</label>
          <select name="isPregnant" value={formData.isPregnant} onChange={handleChange}>
            <option value="no">Nein</option>
            <option value="yes">Ja</option>
          </select>
          
          {formData.isPregnant === 'yes' && (
            <div>
              <label>Monat der Schwangerschaft:</label>
              <input type="number" name="pregnancyMonth" value={formData.pregnancyMonth} onChange={handleChange} />
            </div>
          )}
        </div>
      </section>

      <section>
        <h3>Recall-Service</h3>
        <div className="form-group">
          <label>Möchten Sie an den Recall-Service teilnehmen?</label>
          <select name="wantsRecall" value={formData.wantsRecall} onChange={handleChange}>
            <option value="no">Nein</option>
            <option value="yes">Ja</option>
          </select>
        </div>
      </section>

      <section>
        <h3>Zustimmungen</h3>
        <div className="form-group">
          <label>
            <input type="checkbox" name="agreesWithDataPrivacy" checked={formData.agreesWithDataPrivacy} onChange={handleChange} />
            Ich stimme der Datenschutzerklärung zu
          </label>
          
          <label>
            <input type="checkbox" name="agreesWithAppointmentPolicy" checked={formData.agreesWithAppointmentPolicy} onChange={handleChange} />
            Ich stimme der Terminrichtlinie zu
          </label>
        </div>
      </section>

      <section>
        <h3>Unterschrift</h3>
        <div className="form-group">
          <label>Datum der Unterschrift:</label>
          <input type="date" name="signatureDate" value={formData.signatureDate} onChange={handleChange} />
          
          <label>Unterschrift:</label>
          <textarea name="signature" value={formData.signature} onChange={handleChange} />
        </div>
      </section>

      <button type="submit" className="submit-button">Formular absenden</button>
    </form>
  );
}

export default AnamnesisForm;