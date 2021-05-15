export const LinkAPI = {
  getLink: async () => {
    try {
      const response = await fetch(import.meta.env.VITE_BACKEND_SERVER + "/api/links");
      return await response.json();
    } catch (error) {
      throw error;
    }
  }
}
