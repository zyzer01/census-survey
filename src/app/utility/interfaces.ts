type HouseholdMember = {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: number;
    ethnicityCode: string;
    sexCode: string;
    dateOfBirth: Date;
    respondent: Boolean;
    relationshipCode: string;
    maritalStatusCode: string;
    fathersName: string;
    mothersName: string;
    schoolAttendance: string;
    educationLevel: string;
    employmentStatus: string;
};

interface HouseholdListProps {
    members: HouseholdMember[];
}

interface LabelProps {
    label: string;
}

interface InputProps {
    label: string;
    type: string;
    name: string;
    value: string;
    pattern?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface Option {
    value: string;
    label: string;
  }

  interface SelectFieldProps {
    label: string;
    name: string;
    value: string | "";
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    options: { value: string; label: string }[];
  }