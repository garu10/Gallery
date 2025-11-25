var content = document.getElementById("content");
        content.innerHTML = ''; 
        
        let currentGroup = ''; 
        users.forEach((user, index) => {
            if (user.group !== currentGroup) {
                currentGroup = user.group;
                content.innerHTML += `
                    <div class="col-12 mt-5 mb-3">
                        <h3 class="fw-bold text-dark text-start border-bottom pb-2">${currentGroup}</h3>
                    </div>
                `;
            }
            
            content.innerHTML += `
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="card shadow h-100">
                        <img id="user-img-${index}" src="${user.picture}" class="card-img-top" alt="Picture of ${user.name}">
                        <div class="card-body">
                            <h5 class="card-title fw-bold">${user.name}</h5>
                            
                            <p class="card-text">Nen Type: <strong>${user.nen_type}</strong></p>
                            
                            <div class="d-flex justify-content-between align-items-center mt-3">
                                <button 
                                    class="btn btn-danger btn-sm fight-mode-btn"
                                    data-index="${index}"
                                    data-default-src="${user.picture}"
                                    data-fight-src="${user.fight_picture}"
                                    onclick="toggleFightMode(this)">
                                    Fight Mode
                                </button>
                                
                                <button class="btn btn-info btn-sm"
                                    data-bs-toggle="modal"
                                    data-bs-target="#characterModal"
                                    onclick="showUserDetails(${index})">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });

        function showUserDetails(index) {
            const user = users[index];
            const modalTitle = document.getElementById('characterModalLabel');
            const modalBody = document.getElementById('modal-body-content');

            modalTitle.textContent = user.name;
            modalBody.innerHTML = `
                <div class="text-center mb-3">
                    <img src="${user.picture}" class="img-fluid rounded-circle" style="max-height: 150px;" alt="${user.name}">
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

        function toggleFightMode(buttonElement) {
        const index = buttonElement.getAttribute('data-index');
        const imgElement = document.getElementById(`user-img-${index}`);
        const defaultSrc = buttonElement.getAttribute('data-default-src');
        const fightSrc = buttonElement.getAttribute('data-fight-src');
        
        // Use a custom attribute (like data-state) to check the current mode
        const currentState = buttonElement.getAttribute('data-state') || 'default';

        if (currentState === 'default') {
            // Switch to Fight Mode
            imgElement.src = fightSrc.trim() === '' ? 'placeholder.jpg' : fightSrc;
            buttonElement.textContent = "Normal Mode";
            buttonElement.classList.remove('btn-danger');
            buttonElement.classList.add('btn-success');
            
            // Update state to 'fight'
            buttonElement.setAttribute('data-state', 'fight');
            
        } else { // currentState === 'fight'
            // Switch back to Default Mode
            imgElement.src = defaultSrc.trim() === '' ? 'placeholder.jpg' : defaultSrc;
            buttonElement.textContent = "Fight Mode";
            buttonElement.classList.remove('btn-success');
            buttonElement.classList.add('btn-danger');

            // Update state back to 'default'
            buttonElement.setAttribute('data-state', 'default');
        }
    }