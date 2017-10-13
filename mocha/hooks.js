before(function () {
    // runs before all tests in this block
    console.log('===before===')
});

beforeEach(function () {
    // runs before each test in this block
    console.log('===beforeEach===')
});

afterEach(function () {
    // runs after each test in this block
    console.log('===afterEach===')
});

after(function () {
    // runs after all tests in this block
    console.log('===after===')
});