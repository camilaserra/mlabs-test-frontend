export async function fetchSocials() {
  try {
    const response = await fetch("/api/networks/social-networks.json");
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Erro ao buscar dados da API:", error);
    alert("Erro ao buscar dados da API");
    throw error;
  }
}
