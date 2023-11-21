// Function to set the max-width of the container based on screen width

function setContainerMaxWidth() {
    const container = document.querySelector('.container');
    const custDiv = document.querySelector('.custom-div');
    const imgDiv = document.querySelector('.img-test');
    const thirdSection = document.querySelector('.second-container')

    const screenWidth = window.innerWidth;
    const screenHegith = window.innerHeight;

    // Define the max-width breakpoints (adjust these as needed)
    let maxWidth;

    let maxWidth_t = 0.94 * screenWidth
    if (screenWidth < screenHegith) {
        maxHeight = 0.30 * screenHegith
    } else {
        maxHeight = 0.90 * screenHegith
    }
    maxWidth = 0.95 * screenWidth
    // Set the max-width of the container
    container.style.maxWidth = maxWidth_t + 'px';
    custDiv.style.maxWidth = maxWidth + 'px';
    custDiv.style.maxHeight = '100vh';
    imgDiv.style.maxWidth = maxWidth + 'px';
    imgDiv.style.maxHeight = maxHeight + 'px';    

    if (screenWidth < screenHegith) {
        thirdSection.style.backgroundSize = `${screenWidth * 1.15}px ${screenHegith* 1.15}px`;
        thirdSection.style.backgroundPositionX = -0.051 * screenWidth + 'px';
        thirdSection.style.backgroundPositionY = -0.0112 * screenHegith + 'px';
    } else {
        thirdSection.style.backgroundSize = `${screenWidth * 1.25}px ${screenHegith* 1.25}px`;
        thirdSection.style.backgroundPositionX = -0.1412 * screenWidth + 'px';
        thirdSection.style.backgroundPositionY = -0.0312 * screenHegith + 'px';
    }
}

