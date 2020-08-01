var i = 0;
        var images = [];
        var time = 1000;

        //image list
        images[0] = 'image1.jpg.png';
        images[1] = 'image2.webp';
        images[2] = 'image3.webp';
        images[3] = 'image4.webp';
        images[4] = 'image5.webp';
        images[5] = 'image6.webp';
        images[6] = 'image7.webp';
        images[7] = 'image8.webp';
        images[8] = 'image9.webp';
        images[9] = 'image10.webp';
        images[10] = 'image11.webp';
        images[11] = 'image12.webp';
        images[12] = 'image13.webp';
        images[13] = 'image14.webp';
        images[14] = 'image15.webp';
        images[15] = 'image16.webp';
        images[16] = 'image17.webp';
        images[17] = 'image18.webp';
        images[18] = 'image21.webp';
        images[19] = 'image20.webp';
        images[20] = 'image19.webp';
        images[21] = 'image22.webp';
        images[22] = 'image23.webp';
        images[23] = 'image24.webp';
        images[24] = 'image25.webp';
        images[25] = 'image26.webp';
        images[26] = 'image27.webp';
        images[27] = 'image28.webp';
        images[28] = 'image29.webp';
        images[29] = 'image30.jpg';
        images[30] = 'image31.jpg';
        images[31] = 'image32.jpg';
        images[32] = 'image33.jpg';

        //change image

        function changeImg() {
            document.slide.src = images[i];

            if(i < images.length - 1) {
                i++
            } else {
                i = 0;
            }

            setTimeout("changeImg()", time);
        }

        window.onload = changeImg;