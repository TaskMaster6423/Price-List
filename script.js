document.addEventListener('DOMContentLoaded', () => {
    // JavaScript object to hold image details
    const images = [
        {
            src: 'Images/1 new.JPG',
            number: 1,
            name: 'मांडी चौरंग २',
            info: ''
        },
        {
            src: 'Images/2.JPG',
            number: 2,
            name: 'लोडवाला',
            info: ''
        },
        {
            src: 'Images/3.JPG',
            number: 3,
            name: 'चौरंग दगडूशेठ १',
            info: ''
        },
        {
            src: 'Images/5.JPG',
            number: 5,
            name: 'लोड चौरांग',
            info: ''
        },
        {
            src: 'Images/7.JPG',
            number: 7,
            name: 'दगडूशेठ २',
            info: ''
        },
        {
            src: 'Images/8.JPG',
            number: 8,
            name: 'टिटवाळा १',
            info: ''
        },
        {
            src: 'Images/9.JPG',
            number: 9,
            name: 'आदिगणेश १',
            info: ''
        },
        {
            src: 'Images/10.JPG',
            number: 10,
            name: 'पेशवाई १',
            info: ''
        },
        {
            src: 'Images/11.JPG',
            number: 11,
            name: 'फेटेवाला',
            info: ''
        },
        {
            src: 'Images/12.JPG',
            number: 12,
            name: 'दगडूशेठ फेटा',
            info: ''
        },
        {
            src: 'Images/13.JPG',
            number: 13,
            name: 'पेणवाला',
            info: ''
        },
        {
            src: 'Images/15.JPG',
            number: 15,
            name: 'चौरंग दगडूशेठ २',
            info: ''
        },
        {
            src: 'Images/16.JPG',
            number: 16,
            name: 'दगडूशेठ गादी ',
            info: ''
        },
        {
            src: 'Images/17.JPG',
            number: 17,
            name: 'पेशवाई चौरंग २',
            info: ''
        },
        {
            src: 'Images/18.JPG',
            number: 18,
            name: 'शिंदे फर्निचर १',
            info: ''
        },
        {
            src: 'Images/19.JPG',
            number: 19,
            name: 'टिटवाळा चौरंग',
            info: ''
        },
        {
            src: 'Images/20.JPG',
            number: 20,
            name: 'कसबा १',
            info: ''
        },
        {
            src: 'Images/21.JPG',
            number: 21,
            name: 'तांबडी जोगेश्वरी १ ',
            info: ''
        },
        {
            src: 'Images/22.JPG',
            number: 22,
            name: 'टिटवाळा २',
            info: ''
        },
        {
            src: 'Images/23.JPG',
            number: 23,
            name: 'जिलब्या १',
            info: ''
        },
        {
            src: 'Images/24.JPG',
            number: 24,
            name: 'चौरंग पेणवाला',
            info: ''
        },
        {
            src: 'Images/26.JPG',
            number: 26,
            name: 'शाहू चौक १ ',
            info: ''
        },
        {
            src: 'Images/27.JPG',
            number: 27,
            name: ' शिवरेकर २',
            info: ''
        },
        {
            src: 'Images/28.JPG',
            number: 28,
            name: 'फिलिप्स २',
            info: ''
        },
        {
            src: 'Images/29.JPG',
            number: 29,
            name: 'मांडी चौरंग ३',
            info: ''
        },
        {
            src: 'Images/30.JPG',
            number: 30,
            name: 'डबललोड १',
            info: ''
        },
        {
            src: 'Images/31.JPG',
            number: 31,
            name: 'बाळगणेश',
            info: ''
        },
        {
            src: 'Images/32.JPG',
            number: 32,
            name: 'दागिना',
            info: ''
        },
        {
            src: 'Images/33.JPG',
            number: 33,
            name: 'दगडूशेठ ४',
            info: ''
        },
        {
            src: 'Images/34.JPG',
            number: 34,
            name: 'ओपेन दगडू १',
            info: ''
        },
        {
            src: 'Images/35.JPG',
            number: 35,
            name: 'केसरीवाडा १',
            info: ''
        },
        {
            src: 'Images/36.JPG',
            number: 36,
            name: 'जनार्दन १ ',
            info: ''
        },
        {
            src: 'Images/37.JPG',
            number: 37,
            name: 'वेलिंग १',
            info: ''
        },
        {
            src: 'Images/38.JPG',
            number: 38,
            name: 'दगडूशेठ ३',
            info: ''
        },
        {
            src: 'Images/39.JPG',
            number: 39,
            name: 'शिवरेकर ३',
            info: ''
        },
        {
            src: 'Images/40.JPG',
            number: 40,
            name: 'लालबाग १',
            info: ''
        },
        {
            src: 'Images/41.JPG',
            number: 41,
            name: 'लंबोडर',
            info: ''
        },
        {
            src: 'Images/43.JPG',
            number: 43,
            name: 'गोल चौरंग २',
            info: ''
        },
        {
            src: 'Images/44.JPG',
            number: 44,
            name: 'निंबाळकर १',
            info: ''
        },
        {
            src: 'Images/45.JPG',
            number: 45,
            name: 'आदिगणेश २',
            info: ''
        },
        {
            src: 'Images/46.JPG',
            number: 46,
            name: 'तांबडी जोगेश्वरी २',
            info: ''
        },
        {
            src: 'Images/47.JPG',
            number: 47,
            name: 'शिंदे चौरंग १',
            info: ''
        },
        {
            src: 'Images/48.JPG',
            number: 48,
            name: 'शिंदे शिवरेकर १',
            info: ''
        },
        {
            src: 'Images/49.JPG',
            number: 49,
            name: 'शिंदे डबललोड १',
            info: ''
        },
        {
            src: 'Images/50.JPG',
            number: 50,
            name: 'विजय टॉकीज १',
            info: ''
        },
        {
            src: 'Images/52.JPG',
            number: 52,
            name: 'शाहू चौक २',
            info: ''
        },
        {
            src: 'Images/53.JPG',
            number: 53,
            name: 'गरुड गणपती १',
            info: ''
        },
        {
            src: 'Images/54.JPG',
            number: 54,
            name: 'पेशवाई चौरंग ३',
            info: ''
        },
        {
            src: 'Images/55.JPG',
            number: 55,
            name: 'बाबूगेनू २',
            info: ''
        },
        {
            src: 'Images/56.JPG',
            number: 56,
            name: 'टिटवाळा कोच',
            info: ''
        },
        {
            src: 'Images/57.JPG',
            number: 57,
            name: 'शिंदे फर्निचर २',
            info: ''
        },
        {
            src: 'Images/58.JPG',
            number: 58,
            name: 'व्यवहार आळी',
            info: ''
        },
        {
            src: 'Images/59.JPG',
            number: 59,
            name: 'गुरुजी तालीम २',
            info: ''
        },
        {
            src: 'Images/60.JPG',
            number: 60,
            name: 'शिवरेकर चौरंग २',
            info: ''
        },
        {
            src: 'Images/61.JPG',
            number: 61,
            name: ' मांडी चौरंग ४',
            info: ''
        },
        {
            src: 'Images/62.JPG',
            number: 62,
            name: 'चौरंग ढेरपोट्या १',
            info: ''
        },
        {
            src: 'Images/63.JPG',
            number: 63,
            name: 'चौरंग दगडूशेठ ३',
            info: ''
        },
        {
            src: 'Images/64.JPG',
            number: 64,
            name: 'शिंदे ढेरपोट्या ',
            info: ''
        },
        {
            src: 'Images/65.JPG',
            number: 65,
            name: 'आदिगणेश ३',
            info: ''
        },
        {
            src: 'Images/66.JPG',
            number: 66,
            name: 'कसबा २',
            info: ''
        },
        {
            src: 'Images/67.JPG',
            number: 67,
            name: 'टिटवाळा शस्त्र',
            info: ''
        },
        {
            src: 'Images/68.JPG',
            number: 68,
            name: 'चौरंग दगडूशेठ ४',
            info: ''
        },
        {
            src: 'Images/69.JPG',
            number: 69,
            name: 'ओपेन दगडू २',
            info: ''
        },
        {
            src: 'Images/70.JPG',
            number: 70,
            name: 'जनार्दन २',
            info: ''
        },
        {
            src: 'Images/71.JPG',
            number: 71,
            name: 'दगडू शस्त्र',
            info: ''
        },
        {
            src: 'Images/72.JPG',
            number: 72,
            name: 'शिवरेकर चौरंग पेण',
            info: ''
        },
        {
            src: 'Images/73.JPG',
            number: 73,
            name: 'केसरीवाडा २',
            info: ''
        },
        {
            src: 'Images/74.JPG',
            number: 74,
            name: 'जिलब्या २',
            info: ''
        },
        {
            src: 'Images/75.JPG',
            number: 75,
            name: 'तुळशीबाग १',
            info: ''
        },
        {
            src: 'Images/76.JPG',
            number: 76,
            name: 'शिवरेकर चक्र',
            info: ''
        },
        {
            src: 'Images/77.JPG',
            number: 77,
            name: 'चौरंग दगडू ५',
            info: ''
        },
        {
            src: 'Images/78.JPG',
            number: 78,
            name: 'बाबूगेनू ३',
            info: ''
        },
        {
            src: 'Images/79.JPG',
            number: 79,
            name: 'आदिगणेश ४',
            info: ''
        },
        {
            src: 'Images/80.JPG',
            number: 80,
            name: 'चौरंग ढेरपोट्या २',
            info: ''
        },
        {
            src: 'Images/81.JPG',
            number: 81,
            name: 'लालबाग २',
            info: ''
        },
        {
            src: 'Images/82.JPG',
            number: 82,
            name: 'दगडू ओपेन ३',
            info: ''
        },
        {
            src: 'Images/83.JPG',
            number: 83,
            name: 'गोल चौरंग ३',
            info: ''
        },
        {
            src: 'Images/84.JPG',
            number: 84,
            name: 'गुरुजी तालीम ३',
            info: ''
        },
        {
            src: 'Images/85.JPG',
            number: 85,
            name: 'दगडूशेठ ५',
            info: ''
        },
        {
            src: 'Images/86.JPG',
            number: 86,
            name: 'विजय टॉकीज २',
            info: ''
        },
        {
            src: 'Images/87.JPG',
            number: 87,
            name: 'डबललोड २',
            info: ''
        },
        {
            src: 'Images/88.JPG',
            number: 88,
            name: 'तांबडी जोगेश्वरी 3',
            info: ''
        },
        {
            src: 'Images/89.JPG',
            number: 89,
            name: 'वेलिंग २',
            info: ''
        },
        {
            src: 'Images/90.JPG',
            number: 90,
            name: 'शिंदे फर्निचर ३',
            info: ''
        },
        {
            src: 'Images/91.JPG',
            number: 91,
            name: 'गरुड गणपती २',
            info: ''
        },
        {
            src: 'Images/92.JPG',
            number: 92,
            name: 'कसबा ३',
            info: ''
        },
        {
            src: 'Images/93.JPG',
            number: 93,
            name: 'टिटवाळा मोठा',
            info: ''
        },
        {
            src: 'Images/94.JPG',
            number: 94,
            name: 'शारदा गणपती',
            info: ''
        },
        {
            src: 'Images/95.JPG',
            number: 95,
            name: 'तुळशीबाग २',
            info: ''
        },
        {
            src: 'Images/96.JPG',
            number: 96,
            name: 'चौरंग दगडूशेठ ६',
            info: ''
        },
        {
            src: 'Images/97.JPG',
            number: 97,
            name: ' गुरुजी तालीम ४',
            info: ''
        },
        {
            src: 'Images/98.JPG',
            number: 98,
            name: 'तांबडी जोगेश्वरी ४',
            info: ''
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
        button.textContent = `${image.number} - ${image.name}`;
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
