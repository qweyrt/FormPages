import { useState } from "react"
export function Login() {
  const [value, setValue] = useState({
    username: '',
    password: ''
  });
  function handleLogin(e) {
    e.preventDefault();
    axios
      .get(`http://localhost:3000/users?username=${userInfo.username}&password=${userInfo.password}`)
      .then((res) => res.data)
      .then((user) => {
        if (user.length > 0) {
          const { username, email } = user[0];
          (async () => {
            await axios.put(
              "http://localhost:3000/currentUser",
              { username: username, email: email}
            );
          })();
        } else {
          ChangeErrorMessage(
            "login",
            "Credentials don't match with any user"
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleOnChange = e => {
    console.log('e = ', e);
    setValue(value => ({ value, [e.target.name]: e.target.value }))
  };
  const { submitted, setSubmitted } = useState(false);
  const validatePassword = value => {
    if (value.length === 0) return 'Khong duoc de trong'
    return value.length < 8 ? 'Khong duoc nho hon 8 ky tu' : ''
  };
  const error = {
    password: validatePassword(value, value.password)
  };
  return (
    <div>
      <form onSubmit={handleLogin}>
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
          {submitted && error.password}
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
export default Login;