document.addEventListener('DOMContentLoaded', function () {

    const menuToggle = document.querySelector('.hamburger-menu');
    const overlay = document.querySelector('.overlay');
    const closeButton = document.getElementById('return-menu');

    menuToggle.addEventListener('click', () => {
        overlay.classList.toggle('active');
    });
     // Add an event listener to close the overlay when the X mark is clicked
     closeButton.addEventListener('click', () => {
        overlay.classList.add('roll-out');
        setTimeout(function() {
            overlay.classList.remove('active');
            overlay.classList.remove('roll-out');
        }, 600);
    });

    function checkScreenWidth() {
        return window.innerWidth > 862;
    }
    
    const gridItems = document.querySelectorAll('.grid-item');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {

            if (entry.isIntersecting && checkScreenWidth()) {
                const item = entry.target;
                item.style.animation = 'fade-in-grow 0.5s ease-in-out forwards';
                item.style.opacity = 1;
                observer.unobserve(item);
            }

            else if (entry.isIntersecting) {
                const item = entry.target;
                if (item.classList.contains('odd')) {
                    item.style.animation = 'slide-fade-left 0.5s ease-in-out forwards';
                } else {
                    item.style.animation = 'slide-fade-right 0.5s ease-in-out forwards';
                }
                item.style.opacity = 1;
                observer.unobserve(item);
            }
        });
    });

    if (checkScreenWidth()) {
         gridItems.forEach(elem => {
            elem.style.transform = "scale(0.01);"
         })
    }

    gridItems.forEach((item, index) => {
        item.style.animation = 'none'; // Disable the animation initially
        item.classList.add(index % 2 === 0 ? 'even' : 'odd');
        observer.observe(item);
    });


    var flag = 0;
    var shareButton = document.querySelector('.share');
    var one = document.querySelector('.one');
    var two = document.querySelector('.two');
    var three = document.querySelector('.three');
    var oneI = one.querySelector('i');
    var twoI = two.querySelector('i');
    var threeI = three.querySelector('i');

    shareButton.addEventListener('click', function () {
        if (flag === 0) {
            animateElement(one, 150, '50%', 200);
            animateElement(two, 230, '40%', 200, 200);
            animateElement(three, 230, '60%', 200, 300);

            fadeInElement(oneI, 500);
            fadeInElement(twoI, 500);
            fadeInElement(threeI, 500);

            flag = 1;
        } else {
            resetElementPosition(one, 300, '50%', 200);
            resetElementPosition(two, 300, '50%', 200);
            resetElementPosition(three, 300, '50%', 200);

            fadeOutElement(oneI, 500);
            fadeOutElement(twoI, 500);
            fadeOutElement(threeI, 500);

            flag = 0;
        }
    });

    function animateElement(element, top, left, duration, delay = 0) {
        setTimeout(function () {
            element.style.top = top + 'px';
            element.style.left = left;
            element.style.transition = 'all ' + duration + 'ms';
        }, delay);
    }

    function resetElementPosition(element, top, left, duration) {
        element.style.top = top + 'px';
        element.style.left = left;
        element.style.transition = 'all ' + duration + 'ms';
    }

    function fadeInElement(element, delay) {
        setTimeout(function () {
            element.style.opacity = '1';
            element.style.transition = 'opacity 200ms';
        }, delay);
    }

    function fadeOutElement(element, delay) {
        setTimeout(function () {
            element.style.opacity = '0';
            element.style.transition = 'opacity 200ms';
        }, delay);
    }

    const icons = document.querySelectorAll('.icon');
    let xOffset = 10; // Horizontal offset
    let yOffset = 10; // Vertical offset for the first row
    let yOffsetSecondRow = 50; // Vertical offset for the second row
    const maxPerRow = 3; // Maximum icons per row

    if (screen.width < 1200) {
        xOffset = 8.6; // Horizontal offset
        yOffset = 8.5; // Vertical offset for the first row
        yOffsetSecondRow = 50; // Vertical offset for the second row
    }

    let x = xOffset;
    let y = yOffset;
    let rowCount = 0;
    let iconsInRow = 0;

    icons.forEach((icon, index) => {
        icon.style.left = x + '%';
        icon.style.top = y + '%';

        iconsInRow++;

        if (iconsInRow >= maxPerRow) {
            // Increment rowCount when moving to the next row
            rowCount++;
            
            if (rowCount % 2 === 0) {
                // Move to the next row
                x = xOffset;
                y =  1.19 *  yOffsetSecondRow;
                iconsInRow = 0;
            } else {
                // Move to the next row within the same set of three rows
                x = xOffset + (1.5 * xOffset);
                y += 0.5 * yOffsetSecondRow; // Increment y for the second row
                iconsInRow = 1;
            }
        } else {
            // Move to the next column in the same row
            x += 3.2 * xOffset; // Adjust the xOffset as needed
        }
         // Add a mousemove event listener to make icons chase the mouse
         icon.addEventListener('mousemove', function (event) {
            const iconRect = icon.getBoundingClientRect();
            const iconX = iconRect.left + iconRect.width / 2;
            const iconY = iconRect.top + iconRect.height / 2;
            const mouseX = event.clientX;
            const mouseY = event.clientY;
            const xOffset = (mouseX - iconX) * 0.9;
            const yOffset = (mouseY - iconY) * 0.9;

            // Apply the chase animation based on mouse position
            icon.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });

        // Reset the icon's position when the mouse leaves the icon
        icon.addEventListener('mouseleave', function () {
            icon.style.transform = 'translate(0, 0)';
        });
    });
    
});

//Carosel
document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const slideWidth = slides[0].clientWidth;

    let slideIndex = 0;

    function nextSlide() {
        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        updateCarousel();
    }

    function updateCarousel() {
        container.style.transform = `translateX(-${slideWidth * slideIndex}px)`;

        // Adjust slide opacity based on their position
        slides.forEach((slide, index) => {
            const distanceToCenter = Math.abs(slideWidth * index - slideWidth * slideIndex);
            const maxFadeDistance = slideWidth * 1.2; // Adjust as needed

            // Calculate opacity based on distance to the center
            const opacity = 1 - (distanceToCenter / maxFadeDistance);
            slide.style.opacity = 1 - opacity; // Reverse the opacity calculation
        });
    }

    // Auto-scroll every 3 seconds (adjust as needed)
    setInterval(nextSlide, 3000);

    // To create the infinite loop
    let cloneCount = 200; // Adjust this value as needed for the desired number of clones

    for (let i = 0; i < cloneCount; i++) {
        slides.forEach((slide) => {
            const clone = slide.cloneNode(true);
            container.appendChild(clone);
        });
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const shareElement = document.querySelector('.share');
    const svgContainer = document.querySelector('.svg-container');
    const svgPositionLeft = shareElement.offsetLeft - 2;
    const svgPositionTop = shareElement.offsetTop - 20;
    const currDrawingWidth = 200;
    const currDrawingHeight = 100;

    console.log(screen.width/currDrawingWidth)

    // Set the position of the .svg-container
    switch (true) {
        case screen.width>1400:
            leftValue = 38;
            break;
        case screen.width>1200:
            leftValue = 36;
            break;
        case screen.width>800:
            leftValue = 22;
            break;
        case screen.width>600:
            leftValue = 20;
            break;
        default:
            leftValue = 2;
            break;
    }
      
    svgContainer.style.left = (leftValue + '%') ;
    svgContainer.style.top = ((svgPositionTop - currDrawingHeight) + 'px');
    
  });
  

