import { useState, useCallback } from "react";

const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setIsLoading(true);
      const token = localStorage.getItem("token");
      // sử dụng "bearer" đó là một quy ước lâu đời
      // Bearer có thể hiểu là "cấp quyền truy cập cho người mang mã thông báo này".
      const headersWithToken = {
        ...headers,
        Authorization: `Bearer ${token}`,
      };
      try {
        const response = await fetch(url, {
          method,
          body,
          headers: headersWithToken,
        });

        const responseData = await response.json();

        return responseData;
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    },
    []
  );

  const clearError = () => setError(null);

  return { isLoading, error, sendRequest, clearError };
};

export default useHttpClient;
