const InvariantError = require('../../exception/InvariantError');
const { notePayloadSchema } = require('./schema');

const noteValidator = {
  validateNotePayload: (payload) => {
    const validationResult = notePayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = noteValidator;
