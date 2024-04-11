"use client";
import React, { useState } from "react";
import axios from "axios";
import Input from "../components/ui/Input";
import SelectField from "../components/ui/SelectField";
import Label from "../components/ui/Label";
const CreateHouseholdMember = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    ethnicityCode: "",
    sexCode: "",
    dateOfBirth: "",
    respondent: false,
    relationshipCode: "",
    maritalStatusCode: null,
    fathersName: "",
    mothersName: "",
    schoolAttendance: false,
    educationLevel: null,
    employmentStatus: null,
  });
  const [formError, setFormError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const requiredFields = Object.entries(formData).filter(
      ([key, value]) => value === "" || value === null
    );

    if (requiredFields.length > 0) {
      setFormError("Please fill in all fields.");
    } else {
      try {
        const response = await axios.post("/api/household", formData);
        console.log("Response:", response.data);
        setFormError("");
      } catch (error) {
        console.error("Error:", error);
      }
    }
  }

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    console.log(value);

    setFormData({ ...formData, [name]: value });
  };

  const {
    firstName,
    lastName,
    phoneNumber,
    ethnicityCode,
    sexCode,
    dateOfBirth,
    respondent,
    relationshipCode,
    maritalStatusCode,
    fathersName,
    mothersName,
    schoolAttendance,
    educationLevel,
    employmentStatus,
  } = formData;

  const isDisabled =
    !firstName ||
    !lastName ||
    !phoneNumber ||
    !ethnicityCode ||
    !sexCode ||
    !dateOfBirth ||
    !respondent ||
    !relationshipCode ||
    !maritalStatusCode ||
    !fathersName ||
    !mothersName ||
    !schoolAttendance ||
    !educationLevel ||
    !employmentStatus;

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            New Household Member
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            You can now add new household members to the list
          </p>
        </div>
        {formError && <div className="text-red-500 mb-4">{formError}</div>}
        <div className="w-2/2 lg:w-2/2 md:w-2/3 mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-2/3 md:w-1/3">
                <div className="relative">
                  <Input
                    label="First Name"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="p-2 w-2/3 md:w-1/3">
                <div className="relative">
                  <Input
                    label="Last Name"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="p-2 w-2/3 md:w-1/3">
                <div className="relative">
                  <Input
                    label="Phone Number"
                    type="text"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="p-2 w-2/3 md:w-1/3">
                <div className="relative">
                  <SelectField
                    label="Ethnicity Code"
                    name="ethnicityCode"
                    value={ethnicityCode}
                    onChange={handleChange}
                    options={[
                      { value: "igbo", label: "Igbo" },
                      { value: "yoruba", label: "Yoruba" },
                      { value: "hausa", label: "Hausa" },
                    ]}
                  />
                </div>
              </div>
              <div className="p-2 w-2/3 md:w-1/3">
                <div className="relative">
                  <SelectField
                    label="Sex"
                    name="sexCode"
                    value={sexCode}
                    onChange={handleChange}
                    options={[
                      { value: "male", label: "Male" },
                      { value: "female", label: "Female" },
                    ]}
                  />
                </div>
              </div>
              <div className="p-2 w-2/3 md:w-1/3">
                <div className="relative">
                  <Input
                    label="Date of Birth"
                    type="date"
                    name="dateOfBirth"
                    value={dateOfBirth}
                    pattern="\d{2}-\d{2}-\d{4}"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="p-2 w-2/3 md:w-1/3">
                <Label label="Repondent" />
                <div className="relative pt-2 space-x-1">
                  <input
                    type="radio"
                    name="respondent"
                    value="true"
                    checked={respondent === "true"}
                    onChange={handleChange}
                  />
                  <label htmlFor="respondentTrue" className="mr-6">
                    True
                  </label>
                  <input
                    type="radio"
                    name="respondent"
                    value="false"
                    checked={respondent === "false"}
                    onChange={handleChange}
                  />
                  <label htmlFor="respondentFalse">False</label>
                </div>
              </div>
              <div className="p-2 w-2/3 md:w-1/3">
                <div className="relative">
                  <SelectField
                    label="Relationship to HH"
                    name="relationshipCode"
                    value={relationshipCode}
                    onChange={handleChange}
                    options={[
                      { value: "husband", label: "Husband" },
                      { value: "wife", label: "Wife" },
                      { value: "child", label: "Child" },
                      { value: "extendedFamily", label: "Extended Family" },
                    ]}
                  />
                </div>
              </div>
              <div className="p-2 w-2/3 md:w-1/3">
                <div className="relative">
                  <SelectField
                    label="Marital Status"
                    name="maritalStatusCode"
                    value={maritalStatusCode}
                    onChange={handleChange}
                    options={[
                      { value: "single", label: "Single" },
                      { value: "married", label: "Married" },
                      { value: "divorced", label: "Divorced" },
                    ]}
                  />
                </div>
              </div>
              <div className="p-2 w-2/3 md:w-1/3">
                <div className="relative">
                  <Input
                    label="Father's Name"
                    type="text"
                    name="fathersName"
                    value={fathersName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="p-2 w-2/3 md:w-1/3">
                <div className="relative">
                  <Input
                    label="Mother's Name"
                    type="text"
                    name="mothersName"
                    value={mothersName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="p-2 w-2/3 md:w-1/3">
                <Label label="School Attendance" />
                <div className="relative pt-2 space-x-1">
                  <input
                    type="radio"
                    name="schoolAttendance"
                    value="true"
                    checked={schoolAttendance === "true"}
                    onChange={handleChange}
                  />
                  <label htmlFor="schoolAttendanceTrue" className="mr-6">
                    Present
                  </label>
                  <input
                    type="radio"
                    name="schoolAttendance"
                    value="false"
                    checked={schoolAttendance === "false"}
                    onChange={handleChange}
                  />
                  <label htmlFor="schoolAttendanceFalse">Absent</label>
                </div>
              </div>
              <div className="p-2 w-2/3 md:w-1/3">
                <div className="relative">
                  <SelectField
                    label="Highest Education"
                    name="educationLevel"
                    value={educationLevel}
                    onChange={handleChange}
                    options={[
                      { value: "primary", label: "Primary" },
                      { value: "secondary", label: "Secondary" },
                      { value: "tertiary", label: "Tertiary" },
                    ]}
                  />
                </div>
              </div>
              <div className="p-2 w-2/3 md:w-1/3">
                <div className="relative">
                  <SelectField
                    label="Employment Status"
                    name="employmentStatus"
                    value={employmentStatus}
                    onChange={handleChange}
                    options={[
                      { value: "student", label: "Student" },
                      { value: "employed", label: "Employed" },
                      { value: "self_employed", label: "Self Employed" },
                      { value: "unemployed", label: "Unemployed" },
                    ]}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex mx-auto bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CreateHouseholdMember;
