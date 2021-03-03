export const LinkAPI = {
  getLink: async () => {
    try {
      const response = await fetch("http://localhost:5000/api/links");
      return await response.json();
    } catch (error) {
      throw error;
    }
  }
}
