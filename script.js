document.addEventListener('DOMContentLoaded', () => {
    // JavaScript object to hold image details
    const images = [
        {
            src: 'Images/1 new.JPG',
            number: 1,
            name: 'मांडी चौरंग २',
            info: '930'
        },
        {
            src: 'Images/2.JPG',
            number: 2,
            name: 'लोडवाला',
            info: '960'
        },
        {
            src: 'Images/3.JPG',
            number: 3,
            name: 'चौरंग दगडूशेठ १',
            info: '960'
        },
        {
            src: 'Images/5.JPG',
            number: 5,
            name: 'लोड चौरांग',
            info: '1080'
        },
        {
            src: 'Images/7.JPG',
            number: 7,
            name: 'दगडूशेठ २',
            info: '1100'
        },
        {
            src: 'Images/8.JPG',
            number: 8,
            name: 'टिटवाळा १',
            info: '1100'
        },
        {
            src: 'Images/9.JPG',
            number: 9,
            name: 'आदिगणेश १',
            info: '1100'
        },
        {
            src: 'Images/10.JPG',
            number: 10,
            name: 'पेशवाई १',
            info: '1100'
        },
        {
            src: 'Images/11.JPG',
            number: 11,
            name: 'फेटेवाला',
            info: '1120'
        },
        {
            src: 'Images/12.JPG',
            number: 12,
            name: 'दगडूशेठ फेटा',
            info: '1150'
        },
        {
            src: 'Images/13.JPG',
            number: 13,
            name: 'पेणवाला',
            info: '1250'
        },
        {
            src: 'Images/15.JPG',
            number: 15,
            name: 'चौरंग दगडूशेठ २',
            info: '1200'
        },
        {
            src: 'Images/16.JPG',
            number: 16,
            name: 'दगडूशेठ गादी ',
            info: '1220'
        },
        {
            src: 'Images/17.JPG',
            number: 17,
            name: 'पेशवाई चौरंग २',
            info: '1220'
        },
        {
            src: 'Images/18.JPG',
            number: 18,
            name: 'शिंदे फर्निचर १',
            info: '1220'
        },
        {
            src: 'Images/19.JPG',
            number: 19,
            name: 'टिटवाळा चौरंग',
            info: '1220'
        },
        {
            src: 'Images/20.JPG',
            number: 20,
            name: 'कसबा १',
            info: '1240'
        },
        {
            src: 'Images/21.JPG',
            number: 21,
            name: 'तांबडी जोगेश्वरी १ ',
            info: '1240'
        },
        {
            src: 'Images/22.JPG',
            number: 22,
            name: 'टिटवाळा २',
            info: '1650'
        },
        {
            src: 'Images/23.JPG',
            number: 23,
            name: 'जिलब्या १',
            info: '1300'
        },
        {
            src: 'Images/24.JPG',
            number: 24,
            name: 'चौरंग पेणवाला',
            info: '1400'
        },
        {
            src: 'Images/26.JPG',
            number: 26,
            name: 'शाहू चौक १ ',
            info: '1350'
        },
        {
            src: 'Images/27.JPG',
            number: 27,
            name: ' शिवरेकर २',
            info: '1550'
        },
        {
            src: 'Images/28.JPG',
            number: 28,
            name: 'फिलिप्स २',
            info: '1450'
        },
        {
            src: 'Images/29.JPG',
            number: 29,
            name: 'मांडी चौरंग ३',
            info: '1800'
        },
        {
            src: 'Images/30.JPG',
            number: 30,
            name: 'डबललोड १',
            info: '1450'
        },
        {
            src: 'Images/31.JPG',
            number: 31,
            name: 'बाळगणेश',
            info: '1450'
        },
        {
            src: 'Images/32.JPG',
            number: 32,
            name: 'दागिना',
            info: '1500'
        },
        {
            src: 'Images/33.JPG',
            number: 33,
            name: 'दगडूशेठ ४',
            info: '1650'
        },
        {
            src: 'Images/34.JPG',
            number: 34,
            name: 'ओपेन दगडू १',
            info: '1650'
        },
        {
            src: 'Images/35.JPG',
            number: 35,
            name: 'केसरीवाडा १',
            info: '1800'
        },
        {
            src: 'Images/36.JPG',
            number: 36,
            name: 'जनार्दन १ ',
            info: '1650'
        },
        {
            src: 'Images/37.JPG',
            number: 37,
            name: 'वेलिंग १',
            info: '1650'
        },
        {
            src: 'Images/38.JPG',
            number: 38,
            name: 'दगडूशेठ ३',
            info: '1700'
        },
        {
            src: 'Images/39.JPG',
            number: 39,
            name: 'शिवरेकर ३',
            info: '1750'
        },
        {
            src: 'Images/40.JPG',
            number: 40,
            name: 'लालबाग १',
            info: '1700'
        },
        {
            src: 'Images/41.JPG',
            number: 41,
            name: 'लंबोडर',
            info: '1700'
        },
        {
            src: 'Images/43.JPG',
            number: 43,
            name: 'गोल चौरंग २',
            info: '1820'
        },
        {
            src: 'Images/44.JPG',
            number: 44,
            name: 'निंबाळकर १',
            info: '1900'
        },
        {
            src: 'Images/45.JPG',
            number: 45,
            name: 'आदिगणेश २',
            info: '2000'
        },
        {
            src: 'Images/46.JPG',
            number: 46,
            name: 'तांबडी जोगेश्वरी २',
            info: '1920'
        },
        {
            src: 'Images/47.JPG',
            number: 47,
            name: 'शिंदे चौरंग १',
            info: '1950'
        },
        {
            src: 'Images/48.JPG',
            number: 48,
            name: 'शिंदे शिवरेकर १',
            info: '1950'
        },
        {
            src: 'Images/49.JPG',
            number: 49,
            name: 'शिंदे डबललोड १',
            info: '1950'
        },
        {
            src: 'Images/50.JPG',
            number: 50,
            name: 'विजय टॉकीज १',
            info: '2150'
        },
        {
            src: 'Images/52.JPG',
            number: 52,
            name: 'शाहू चौक २',
            info: '2000'
        },
        {
            src: 'Images/53.JPG',
            number: 53,
            name: 'गरुड गणपती १',
            info: '2100'
        },
        {
            src: 'Images/54.JPG',
            number: 54,
            name: 'पेशवाई चौरंग ३',
            info: '2050'
        },
        {
            src: 'Images/55.JPG',
            number: 55,
            name: 'बाबूगेनू २',
            info: '2400'
        },
        {
            src: 'Images/56.JPG',
            number: 56,
            name: 'टिटवाळा कोच',
            info: '2450'
        },
        {
            src: 'Images/57.JPG',
            number: 57,
            name: 'शिंदे फर्निचर २',
            info: '2100'
        },
        {
            src: 'Images/58.JPG',
            number: 58,
            name: 'व्यवहार आळी',
            info: '2100'
        },
        {
            src: 'Images/59.JPG',
            number: 59,
            name: 'गुरुजी तालीम २',
            info: '2150'
        },
        {
            src: 'Images/60.JPG',
            number: 60,
            name: 'शिवरेकर चौरंग २',
            info: '2150'
        },
        {
            src: 'Images/61.JPG',
            number: 61,
            name: ' मांडी चौरंग ४',
            info: '2500'
        },
        {
            src: 'Images/62.JPG',
            number: 62,
            name: 'चौरंग ढेरपोट्या १',
            info: '2200'
        },
        {
            src: 'Images/63.JPG',
            number: 63,
            name: 'चौरंग दगडूशेठ ३',
            info: '2220'
        },
        {
            src: 'Images/64.JPG',
            number: 64,
            name: 'शिंदे ढेरपोट्या ',
            info: '2150'
        },
        {
            src: 'Images/65.JPG',
            number: 65,
            name: 'आदिगणेश ३',
            info: '2300'
        },
        {
            src: 'Images/66.JPG',
            number: 66,
            name: 'कसबा २',
            info: '2300'
        },
        {
            src: 'Images/67.JPG',
            number: 67,
            name: 'टिटवाळा शस्त्र',
            info: '2350'
        },
        {
            src: 'Images/68.JPG',
            number: 68,
            name: 'चौरंग दगडूशेठ ४',
            info: '2400'
        },
        {
            src: 'Images/69.JPG',
            number: 69,
            name: 'ओपेन दगडू २',
            info: '2400'
        },
        {
            src: 'Images/70.JPG',
            number: 70,
            name: 'जनार्दन २',
            info: '2450'
        },
        {
            src: 'Images/71.JPG',
            number: 71,
            name: 'दगडू शस्त्र',
            info: '2450'
        },
        {
            src: 'Images/72.JPG',
            number: 72,
            name: 'शिवरेकर चौरंग पेण',
            info: '2400'
        },
        {
            src: 'Images/73.JPG',
            number: 73,
            name: 'केसरीवाडा २',
            info: '2450'
        },
        {
            src: 'Images/74.JPG',
            number: 74,
            name: 'जिलब्या २',
            info: '2450'
        },
        {
            src: 'Images/75.JPG',
            number: 75,
            name: 'तुळशीबाग १',
            info: '2600'
        },
        {
            src: 'Images/76.JPG',
            number: 76,
            name: 'शिवरेकर चक्र',
            info: '2600'
        },
        {
            src: 'Images/77.JPG',
            number: 77,
            name: 'चौरंग दगडू ५',
            info: '2800'
        },
        {
            src: 'Images/78.JPG',
            number: 78,
            name: 'बाबूगेनू ३',
            info: '3500'
        },
        {
            src: 'Images/79.JPG',
            number: 79,
            name: 'आदिगणेश ४',
            info: '2700'
        },
        {
            src: 'Images/80.JPG',
            number: 80,
            name: 'चौरंग ढेरपोट्या २',
            info: '3250'
        },
        {
            src: 'Images/81.JPG',
            number: 81,
            name: 'लालबाग २',
            info: '2700'
        },
        {
            src: 'Images/82.JPG',
            number: 82,
            name: 'दगडू ओपेन ३',
            info: '3300'
        },
        {
            src: 'Images/83.JPG',
            number: 83,
            name: 'गोल चौरंग ३',
            info: '3200'
        },
        {
            src: 'Images/84.JPG',
            number: 84,
            name: 'गुरुजी तालीम ३',
            info: '3200'
        },
        {
            src: 'Images/85.JPG',
            number: 85,
            name: 'दगडूशेठ ५',
            info: '3500'
        },
        {
            src: 'Images/86.JPG',
            number: 86,
            name: 'विजय टॉकीज २',
            info: '2400'
        },
        {
            src: 'Images/87.JPG',
            number: 87,
            name: 'डबललोड २',
            info: '3300'
        },
        {
            src: 'Images/88.JPG',
            number: 88,
            name: 'तांबडी जोगेश्वरी 3',
            info: '3300'
        },
        {
            src: 'Images/89.JPG',
            number: 89,
            name: 'वेलिंग २',
            info: '3300'
        },
        {
            src: 'Images/90.JPG',
            number: 90,
            name: 'शिंदे फर्निचर ३',
            info: '3400'
        },
        {
            src: 'Images/91.JPG',
            number: 91,
            name: 'गरुड गणपती २',
            info: '3300'
        },
        {
            src: 'Images/92.JPG',
            number: 92,
            name: 'कसबा ३',
            info: '3550'
        },
        {
            src: 'Images/93.JPG',
            number: 93,
            name: 'टिटवाळा मोठा',
            info: '3700'
        },
        {
            src: 'Images/94.JPG',
            number: 94,
            name: 'शारदा गणपती',
            info: '3800'
        },
        {
            src: 'Images/95.JPG',
            number: 95,
            name: 'तुळशीबाग २',
            info: '3800'
        },
        {
            src: 'Images/96.JPG',
            number: 96,
            name: 'चौरंग दगडूशेठ ६',
            info: '4600'
        },
        {
            src: 'Images/97.JPG',
            number: 97,
            name: ' गुरुजी तालीम ४',
            info: '4200'
        },
        {
            src: 'Images/98.JPG',
            number: 98,
            name: 'तांबडी जोगेश्वरी ४',
            info: '3800'
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
