const loading = document.getElementById("spinner");
const mail = document.querySelectorAll(".email-item");
const mailList = document.querySelector(".list-group");
console.log(mail);

for (let i = 0; i < 10; i++) {
  axios
    .get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((response) => {
      console.log(response);

      const randomMail = response.data.response;
      console.log(randomMail);
      mail[i].innerHTML += randomMail;
      mailList.classList.remove("d-none");
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      loading.classList.add("d-none");
    });
}
