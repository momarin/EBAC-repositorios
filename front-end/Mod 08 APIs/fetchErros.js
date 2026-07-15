fetch("https://api.example.com/data")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Resposta não encontrada");
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error("Houve um erro com a operação:", error));

// Manipulando promessas corretamente
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    return fetch("https://api.example.com/other-data");
  })
  .then((response) => response.json())
  .then((otherData) => console.log(otherData));
