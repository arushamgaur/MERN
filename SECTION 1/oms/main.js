var sliderImages = document.getElementsByClassName('slider-image');
        var sliderCaptions = document.getElementsByClassName('slider-caption');
        var currentSlide = 0;
        
        // Function to hide all slider images and captions
        function hideSlides() {
            for (var i = 0; i < sliderImages.length; i++) {
                sliderImages[i].style.display = 'none';
                sliderCaptions[i].style.display = 'none';
            }
        }
        
        // Function to show the current slide
        function showSlide() {
            hideSlides();
            sliderImages[currentSlide].style.display = 'block';
            sliderCaptions[currentSlide].style.display = 'block';
            currentSlide = (currentSlide + 1) % sliderImages.length;
        }
        
        // Show the first slide
        showSlide();
        
        // Set interval to change slide every 5 seconds
        setInterval(showSlide, 4000);