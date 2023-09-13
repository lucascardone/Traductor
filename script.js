async function query(data) {
  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/Helsinki-NLP/opus-mt-es-en",
      {
        headers: {
          Authorization: "Bearer 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",
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

document.querySelector("#traducirTexto").addEventListener("click", traducir);

async function traducir(){
    try{
        let textoATraducir = document.querySelector("#textoATraducir").value;
        let response = await query({inputs : textoATraducir});
        //console.log(response[0].translation_text);
        //textoTraducido.textContent = response[0].translation_text;
        let textoTraducido = document.querySelector("#textoTraducido").value = response[0].translation_text;
    }catch(error){
        console.log("jaja te equivocaste nombrando alguna variable");
    }
}



/*query({ inputs: "Hola alumnos de egg, que bueno que hayan podido venir hoy" })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
*/