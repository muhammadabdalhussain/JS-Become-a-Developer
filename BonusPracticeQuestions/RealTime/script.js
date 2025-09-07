let users = [
    {
        name: "amisha rathore",
        pic: "https://imgmodels.com/wp-content/uploads/2025/04/Xiao-Wen-Ju-1-1.jpg",
        bio: "silence chaos in a loud world | not for everyone"
    },
    {
        name: "elina moreau",
        pic: "https://imgmodels.com/wp-content/uploads/2025/03/8348a7c12d9645cde0e929a4dc47f2b1-1188x1650.jpeg",
        bio: "grace in motion | poetry in every step"
    },
    {
        name: "liam cruz",
        pic: "https://imgmodels.com/wp-content/uploads/2025/03/97ebafc95870717ff6e85a28b9eb771e-1186x1650.jpeg",
        bio: "built from stillness | chaos tamed with calm"
    },
    {
        name: "sana khan",
        pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ2l2lRdI86l0GFjOP7j1E_lU1_VtU3TOziw&s",
        bio: "between shadows and light | unapologetically rare"
    },
    {
        name: "noah tseng",
        pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTlHa73Vb2OvD82ykSjSn4YUPkCzUizA5JlA&s",
        bio: "words unsaid | soul unshaken"
    },
    {
        name: "zara mehta",
        pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFMQq-1CbUMCwg6AH6BPJCx3cpMIEuh-KBEQ&s",
        bio: "soft edges, sharp mind | hard to label"
    },
    {
        name: "kyro lennox",
        pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTszXMIdaSBlCLNUXlbwLIFzkPFqKNcb5gUwQ&s",
        bio: "a quiet storm | made of stardust and silence"
    }
]

function showUsers(arr) {
    arr.forEach(function (ashu) {
        // Create main card div
        const card = document.createElement('div');
        card.className = 'card';

        // Create and append image
        const img = document.createElement('img');
        img.src = ashu.pic;
        img.className = 'bg-img';
        card.appendChild(img);

        // Create and append blurred layer
        const bluredLayer = document.createElement('div');
        bluredLayer.style.backgroundImage = `url(${ashu.pic})`;
        bluredLayer.className = 'blured-layer';
        card.appendChild(bluredLayer);

        // Create and append content container
        const content = document.createElement('div');
        content.className = 'content';

        // Create and append h3
        const heading = document.createElement('h3');
        heading.textContent = ashu.name;
        content.appendChild(heading);

        // Create and append paragraph
        const paragraph = document.createElement('p');
        paragraph.textContent = ashu.bio;
        content.appendChild(paragraph);

        // Append content to card
        card.appendChild(content);

        // Finally, append the card to the body or another container
        document.body.appendChild(card);
    })
}

showUsers(users);
//  sray users show karwana
// filter karna har bar input karny pa
// show karna filter users
