for (let i = 0; i < 10; i++) {
  axios
    .get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((response) => {
      console.log(response);

      const randomMail = response.data.response;
      console.log(randomMail);
    })
    .catch((error) => {
      console.log("Pagina non trovata");
    });
}
