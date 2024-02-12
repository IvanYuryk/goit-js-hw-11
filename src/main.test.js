// Import the function to be tested
const { renderImage } = require('./main');

// Mock the necessary dependencies
const imageList = {
    innerHTML: '',
};

const lightbox = {
    refresh: jest.fn(),
};

const onWarning = jest.fn();

// Test case 1: totalHits > 0
test('renderImage should render images when totalHits is greater than 0', () => {
    const data = {
        totalHits: '5',
        hits: ['image1', 'image2', 'image3', 'image4', 'image5'],
    };

    renderImage(data);

    // Assert that the imageList innerHTML is updated with the correct markup
    expect(imageList.innerHTML).toBe('image1image2image3image4image5');

    // Assert that the lightbox.refresh function is called
    expect(lightbox.refresh).toHaveBeenCalled();

    // Assert that the onWarning function is not called
    expect(onWarning).not.toHaveBeenCalled();
});

// Test case 2: totalHits <= 0
test('renderImage should clear imageList and call onWarning when totalHits is less than or equal to 0', () => {
    const data = {
        totalHits: '0',
        hits: [],
    };

    renderImage(data);

    // Assert that the imageList innerHTML is cleared
    expect(imageList.innerHTML).toBe('');

    // Assert that the lightbox.refresh function is not called
    expect(lightbox.refresh).not.toHaveBeenCalled();

    // Assert that the onWarning function is called
    expect(onWarning).toHaveBeenCalled();
});