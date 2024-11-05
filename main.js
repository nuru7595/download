const files = [
    { url: './imgs/Page01.jpg', name: 'Page01.jpg' },
    { url: './imgs/Page02.jpg', name: 'Page02.jpg' },
    { url: './imgs/Page03.jpg', name: 'Page03.jpg' },
    { url: './imgs/Page04.jpg', name: 'Page04.jpg' },
    { url: './imgs/Page05.jpg', name: 'Page05.jpg' },
    { url: './imgs/Page06.jpg', name: 'Page06.jpg' },
    { url: './imgs/Page07.jpg', name: 'Page07.jpg' },
    { url: './imgs/Page08.jpg', name: 'Page08.jpg' },
    { url: './imgs/Page09.jpg', name: 'Page09.jpg' },
    { url: './imgs/Page10.jpg', name: 'Page10.jpg' },
    { url: './imgs/Page11.jpg', name: 'Page11.jpg' },
    { url: './imgs/Page12.jpg', name: 'Page12.jpg' },
    { url: './imgs/Page13.jpg', name: 'Page13.jpg' },
    { url: './imgs/Page14.jpg', name: 'Page14.jpg' },
    { url: './imgs/Page15.jpg', name: 'Page15.jpg' },
    { url: './imgs/Page16.jpg', name: 'Page16.jpg' },
    { url: './imgs/Page17.jpg', name: 'Page17.jpg' },
    { url: './imgs/Page18.jpg', name: 'Page18.jpg' },
    { url: './imgs/Page19.jpg', name: 'Page19.jpg' },
    { url: './imgs/Page20.jpg', name: 'Page20.jpg' },
    { url: './imgs/Page21.jpg', name: 'Page21.jpg' },
    { url: './imgs/Page22.jpg', name: 'Page22.jpg' },
    { url: './imgs/Page23.jpg', name: 'Page23.jpg' },
    { url: './imgs/Page24.jpg', name: 'Page24.jpg' },
    { url: './imgs/Page25.jpg', name: 'Page25.jpg' },
    { url: './imgs/Page26.jpg', name: 'Page26.jpg' },
    { url: './imgs/Page27.jpg', name: 'Page27.jpg' },
    { url: './imgs/Page28.jpg', name: 'Page28.jpg' },
    { url: './imgs/Page29.jpg', name: 'Page29.jpg' },
    { url: './imgs/Page30.jpg', name: 'Page30.jpg' },
    { url: './imgs/Page31.jpg', name: 'Page31.jpg' },
    { url: './imgs/Page32.jpg', name: 'Page32.jpg' }
];
const numberOfImages = 32; // Total number of images

// Generate filenames for Page01.jpg to Page32.jpg
for (let i = 1; i <= numberOfImages; i++) {
    const paddedNumber = String(i).padStart(2, '0'); // Pad number to two digits
    files.push({ url: `./imgs/Page${paddedNumber}.jpg`, name: `Page${paddedNumber}.jpg` });
}

const buttonContainer = document.getElementById('button-container');

files.forEach(file => {
    const button = document.createElement('button');
    button.className = 'download-btn';
    button.textContent = `${file.name}`;
    button.onclick = () => downloadFile(file.url, file.name);
    buttonContainer.appendChild(button);
});

function downloadFile(url, name) {
    const link = document.createElement('a');
    link.href = url;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function downloadAllImages() {
    let index = 0;

    function downloadNext() {
        if (index < files.length) {
            downloadFile(files[index].url, files[index].name);
            index++;
            // Schedule the next download after 1 second
            setTimeout(downloadNext, 1000); // Adjust time as needed
        }
    }

    downloadNext(); // Start downloading all images
}