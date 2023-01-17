const Contacts = require("../../models/contact");

const getContacts = async (req, res, next) => {
  try {
    const { _id: owner } = req.user;
    const { page = 1, limit = 20, favorite } = req.query;
    const skip = (page - 1) * limit;
    const query = { owner };
    query.favorite = favorite ? favorite : { $in: [true, false] };
    const result = await Contacts.find(query, null, { skip, limit });   
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getContacts;
