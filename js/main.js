const loading = document.getElementById("spinner");
const mail = document.querySelectorAll(".email-item");
const mailList = document.querySelector(".list-group");
const refresh = document.getElementById("refresh-button");

let mailGenerated = 0;

for (let i = 0; i < 10; i++) {
  axios
    .get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((response) => {
      const randomMail = response.data.response;
      mailGenerated++;
      mail[i].innerHTML +=
        `<i class="bi bi-envelope d-inline-block"></i> ` +
        ` <span class="ciao">${randomMail}</span>` +
        ` <i class="bi bi-copy d-inline-block"></i>`;
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      if (mailGenerated === 10) {
        loading.classList.add("d-none");
        mailList.classList.remove("d-none");
      }
    });
}

refresh.addEventListener("click", function () {
  let mailGenerated = 0;
  loading.classList.remove("d-none");

  for (let i = 0; i < 10; i++) {
    mail[i].innerHTML = "";
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((response) => {
        const randomMail = response.data.response;
        mailGenerated++;
        mail[i].innerHTML +=
          `<i class="bi bi-envelope d-inline-block"></i> ` +
          ` <span class="ciao">${randomMail}</span>` +
          ` <i class="bi bi-copy d-inline-block"></i>`;
      })
      .finally(() => {
        if (mailGenerated === 10) {
          loading.classList.add("d-none");
          mailList.classList.remove("d-none");
        }
      });
  }
});
