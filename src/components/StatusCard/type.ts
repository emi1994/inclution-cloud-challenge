export interface StatusCardType {
  endpoint: String,
}

export interface StatusStateType {
  hostname: string,
  message: string,
  success: boolean,
  time: number,
}

export interface ErrorStateType {
  message: any,
  body: any,
}

export interface StatusBarType{
  error?: boolean,
}