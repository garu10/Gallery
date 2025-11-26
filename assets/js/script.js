// script for producing cards
var content = document.getElementById("content");
content.innerHTML = ''; 

let currentGroup = ''; 
users.forEach((user, i) => {
    if (user.group !== currentGroup) {
        currentGroup = user.group;
        content.innerHTML += `
            <div class="col-12 mt-5 mb-3">
                <h3 id = "${currentGroup}" class="fw-bold text-start border-bottom pb-2">${currentGroup}</h3>
            </div>
        `;
    }
    
    content.innerHTML += `
        <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card shadow h-100">
                <div class="ratio ratio-1x1 bg-secondary overflow-hidden" style="--bs-aspect-ratio: 100%;">
                    <img 
                        id="${i}" 
                        src="${user.picture}" 
                        class="card-img-top w-100 h-100 object-fit-cover" 
                    >
                </div>
                <div class="card-body">
                    <h5 class="card-title fw-bold">${user.name}</h5>
                    
                    <p class="card-text">Nen Type: <strong>${user.nen_type}</strong></p>
                    
                    <div class="d-flex justify-content-between align-items-center mt-3">
                        <button class="btn btn-info btn-sm"
                            data-bs-toggle="modal"
                            data-bs-target="#characterModal"
                            onclick="userDetails(${i})">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
});

// script for information for modal
function userDetails(i) {
    const user = users[i];
    const modalTitle = document.getElementById('characterModalLabel');
    const modalBody = document.getElementById('modal-body-content');

    modalTitle.innerHTML = user.name;
    modalBody.innerHTML = `
        <div class="text-center mb-3">
            <img src="${user.picture}" class="img-fluid rounded-circle" style="max-height: 150px;">
        </div>
        <dl class="row">
            <dt class="col-sm-4">Alias:</dt>
            <dd class="col-sm-8">${user.alias}</dd>

            <dt class="col-sm-4">Nen Type:</dt>
            <dd class="col-sm-8 text-danger fw-bold">${user.nen_type}</dd>
            
            <dt class="col-sm-4">Primary Ability:</dt>
            <dd class="col-sm-8">${user.ability}</dd>
        </dl>
        <hr>
        <p class="lead">${user.description}</p>
    `;
}

// script for changing mode
let galleryMode = 'light';
const modeToggle = document.getElementById('modeToggle');
const navLogo = document.getElementById('navLogo');


function galleryToggle() {
    const mode = galleryMode === 'light' ? 'dark' : 'light';
    
    var bodyElement = document.getElementById("body");

    if (modeToggle) {
        if (mode === 'dark') {
            modeToggle.innerHTML = "🕷️";
            bodyElement.setAttribute("data-bs-theme", mode);
            navLogo.src = 'assets/img/logo/logo_light.png';
        } else {
            modeToggle.innerHTML = "⚡️";
            bodyElement.setAttribute("data-bs-theme", mode);
            navLogo.src = 'assets/img/logo/logo_dark.png';
        }
    }

    users.forEach((user, i) => {
        const imgElement = document.getElementById(`${i}`);
        
        if (imgElement) {
            if (mode === 'dark') {
                const fightSrc = user.fight_picture.trim() === '' ? 'placeholder.jpg' : user.fight_picture;
                imgElement.src = fightSrc;
            } else {
                const defaultSrc = user.picture.trim() === '' ? 'placeholder.jpg' : user.picture;
                imgElement.src = defaultSrc;
            }
        }
    });
    galleryMode = mode;
}


