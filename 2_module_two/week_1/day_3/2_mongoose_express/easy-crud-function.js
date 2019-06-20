// SMALL TEMPORARY UTIL FUNCTION
function createStudent() {
  Student.create({
    age: 23,
    cohort: 137,
    email: "foo@baz.com",
    firstname: "inga",
    lastname: "bar"
  }).then(createdUser => {
    console.log("student created", createdUser);

    setTimeout(() => {
      updateUser(createdUser._id);

      setTimeout(() => {
        deleteUser(createdUser._id);
      }, 4000);
    }, 3000);
  });
} 

function updateUser(id) {
  Student.findByIdAndUpdate(id, { email: "updated@mail.com" })
    .then(res => {
      console.log("user updated", res);
    })
    .catch(err => {
      console.error(err);
    });
}

function deleteUser(id) {
  Student.findByIdAndRemove(id)
    .then(res => {
      console.log("user removed from db", res);
    })
    .catch(err => {
      console.error(err);
    });
}

module.exports = {
    createStudent,
    deleteUser,
    updateUser
}