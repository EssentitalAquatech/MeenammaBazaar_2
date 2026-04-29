// import Contact from "../models/Contact.js";

// export const createContact = async (req, res) => {
//   try {
//     const { name, phone, description } = req.body;

//     const contact = await Contact.create({
//       name,
//       phone,
//       description,
//     });

//     res.status(201).json(contact);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };



import Contact from "../models/Contact.js";

// ✅ Create Contact (User submits form)
export const createContact = async (req, res) => {
  try {
    const { name, phone, description } = req.body;

    const contact = await Contact.create({
      name,
      phone,
      description,
    });

    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Get All Contacts (Admin Panel)
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};