export interface SignInInputs {
  email: string;
  password: string;
}

export interface SupAgentRegisterInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SubAgentRegisterInputs {
  name: string;
  email: string;
  referralCode: string;
  address: string;
  state: string;
  lga: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

export interface SupAgentOnboardingInputs {
  image: File | string;
  acronym: string;
  staffSize: string;
  industry: string;
  // products?: string[];
}
