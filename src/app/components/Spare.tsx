'use client'
import React, { useState } from "react";
import axios from "axios";

const CensusForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: 0,
    ethnicityCode: "IGBO",
    sexCode: "MALE", 
    age: 0,
    respondent: false,
    relationshipCode: "HUSBAND",
    maritalStatus: "SINGLE",
    spouseName: "",
    fathersName: "",
    mothersName: "",
    schoolAttendance: false,
    educationLevel: "PRIMARY",
    employmentStatus: "STUDENT",
    headOfHousehold: false,
    positionInHousehold: "HEAD",
    currentPrompt: 0,
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/census", formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNavigation = (direction: number) => {
    setFormData((prevData) => ({
      ...prevData,
      currentPrompt: prevData.currentPrompt + direction,
    }));
  };

  const renderPrompt = () => {
    switch (formData.currentPrompt) {
      case 0:
        return (
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="number"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={(e) =>
                setFormData({ ...formData, phoneNumber: parseInt(e.target.value) })
              }
            />
            <label htmlFor="ethnicityCode">Ethnicity</label>
            <select
              id="ethnicityCode"
              value={formData.ethnicityCode}
              onChange={(e) =>
                setFormData({ ...formData, ethnicityCode: e.target.value })
              }
            >
              <option value="IGBO">Igbo</option>
              <option value="YORUBA">Yoruba</option>
              <option value="HAUSA">Hausa</option>
              <option value="OTHER">Other</option>
            </select>
            <label htmlFor="sexCode">Sex</label>
            <select
              id="sexCode"
              value={formData.sexCode}
              onChange={(e) =>
                setFormData({ ...formData, sexCode: e.target.value })
              }
            >
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
            </select>
          </div>
        );
      case 1:
        return (
          <div>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              value={formData.age}
              onChange={(e) =>
                setFormData({ ...formData, age: parseInt(e.target.value) })
              }
            />
            {formData.age < 16 && (
              <>
                <label htmlFor="relationshipCode">Relationship to Head of House</label>
                <select
                  id="relationshipCode"
                  value={formData.relationshipCode}
                  onChange={(e) =>
                    setFormData({ ...formData, relationshipCode: e.target.value })
                  }
                >
                  <option value="CHILD">Child</option>
                  <option value="EXTENDED_FAMILY">Extended Family</option>
                </select>
                <label htmlFor="fathersName">Father Name</label>
                <input
                  type="text"
                  id="fathersName"
                  value={formData.fathersName}
                  onChange={(e) =>
                    setFormData({ ...formData, fathersName: e.target.value })
                  }
                />
                <label htmlFor="mothersName">Mother Name</label>
                <input
                  type="text"
                  id="mothersName"
                  value={formData.mothersName}
                  onChange={(e) =>
                    setFormData({ ...formData, mothersName: e.target.value })
                  }
                />
                <label htmlFor="schoolAttendance">Attends School</label>
                <select
                  id="schoolAttendance"
                  value={formData.schoolAttendance}
                  onChange={(e) =>
                    setFormData({ ...formData, schoolAttendance: e.target.value === "true" })
                  }
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </>
            )}
            {formData.age >= 16 && (
              <>
                <label htmlFor="relationshipCode">Relationship to Head of House</label>
                <select
                  id="relationshipCode"
                  value={formData.relationshipCode}
                  onChange={(e) =>
                    setFormData({ ...formData, relationshipCode: e.target.value })
                  }
                >
                  <option value="HUSBAND">Husband</option>
                  <option value="WIFE">Wife</option>
                  <option value="CHILD">Child</option>
                  <option value="EXTENDED_FAMILY">Extended Family</option>
                </select>
                <label htmlFor="maritalStatus">Marital Status</label>
                <select
                  id="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={(e) =>
                    setFormData({ ...formData, maritalStatus: e.target.value })
                  }
                >
                  <option value="SINGLE">Single</option>
                  <option value="MARRIED">Married</option>
                  <option value="DIVORCED">Divorced</option>
                </select>
                {formData.maritalStatus === "MARRIED" && (
                  <label htmlFor="spouseName">Spouse Name</label>
                )}
                <input
                  type="text"
                  id="spouseName"
                  value={formData.spouseName}
                  onChange={(e) =>
                    setFormData({ ...formData, spouseName: e.target.value })
                  }
                />
                <label htmlFor="educationLevel">Education Level</label>
                <select
                  id="educationLevel"
                  value={formData.educationLevel}
                  onChange={(e) =>
                    setFormData({ ...formData, educationLevel: e.target.value })
                  }
                >
                  <option value="PRIMARY">Primary</option>
                  <option value="SECONDARY">Secondary</option>
                  <option value="TERTIARY">Tertiary</option>
                </select>
                <label htmlFor="employmentStatus">Employment Status</label>
                <select
                  id="employmentStatus"
                  value={formData.employmentStatus}
                  onChange={(e) =>
                    setFormData({ ...formData, employmentStatus: e.target.value })
                  }
                >
                  <option value="STUDENT">Student</option>
                  <option value="UNEMPLOYED">Unemployed</option>
                  <option value="EMPLOYED">Employed</option>
                  <option value="SELF_EMPLOYED">Self-Employed</option>
                </select>
              </>
            )}
          </div>
        );
      case 2:
        return (
          <div>
            <label htmlFor="headOfHousehold">Head of Household</label>
            <select
              id="headOfHousehold"
              value={formData.headOfHousehold}
              onChange={(e) =>
                setFormData({ ...formData, headOfHousehold: e.target.value === "true" })
              }
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            {!formData.headOfHousehold && (
              <>
                <label htmlFor="respondentFirstName">Respondent First Name</label>
                <input
                  type="text"
                  id="respondentFirstName"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />
                <label htmlFor="respondentLastName">Respondent Last Name</label>
                <input
                  type="text"
                  id="respondentLastName"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                />
                <label htmlFor="respondentPhoneNumber">Respondent Phone Number</label>
                <input
                  type="number"
                  id="respondentPhoneNumber"
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, phoneNumber: parseInt(e.target.value) })
                  }
                />
                <label htmlFor="respondentRelationshipCode">Respondent Relationship to Head of House</label>
                <select
                  id="respondentRelationshipCode"
                  value={formData.relationshipCode}
                  onChange={(e) =>
                    setFormData({ ...formData, relationshipCode: e.target.value })
                  }
                >
                  <option value="HUSBAND">Husband</option>
                  <option value="WIFE">Wife</option>
                  <option value="CHILD">Child</option>
                  <option value="EXTENDED_FAMILY">Extended Family</option>
                </select>
                <label htmlFor="respondentPositionInHousehold">Respondent Position in Household</label>
                <select
                  id="respondentPositionInHousehold"
                  value={formData.positionInHousehold}
                  onChange={(e) =>
                    setFormData({ ...formData, positionInHousehold: e.target.value })
                  }
                >
                  <option value="HEAD">Head</option>
                  <option value="SPOUSE">Spouse</option>
                  <option value="CHILD">Child</option>
                  <option value="OTHER">Other</option>
                </select>
              </>
            )}
            {formData.headOfHousehold && (
              <>
                <label htmlFor="headOfHouseholdFirstName">Head of Household First Name</label>
                <input
                  type="text"
                  id="headOfHouseholdFirstName"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />
                <label htmlFor="headOfHouseholdLastName">Head of Household Last Name</label>
                <input
                  type="text"
                  id="headOfHouseholdLastName"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                />
              </>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {renderPrompt()}
      <button type="button" onClick={() => handleNavigation(-1)}>
        Previous
      </button>
      <button type="button" onClick={() => handleNavigation(1)}>
        Next
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CensusForm;
