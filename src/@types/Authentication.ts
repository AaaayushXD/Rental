export interface LoginProps {
  phone: string;
  password: string;
}

export interface SignUpProps {
  firstName: string;
  lastName: string;
  phone: string;
  password: string;
  confirmPassword: string;
  totalPeople: number;
  married: boolean;
  children: number;
}
