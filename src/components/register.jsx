import { useState } from "react"
export function Register() {
  const [value, setValue] = useState({
    username: '',
    password: '',
    email: ''
  });
  function handleRegister(e) {
    e.preventDefault();
    (async () => {
      const existingUser = await axios
        .get(`http://localhost:3000/users?username=${userInfo.username}`)
        .then();
      if (existingUser.data.length !== 0) {
        ChangeErrorMessage(
          "register",
          "Username is already in use and must be unique"
        );
      } else {
        axios
          .post("http://localhost:3000/users", { ...userInfo })
          .then((res) => {
            if (res.data) {
            }
          })
          .catch((err) => console.log(err));
      }
    })();
  };
  const handleOnChange = e => {
    console.log('e = ', e);
    setValue(value => ({ value, [e.target.name]: e.target.value }))
  };


  return (
    <div>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="usernameCtrl">Username</label>
          <input
            id="usernameCtrl"
            value={value.username}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="passwordCtrl">Password</label>
          <input
            id="passwordCtrl"
            value={value.password}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="passwordCtrl">Re-enter Password</label>
          <input
            id="passwordCtrl"
            value={value.password}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="passwordCtrl">Email</label>
          <input
            id="passwordCtrl"
            value={value.email}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}
export default Register;