function scrollDown() {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
}
// Call the function when the page loads and when the window is resized
window.addEventListener('load', setContainerMaxWidth);
window.addEventListener('resize', setContainerMaxWidth);

function jumpTo(element) {
    if (['Brochures','Logo','WebDesign','MotionGraphic','Catalog','Poster'].includes(element)) {
        const newWindow = window.open('https://www.pencilidea.com/'+element, '_blank'); 
        return;
    }
    const currentURL = window.location.href;
    const targetURL = 'https://www.pencilidea.com/';
    const targetText = (element.innerText || element.textContent).toLowerCase();
    if (currentURL != targetURL) {
        const newWindow = window.open('https://www.pencilidea.com/', '_blank'); 
        newWindow.onload = () => {
            const aboutDiv = newWindow.document.getElementById(targetText);
            if (aboutDiv) {
                aboutDiv.scrollIntoView({
                  behavior: 'smooth', // Optional: adds smooth scrolling behavior
                  block: 'start' // Scrolls the top of the element to the top of the window
                });
            }
        }
    } else {
        var element = document.getElementById(targetText);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

}

function showSearch() {
    if (document.getElementById('searchInput').style.display != 'block')
    {   
        document.querySelector('.search-icon').style.border= '2px solid #000';
        document.querySelector('.search-icon').style.borderRadius ='0 10px 10px 0px'; 
        document.querySelector('.search-icon').style.backgroundColor ='#FF7700'; 
        document.querySelector('.search-icon').style.padding ='1px'; 
        document.getElementById('searchInput').style.display = 'block';
    }
    
}

// <<<<------------------------->>>>
document.addEventListener('DOMContentLoaded', function() {
  const textElements = document.querySelectorAll('.slide-down-animation');
  const textElemen1 = document.querySelectorAll('.slide-right-animation');
  const fadeInGrow = document.querySelectorAll('.fade-in-grow');

  const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin
    threshold: 0.5 // Trigger the animation when 50% of the element is visible
  };

  const topTextObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const leftTextObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateX(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const growFade = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      } 
    });
  }, observerOptions);


  textElements.forEach(element => {
    topTextObserver.observe(element);
  });

  textElemen1.forEach(element => {
    leftTextObserver.observe(element);
  });

  fadeInGrow.forEach(element => {
    growFade.observe(element);
  });

});


