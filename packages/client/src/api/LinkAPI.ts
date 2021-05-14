export const LinkAPI = {
  getLink: async () => {
    try {
      const response = await fetch("/api/links");
      return await response.json();
    } catch (error) {
      throw error;
    }
  }
}
