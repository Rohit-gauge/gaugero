export const calculateImageSize = (imageWidth, imageHeight) => {
    const isMobile = window.innerWidth <= 767;
    const screenWidth = window.innerWidth;
    const aspectRatio = imageWidth / imageHeight;
    let minHeight = 0;
    let minWidth = 0;
    let width = 0;
    let height = 0;
  
    if (isMobile) {
      minHeight = 480;
      minWidth = 480;
    } else {
      minHeight = 720;
      minWidth = 1280;
    }
  
    if (screenWidth < minWidth) {
      width = minWidth;
      height = minWidth / aspectRatio;
    } else if (screenWidth > minWidth && screenWidth < imageWidth) {
      width = screenWidth;
      height = screenWidth / aspectRatio;
    } else {
      width = imageWidth;
      height = imageHeight;
    }
  
    return { width, height,minHeight };
  };
  