anychart.onDocumentReady(function () {
    // Define the data with nodes and connections
    var data = {
        nodes: [
            { id: "InDesign", fill: { src: "static/img/InDesign.png" }, height: 80, x: 100, y: 100 },
            { id: "Photoshop", fill: { src: "static/img/Photoshop.png" }, height: 80, x: 200, y: 200 },
            { id: "AfterEffects", fill: { src: "static/img/After Effects.png" }, height: 80, x: 300, y: 300 },
            { id: "Premiere", fill: { src: "static/img/Premire.png" }, height: 80, x: 400, y: 400 },
            { id: "Illustrator", fill: { src: "static/img/Illustrator.png" }, height: 80, x: 500, y: 500 },
            { id: "Animate", fill: { src: "static/img/Animate.png" }, height: 80, x: 600, y: 600 },
            { id: "MediaEncoder", fill: { src: "static/img/Media Encoder.png" }, height: 80, x: 700, y: 200 },
            { id: "Bridge", fill: { src: "static/img/Bridge.png" }, height: 80, x: 800, y: 800 },
            { id: "Zbrush", fill: { src: "static/img/Zbrush.png" }, height: 80, x: 900, y: 900 },
            { id: "Cinema4D", fill: { src: "static/img/Cinema 4D.png" }, height: 80, x: 1000, y: 1000 },
            // { id: "MT", fill: {src:"static/img/Logo-Black.png"}, height: 100}
            { id: "Our Team", fill: {src:"rand.png"}, height: 100}

          ],
    //   edges: [
    //     { from: "InDesign", to: "Photoshop" },
    //     { from: "InDesign", to: "AfterEffects" },
    //     { from: "InDesign", to: "Premiere" },
    //     { from: "InDesign", to: "Illustrator" },
    //     { from: "InDesign", to: "Animate" },
    //     { from: "InDesign", to: "MediaEncoder" },
    //     { from: "InDesign", to: "Bridge" },
    //     { from: "InDesign", to: "Zbrush" },
    //     { from: "InDesign", to: "Cinema4D" },
  
    //     { from: "Photoshop", to: "AfterEffects" },
    //     { from: "Photoshop", to: "Premiere" },
    //     { from: "Photoshop", to: "Illustrator" },
    //     { from: "Photoshop", to: "Animate" },
    //     { from: "Photoshop", to: "MediaEncoder" },
    //     { from: "Photoshop", to: "Bridge" },
    //     { from: "Photoshop", to: "Zbrush" },
    //     { from: "Photoshop", to: "Cinema4D" },
  
    //     { from: "AfterEffects", to: "Premiere" },
    //     { from: "AfterEffects", to: "Illustrator" },
    //     { from: "AfterEffects", to: "Animate" },
    //     { from: "AfterEffects", to: "MediaEncoder" },
    //     { from: "AfterEffects", to: "Bridge" },
    //     { from: "AfterEffects", to: "Zbrush" },
    //     { from: "AfterEffects", to: "Cinema4D" },
  
    //     { from: "Premiere", to: "Illustrator" },
    //     { from: "Premiere", to: "Animate" },
    //     { from: "Premiere", to: "MediaEncoder" },
    //     { from: "Premiere", to: "Bridge" },
    //     { from: "Premiere", to: "Zbrush" },
    //     { from: "Premiere", to: "Cinema4D" },
  
    //     { from: "Illustrator", to: "Animate" },
    //     { from: "Illustrator", to: "MediaEncoder" },
    //     { from: "Illustrator", to: "Bridge" },
    //     { from: "Illustrator", to: "Zbrush" },
    //     { from: "Illustrator", to: "Cinema4D" },
  
    //     { from: "Animate", to: "MediaEncoder" },
    //     { from: "Animate", to: "Bridge" },
    //     { from: "Animate", to: "Zbrush" },
    //     { from: "Animate", to: "Cinema4D" },
  
    //     { from: "MediaEncoder", to: "Bridge" },
    //     { from: "MediaEncoder", to: "Zbrush" },
    //     { from: "MediaEncoder", to: "Cinema4D" },
  
    //     { from: "Bridge", to: "Zbrush" },
    //     { from: "Bridge", to: "Cinema4D" },
  
    //     { from: "Zbrush", to: "Cinema4D" }
    //   ]
    edges: [
        
        { from: "Our Team", to: "Photoshop" },
        { from: "Our Team", to: "AfterEffects" },
        { from: "Our Team", to: "Premiere" },
        { from: "Our Team", to: "Illustrator" },
        { from: "Our Team", to: "Animate" },
        { from: "Our Team", to: "MediaEncoder" },
        { from: "Our Team", to: "Bridge" },
        { from: "Our Team", to: "Zbrush" },
        { from: "Our Team", to: "Cinema4D" },
        { from: "Our Team", to: "InDesign" }
        
      ]
    };
  
    // create a chart from the loaded data
    var chart = anychart.graph(data);
  
    // set the title
  
    // access nodes
    var nodes = chart.nodes();
  
    // set the size of nodes
    nodes.normal().height(80);
    nodes.hovered().height(55);
    nodes.selected().height(55);
  
    // set the stroke of nodes
    nodes.normal().stroke(null);
    nodes.hovered().stroke("#FF7700", 4);
    nodes.selected().stroke("#FF7700", 4);
  
    chart.edges().stroke("#FF7700", 2);
    chart.edges().hovered().stroke("#FF7700", 3);

    // enable the labels of nodes
    chart.nodes().labels().enabled(false);
    chart.interactivity().zoomOnMouseWheel(false);
    // draw the chart
    chart.container("container").draw();
  });
  