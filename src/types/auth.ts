export interface SignInInputs {
  email: string;
  password: string;
}

export interface SupAgentRegisterInputs {
  companyName: string;
  companyEmail: string;
  password: string;
  confirmPassword: string;
}

export interface SubAgentRegisterInputs {
  name: string;
  email: string;
  referralCode: string;
  location: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}
