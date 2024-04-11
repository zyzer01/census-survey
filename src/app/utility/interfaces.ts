type HouseholdMember = {
    houseHoldId: number;
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: number;
    ethnicityCode: string;
    sexCode: string;
    dateOfBirth: string;
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
    htmlFor?: string;
}

interface InputProps {
    label: string;
    id: string;
    type: string;
    name: string;
    value: string | number;
    pattern?: string;
    placeholder?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface Option {
    value: string;
    label: string;
}

interface RadioProps {
    id: string;
    label: string;
    value: boolean;
    checked: boolean;
    htmlFor: string;
    name: string;
}
interface SelectFieldProps {
    label: string;
    name: string;
    value: string | "";
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    options: { value: string; label: string }[];
}

interface DashboardCardProps {
    houseHoldId: number;
    firstName: string;
    lastName: string;
    sex: string;
    dob: string;
}