export const gameLink = async (data) => {
    const response = await fetch(`https://the-trivia-api.com/api/questions?categories=${data.categoria}&limit=${data.numero}&difficulty=${data.dificultad}`);
    const datos = await response.json();
    console.log(datos);
}