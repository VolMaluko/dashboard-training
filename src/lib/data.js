import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (name) => {
  const regex = new RegExp(name, "i");

  try {
    connectToDB();
    const users = await User.find({ username: { $regex: regex } });
    return users;
  } catch (err) {
    throw new Error("Failed to fetch Users!");
  }
};
