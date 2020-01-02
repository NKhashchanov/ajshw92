import Validator from '../app';


test('Should pass', () => {
  const validator = new Validator();
  const received = validator.validateUsername('sdfsd23-_fsd');
  expect(received).toBe(true);
});

test('Should no pass numbers', () => {
  const validator = new Validator();
  const received = validator.validateUsername('3dfgdfg435fdf4)');
  expect(received).toBe(false);
});

test('Should no pass symbols', () => {
  const validator = new Validator();
  const received = validator.validateUsername('-sdfsdf_');
  expect(received).toBe(false);
});

test('Should no pass symbols', () => {
  const validator = new Validator();
  const received = validator.validateUsername('_sdfsdf_');
  expect(received).toBe(false);
});

test('Should no pass more than 3 numbers', () => {
  const validator = new Validator();
  const received = validator.validateUsername('sdg666666666666fsdf');
  expect(received).toBe(false);
});
