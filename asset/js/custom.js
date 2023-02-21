let key = document.querySelector(".urlconvert");
let hasil = () => {
  let reskey = key.value;
  let imglog = document.querySelector(".load");
  if (reskey == "") {
    document.querySelector(".show").classList.add("d-none");
  } else {
    imglog.classList.remove("d-none");
    document.querySelector(".show").classList.remove("d-none");
    fetch("https://ssyoutube.com/api/convert", {
      method: "post",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        url: reskey,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        imglog.classList.add("d-none");
        if (data.thumb) {
            console.log(data);
          document.querySelector(".judul").innerHTML =
            "<img src='" +
            data.thumb +
            "' class='w-25 border border-secondary rounded h-25 viewimg'><p class=' d-block ms-2 fs-4'>" +
            data.meta.title +
            "</p>";
            let reshas = [data.url];
            let reuslthasil = "";
            reshas.forEach(result => {
                for (let index = 4; index < result.length; index++) {
                    const resurl = result[index];
                    let showdata = "<div class='col-6 col-xl-3 col-sm-6 col-md-6 col-lg-6 col-xxl-3 m-1'><div class='card'style='width: 18rem;'><div class='card-body'><h5 class='card-title'>"+resurl.name+" | "+resurl.quality+"</h5><a href='"+resurl.url+"' class='btn btn-primary'>Download</a></div></div></div>";
                    reuslthasil += showdata;
                }
                document.getElementById("showres").innerHTML = reuslthasil;
            });
        } else {
            document.querySelector(".judul").innerHTML =
            "<img src='https://i.pinimg.com/474x/59/a0/e5/59a0e52cb487283cddcc0e8057a2e625.jpg' class='w-25 border border-secondary rounded h-25 viewimg'><p class='d-block ms-2 tes fs-3'>" +
            data.meta.title +
            "</p>";
            let reshas = [data.url];
            let reuslthasil = "";
            reshas.forEach(result => {
                for (let index = 0; index < result.length; index++) {
                    const resurl = result[index];
                    let showdata = "<div class='col-6 col-xl-3 col-sm-6 col-md-6 col-lg-6 col-xxl-3 m-1'><div class='card'style='width: 18rem;'><div class='card-body'><h5 class='card-title'>"+resurl.name+" | "+resurl.subname+"</h5><a href='"+resurl.url+"' class='btn btn-primary'>Download</a></div></div></div>";
                    reuslthasil += showdata;
                }
                document.getElementById("showres").innerHTML = reuslthasil;
            });
        }
      })
      .catch((error) => {
        console.clear();
      });
  }
};
key.addEventListener("keyup", hasil);
