axios
  .get("https://flynn.boolean.careers/exercises/api/random/mail")
  .then((response) => {
    console.log(response);

    const randomMail = response.data.response;
    console.log(randomMail);
  });
