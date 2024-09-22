const pool = require("../config/db");

exports.getAllUsers = async (req, res) => {

  try {
    // استعلام لجلب المستخدم بناءً على الـ user.id
    // const query = "SELECT * FROM users WHERE user_id = $1";
    const userId = req.user;

    // تشغيل الاستعلام باستخدام pool
    const result = await pool.query("SELECT * FROM users WHERE user_id = $1", [
      userId,
    ]);

    // استرجاع النتائج
    const users = result.rows[0];

    res.status(200).json({ users });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
