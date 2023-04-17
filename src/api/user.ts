import { API_URL, ApiError } from '../constants/api';
import { type UserProfile } from '../constants/user';

export const getAllUserProfiles = async (): Promise<UserProfile[]> => {
  const path = `${API_URL}/user/all/profile`;

  try {
    const response = await fetch(path, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });

    const result = await response.json();

    if (response.ok) return result;

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
