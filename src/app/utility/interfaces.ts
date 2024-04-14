type HouseholdMember = {
    id: number;
    houseHoldId: string;
    firstName: string;
    lastName: string;
    phoneNumber: number;
    ethnicityCode: string;
    sexCode: string;
    age: number;
    spouseName: string;
    respondent: Boolean;
    relationshipCode: string;
    maritalStatusCode: string;
    fathersName: string;
    mothersName: string;
    schoolAttendance: string;
    educationLevel: string;
    employmentStatus: string;
    headOfHousehold: Boolean;
    hohFirstName: String;
    hohLastName: String;
    positionInHousehold: string;
};

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
    min?: number;
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
    id: number;
    firstName: string;
    lastName: string;
    sex: string;
    age: number;
}

type ColorVariants = {
    green: string;
    red: string;
}
// interface ModalProps {
//     modalTitle: string;
//     modalMessage: string;
//     primaryButton: string;
//     color: keyof ColorVariants;
//     showModal: boolean;
//     setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
//     buttonLoading: boolean;
// }

