export const predictApi = {
  predict: async () => {
    try {
      const response = await fetch('http://localhost:3000/predict', {
        method: 'GET',
      });

      return response.json();
    } catch (err) {
      console.error(err);
    }
  },
};
