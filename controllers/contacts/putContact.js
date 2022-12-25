const Contacts = require("../../models/contact");
const { HttpError } = require("../../helpers/HttpError");
const addSchema = require('../../Schemes/schameJoi');

const putContact = async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);

    if (error) {
      throw HttpError(400, "Missing fields");
    }

    const { contactId } = req.params;
    const result = await Contacts.findByIdAndUpdate(contactId, req.body, {new: true});

    if (!result) {
      throw HttpError(404, "Not found");  
    };

    res.json(result)

  } catch (error) {
    next(error);
  }
}

module.exports = putContact;