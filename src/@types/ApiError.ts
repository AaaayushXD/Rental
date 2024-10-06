export interface ApiError {
  status: number;
  message: string;
  success: boolean;
  data?: string | string[];
  stack?: string | string[];
  errors?: string[];
}
