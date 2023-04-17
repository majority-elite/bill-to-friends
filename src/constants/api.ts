export const API_URL = 'https://dobiemon.up.railway.app';

interface ClientApiError {
  status?: number;
  message: string;
  path: string;
  context?: unknown;
}

export class ApiError implements ClientApiError {
  public status?: number;
  public message: string;
  public path: string;
  public context?: unknown;

  constructor(info: ClientApiError) {
    this.status = info.status;
    this.message = info.message;
    this.path = info.path;
    this.context = info.context;
  }
}
