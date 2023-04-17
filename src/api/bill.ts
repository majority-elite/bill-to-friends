import { API_URL, ApiError } from '../constants/api';

interface PostBillRequest {
  /** list of `userId` */
  participants: string[];
  items: {
    name: string;
    price: number;
    /** list of `userId` */
    payers: string[];
  }[];
  payments: {
    /** `userId` */
    id: string;
    amount: number;
  }[];
}

export const postBill = async (request: PostBillRequest) => {
  const path = `${API_URL}/bill`;

  try {
    const response = await fetch(path, {
      method: 'POST',
      body: JSON.stringify(request),
      headers: {
        'Content-type': 'application/json',
      },
    });

    if (response.ok) return;

    throw new ApiError({
      status: response.status,
      message: '서버 문제가 발생했어요.',
      path,
      context: response,
    });
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }

    throw new ApiError({
      message: '서버 문제가 발생했어요.',
      path,
      context: error,
    });
  }
};
