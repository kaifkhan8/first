import User from "../model/usermodel.js";

export const createuser = async (req, res) => {
  try {
    const user = new User(req.body); // ✅ new जरूरी
    const savedUser = await user.save(); // ✅ await जरूरी
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export const getuser = async (req, res) => {
  try {
    const users = await User.find(); // ✅ await और plural 'users'
    res.status(200).json(users);     // ✅ response में पूरा data भेजो
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

