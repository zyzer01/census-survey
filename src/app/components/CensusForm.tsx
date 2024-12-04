"use client";
import React, { useState } from "react";
import axios from "axios";
import Input from "./ui/Input";
import SelectField from "./ui/SelectField";
import Label from "./ui/Label";
import toast, { Toaster } from "react-hot-toast";

const CensusForm: React.FC = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    ethnicityCode: "IGBO",
    sexCode: "MALE",
    age: 0,
    respondent: false,
    relationshipCode: "HUSBAND",
    maritalStatus: "SINGLE",
    spouseName: "",
    fathersName: "",
    mothersName: "",
    schoolAttendance: true,
    educationLevel: "PRIMARY",
    employmentStatus: "STUDENT",
    headOfHousehold: false,
    positionInHousehold: "HEAD",
    hohFirstName: "",
    hohLastName: "",
    currentPrompt: 0,
  };
  const [formData, setFormData] = useState(initialFormData);
  const [isLoading, setIsLoading] = useState(false);


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const { currentPrompt, ...memberData } = formData;
      const response = await axios.post("/api/household", memberData);
      console.log(response.data);
      toast.success("Submitted Successfully!");
      setFormData(initialFormData);
    } catch (error) {
      toast.error("An error occured!");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNavigation = (direction: number) => {
    setFormData((prevData) => ({
      ...prevData,
      currentPrompt: prevData.currentPrompt + direction,
    }));
  };

  const isFormValid = () => {
    switch (formData.currentPrompt) {
      case 0:
        return (
          formData.firstName !== "" &&
          formData.lastName !== "" &&
          formData.phoneNumber !== "" &&
          formData.ethnicityCode !== "" &&
          formData.sexCode !== ""
        );
      case 1:
        return (
          formData.age !== 0 &&
          (formData.age < 16
            ? formData.relationshipCode !== "" &&
              formData.mothersName !== "" &&
              formData.fathersName !== ""
            : formData.positionInHousehold !== "" &&
              formData.maritalStatus !== "" &&
              (formData.maritalStatus === "MARRIED"
                ? formData.spouseName !== ""
                : true) &&
              formData.educationLevel !== "" &&
              formData.employmentStatus !== "")
        );
      case 2:
        return (
          formData.headOfHousehold !== null &&
          (!formData.headOfHousehold
            ? formData.hohFirstName !== "" && formData.hohLastName !== ""
            : true)
        );
      default:
        return false;
    }
  };

  const renderPrompt = () => {
    switch (formData.currentPrompt) {
      case 0:
        return (
          <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
            <div className="max-w-md mx-auto md:max-w-sm md:w-96">
              <div className="flex flex-col text-center">
                <h1 className="text-3xl font-semibold tracking-tighter text-gray-900 mb-8">
                  New Household
                  <span className="text-gray-600"> Member</span>
                </h1>
              </div>
              <div className="space-y-3">
                <div>
                  <Input
                    label="First Name"
                    id="firstName"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        firstName: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <Input
                    id="lastName"
                    label="Last Name"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Input
                    id="phoneNumber"
                    label="Phone Number"
                    type="tel"
                    name="phoneNumber"
                    placeholder="070123456789"
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phoneNumber: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <SelectField
                    label="Ethnicity"
                    name="ethnicityCode"
                    value={formData.ethnicityCode}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        ethnicityCode: e.target.value,
                      })
                    }
                    options={[
                      { value: "IGBO", label: "Igbo" },
                      { value: "YORUBA", label: "Yoruba" },
                      { value: "HAUSA", label: "Hausa" },
                      { value: "OTHER", label: "Other" },
                    ]}
                  />
                </div>
                <div>
                  <SelectField
                    label="Sex"
                    name="sexCode"
                    value={formData.sexCode}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        sexCode: e.target.value,
                      })
                    }
                    options={[
                      { value: "MALE", label: "Male" },
                      { value: "FEMALE", label: "Female" },
                    ]}
                  />
                </div>
                <div className="col-span-full flex justify-end pt-6">
                  <button
                    type="button"
                    onClick={() => handleNavigation(1)}
                    disabled={!isFormValid()}
                    className="inline-flex items-center justify-center h-12 gap-3 px-5 py-3 font-medium text-white duration-200 bg-gray-900 rounded-xl hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
            <div className="max-w-md mx-auto md:max-w-sm md:w-96">
              <div className="flex flex-col text-center">
                <h1 className="text-3xl font-semibold tracking-tighter text-gray-900 mb-8">
                  New Houshold
                  <span className="text-gray-600"> Member</span>
                </h1>
              </div>
              <div className="space-y-3">
                <div>
                  <Input
                    id="age"
                    label="Age"
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={formData.age}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        age: parseInt(e.target.value),
                      })
                    }
                    min={0} 
                  />
                </div>
                {formData.age < 16 && (
                  <>
                    <div>
                      <SelectField
                        label="Relationship to head of house"
                        name="relationshipCode"
                        value={formData.relationshipCode}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            relationshipCode: e.target.value,
                          })
                        }
                        options={[
                          { value: "HUSBAND", label: "Husband" },
                          { value: "WIFE", label: "Wife" },
                          { value: "CHILD", label: "Child" },
                          {
                            value: "EXTENDED_FAMILY",
                            label: "Extended Family",
                          },
                        ]}
                      />
                    </div>
                    <div>
                      <Input
                        id="mothersName"
                        label="Mother's Name"
                        type="text"
                        name="mothersName"
                        placeholder="Mother's Name"
                        value={formData.mothersName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            mothersName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <Input
                        id="fathersName"
                        label="Father's Name"
                        type="text"
                        name="fathersName"
                        placeholder="Father's Name"
                        value={formData.fathersName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            fathersName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <Label label="School Attendance" />
                      <div className="flex items-center gap-x-3">
                        <div>
                          <input
                            type="radio"
                            id="schoolAttendanceYes"
                            name="schoolAttendance"
                            value="true"
                            checked={formData.schoolAttendance === true}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                schoolAttendance: e.target.value === "true",
                              })
                            }
                          />
                          <label htmlFor="schoolAttendanceYes" className="ml-1">
                            Present
                          </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            id="schoolAttendanceNo"
                            name="schoolAttendance"
                            value="false"
                            checked={formData.schoolAttendance === false}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                schoolAttendance: e.target.value === "true",
                              })
                            }
                          />
                          <label htmlFor="schoolAttendanceNo" className="ml-1">
                            Absent
                          </label>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {formData.age >= 16 && (
                  <>
                    <div>
                      <SelectField
                        label="Position in household"
                        name="positionInHousehold"
                        value={formData.positionInHousehold}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            positionInHousehold: e.target.value,
                          })
                        }
                        options={[
                          { value: "HEAD", label: "Head" },
                          { value: "SPOUSE", label: "Spouse" },
                          { value: "CHILD", label: "Child" },
                          { value: "OTHER", label: "Other" },
                        ]}
                      />
                    </div>
                    <div>
                      <SelectField
                        label="Marital Status"
                        name="maritalStatus"
                        value={formData.maritalStatus}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            maritalStatus: e.target.value,
                          })
                        }
                        options={[
                          { value: "SINGLE", label: "Single" },
                          { value: "MARRIED", label: "Married" },
                          { value: "DIVORCED", label: "Divorced" },
                        ]}
                      />
                    </div>
                    {formData.maritalStatus === "MARRIED" && (
                      <div>
                        <Input
                          id="spouseName"
                          label="Spouse Name"
                          type="text"
                          name="spouseName"
                          placeholder="Spouse Name"
                          value={formData.spouseName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              spouseName: e.target.value,
                            })
                          }
                        />
                      </div>
                    )}
                    <div>
                      <SelectField
                        label="Highest Education"
                        name="educationLevel"
                        value={formData.educationLevel}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            educationLevel: e.target.value,
                          })
                        }
                        options={[
                          { value: "PRIMARY", label: "Primary" },
                          { value: "SECONDARY", label: "Secondary" },
                          { value: "TERTIARY", label: "Tertiary" },
                        ]}
                      />
                    </div>
                    <div>
                      <SelectField
                        label="Employment Status"
                        name="employmentStatus"
                        value={formData.employmentStatus}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            employmentStatus: e.target.value,
                          })
                        }
                        options={[
                          { value: "STUDENT", label: "Student" },
                          { value: "UNEMPLOYED", label: "Unemployed" },
                          { value: "EMPLOYED", label: "Employed" },
                          { value: "SELF_EMPLOYED", label: "Self-Employed" },
                        ]}
                      />
                    </div>
                  </>
                )}

                <div className="col-span-full flex justify-between pt-6">
                  <button
                    type="button"
                    onClick={() => handleNavigation(-1)}
                    className="inline-flex items-center justify-center h-12 gap-3 px-5 py-3 font-medium text-white duration-200 bg-gray-900 rounded-xl hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black"
                  >
                    Prev
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNavigation(1)}
                    disabled={!isFormValid()}
                    className="inline-flex items-center justify-center h-12 gap-3 px-5 py-3 font-medium text-white duration-200 bg-gray-900 rounded-xl hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
            <div className="max-w-md mx-auto md:max-w-sm md:w-96">
              <div className="flex flex-col text-center">
                <h1 className="text-3xl font-semibold tracking-tighter text-gray-900 mb-8">
                  New Houshold
                  <span className="text-gray-600"> Member</span>
                </h1>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="space-y-3">
                  <div>
                    <Label label="Head of Household" />
                    <div className="flex items-center gap-x-3">
                      <div>
                        <input
                          type="radio"
                          id="headOfHouseholdYes"
                          name="headOfHousehold"
                          value="true"
                          checked={formData.headOfHousehold === true}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              headOfHousehold: e.target.value === "true",
                            })
                          }
                        />
                        <label htmlFor="headOfHouseholdYes" className="ml-1">
                          Yes
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="headOfHouseholdNo"
                          name="headOfHousehold"
                          value="false"
                          checked={formData.headOfHousehold === false}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              headOfHousehold: e.target.value === "true",
                            })
                          }
                        />
                        <label htmlFor="headOfHouseholdNo" className="ml-1">
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                  {!formData.headOfHousehold && (
                    <>
                      <div>
                        <Input
                          id="hohFirstName"
                          label="Head of house first name"
                          type="text"
                          name="hohFirstName"
                          placeholder="HOH First Name"
                          value={formData.hohFirstName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              hohFirstName: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div>
                        <Input
                          id="hohLastName"
                          label="Head of house last name"
                          type="text"
                          name="hohLastName"
                          placeholder="HOH Last Name"
                          value={formData.hohLastName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              hohLastName: e.target.value,
                            })
                          }
                        />
                      </div>
                    </>
                  )}
                  <div className="col-span-full flex justify-between pt-6">
                    <button
                      type="button"
                      onClick={() => handleNavigation(-1)}
                      className="inline-flex items-center justify-center h-12 gap-3 px-5 py-3 font-medium text-white duration-200 bg-gray-900 rounded-xl hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black"
                    >
                      Prev
                    </button>
                    <button
                      type="submit"
                      disabled={!isFormValid()}
                      className="inline-flex items-center justify-center h-12 gap-3 px-5 py-3 font-medium text-white duration-200 bg-gray-900 rounded-xl hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black"
                    >
                      {isLoading ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Toaster />
      {renderPrompt()}
    </div>
  );
};

export default CensusForm;
