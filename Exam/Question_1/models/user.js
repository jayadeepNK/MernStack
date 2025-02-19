// This is a mock model. Replace it with your actual database model.
const users = [
    { id: 101,
      username: 'Jay',
      password: 'jayadeep123'
    } 
];

const findUserById = (id) => {
    return users.find(user => user.id === id);
};

const updateUserPassword = (id, newPassword) => {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
        users[userIndex].password = newPassword;
        return true;
    }
    return false;
};

module.exports = { findUserById, updateUserPassword };
