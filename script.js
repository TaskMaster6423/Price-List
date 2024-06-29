document.addEventListener('DOMContentLoaded', () => {
    // JavaScript object to hold image details
    const images = [
        {
            src: 'Images/1 new.JPG',
            number: 1,
            name: 'Image 1',
            info: 'This is image number 1'
        },
        {
            src: 'Images/2.JPG',
            number: 2,
            name: 'Image 2',
            info: 'This is image number 2'
        },
        {
            src: 'Images/3.JPG',
            number: 3,
            name: 'Image 3',
            info: 'This is image number 3'
        },
        {
            src: 'Images/5.JPG',
            number: 5,
            name: 'Image 5',
            info: 'This is image number 5'
        },
        {
            src: 'Images/7.JPG',
            number: 7,
            name: 'Image 7',
            info: 'This is image number 7'
        },
        {
            src: 'Images/8.JPG',
            number: 8,
            name: 'Image 8',
            info: 'This is image number 8'
        },
        {
            src: 'Images/9.JPG',
            number: 9,
            name: 'Image 9',
            info: 'This is image number 9'
        },
        {
            src: 'Images/10.JPG',
            number: 10,
            name: 'Image 10',
            info: 'This is image number 10'
        },

        // Add more images as needed
    ];

    const buttonsContainer = document.getElementById('buttons-container');
    const imgElement = document.getElementById('image');
    const imageInfoTable = document.getElementById('image-info');

    images.forEach((image) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'btn btn-primary m-1';
        button.textContent = `Show ${image.name}`;
        button.dataset.toggle = 'modal';
        button.dataset.target = '#exampleModal';

        button.addEventListener('click', () => {
            // Update image source
            imgElement.src = image.src;

            // Clear previous table content
            imageInfoTable.innerHTML = '';

            // Add new table content
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${image.number}</td>
                <td>${image.name}</td>
                <td>${image.info}</td>
            `;
            imageInfoTable.appendChild(row);
        });

        buttonsContainer.appendChild(button);
    });
});
