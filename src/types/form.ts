export interface FormData {
  name: string;
  phoneNumber: string;
  age: string;
  aadharNumber: string;
  address: string;
  gender: string;
  genderOther: string;
  problem: string;
  problemOther: string;
  filledBy: string;
  filledByOther: string;
}

export type FormField = keyof FormData;