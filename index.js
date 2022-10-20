// Show Alert
function showAlert() {
  alert('Username : user\nPassword : user123');
}

// Verification

function acc() {
  if (document.getElementById('userid').value == 'user' && document.getElementById('pswrd').value == 'user123') {
    login_form.setAttribute('action', 'index.html');
  } else {
    alert('Error Password or Username');
    document.getElementById('userid').value = '';
    document.getElementById('pswrd').value = '';
    return false;
  }
}

// getting .product-container html
const productContainer = document.querySelector('.product-container');
const productModal = document.querySelector('.product-modal');

let div;
// fetching JSON
fetch('product.json')
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      div = document.createElement('div');
      div.innerHTML = `
      <div class="col-md-12 d-flex justify-content-around">
      <div class="card jscard ms-3 me-3 mb-5">
      <div class="bg-image card-details hover-overlay ripple rounded-0" data-mdb-ripple-color="light">
      
        <a href="#!">
          <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
        </a>
      </div>
      <div class="card-body">
      <img class="product-image " src="${data[i].image}" />
      <div>
      <h4 class="card-title font-weight-bold mt-2 mb-2 text-center">${data[i].name}</h4>
    </div>
      <!-- Button trigger modal -->
      <div class="d-flex">
      <button class="btn btn-warning card-button " type="button" data-bs-toggle="offcanvas" data-bs-target="#${data[i].id}" aria-controls="offcanvasTop">Description</button>

        </div>
        </div>
      </div>
    </div>
    </div>`;
      // console.log(data);
      productContainer.appendChild(div);
    }
    for (let j = 0; j < data.length; j++) {
      div = document.createElement('div');
      div.innerHTML = ` <div class="offcanvas offcanvas-top" style="height: 100vh" tabindex="-1" id="${data[j].id}" aria-labelledby="offcanvasTopLabel">
      <div class="offcanvas-header">
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div class="container">
          <div class="row d-flex justify-content-center" style="height: 80vh; width: 100%">
            <div class="col-md-3 d-flex align-items-center">
              <img class="product-image mx-auto" src="${data[j].image}" />
            </div>
            <div class="col-md-9 d-flex align-items-center">
              <div class="d-block">
                <h1>${data[j].name}</h1>
                <br />
                <h5 style="text-indent: 40px;text-align:justify">${data[j].deskripsi}</h5>
                <br />
                <button type="button" class="btn btnclose  mt-3 w-25" data-bs-dismiss="offcanvas" aria-label="Close">Close</button>
                <a href="contactus.html"><button type="button" class="btn btnclose  mt-3 w-25">Contact Us</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
      console.log(j);
      productModal.appendChild(div);
    }
  });

// getting .product-container html
const newsContainer = document.querySelector('.newsContainer');
const newsContainermodal = document.querySelector('.newsContainermodal');

let diva;
fetch('news.json')
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      diva = document.createElement('div');
      diva.innerHTML = `
      <div class="card" data-aos="fade-up" data-aos-duration="1000" data-aos-mirror="true" data-aos-once="false" style="max-width: 1000px; width: 100%; height: auto; margin: 1rem 0rem 1.3rem 0rem">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="${data[i].img}" class="img-fluid rounded-start" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h4 class="card-title"> </h4>
                      <p class="card-text artikelsize">
                        ${data[i].keterangan}
                      </p>
                      <button type="button" class="btn btn-sm btn-warning w-25 " data-bs-toggle="modal" data-bs-target="#${data[i].id}">Read more</button>
                    </div>
                  </div>
                </div>
              </div>`;
      // console.log(data);
      newsContainer.appendChild(diva);
    }
    for (let j = 0; j < data.length; j++) {
      diva = document.createElement('div');
      diva.innerHTML = `
      <div class="modal fade" id="${data[j].id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">${data[j].judul}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="card" style="max-width: 30rem;border: none;">
              <img src="${data[j].img}" class="card-img-top rounded-3" alt="...">
              <div class="card-body" style="font-size: 0.8em;">
              ${data[j].deskripsi}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
      // console.log(data);
      newsContainermodal.appendChild(diva);
    }
  });
