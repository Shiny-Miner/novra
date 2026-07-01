async function loadNovels() {

    const response = await fetch("assets/data/novels.json");

    const novels = await response.json();

    const container = document.getElementById("novelContainer");

    novels.forEach(novel => {

        container.innerHTML += `

            <div class="card">

                <img src="${novel.cover}" class="cover">

                <h3>${novel.title}</h3>

                <p>⭐ ${novel.rating}</p>

                <p>${novel.genre}</p>

                <p>${novel.chapters} Chapters</p>

            </div>

        `;

    });

}

loadNovels();