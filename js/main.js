const loading = document.getElementById("spinner");
const mail = document.querySelectorAll(".email-item");
const mailList = document.querySelector(".list-group");
const refresh = document.getElementById("refresh-button");

for (let i = 0; i < 10; i++) {
  axios
    .get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((response) => {
      const randomMail = response.data.response;

      mail[i].innerHTML += randomMail;
      mailList.classList.remove("d-none");
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      if (mail[9] !== "") {
        loading.classList.add("d-none");
      }
    });
}

refresh.addEventListener("click", function () {
  loading.classList.remove("d-none");
  for (let i = 0; i < 10; i++) {
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((response) => {
        const randomMail = response.data.response;
        mail[i].innerHTML = randomMail;
      })
      .finally(() => {
        loading.classList.add("d-none");
      });
  }
});
