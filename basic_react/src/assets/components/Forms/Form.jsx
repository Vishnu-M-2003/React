import { useState } from "react";

export default function Form() {
  // Defining the obj thats store the format
  let userObject = {
    fullName: "",
    lastName: "",
    password: "",
  };

  let [userData, setUserData] = useState(userObject);

  let changeData = (event) => {
    let inputName = event.target.name;
    let inputValue = event.target.value;

    setUserData((currData) => {
      currData[inputName] = inputValue;
      return { ...currData };
    });
  };

  let changeSubmited = (event) => {
    event.preventDefault();
    console.log(userData);
    setUserData(userObject);
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Enter your FullName"
          value={userData.fullName}
          onChange={changeData}
          name="fullName"
        ></input>

        <input
          type="text"
          placeholder="Enter your LastName"
          value={userData.lastName}
          onChange={changeData}
          name="lastName"
        ></input>

        <input
          type="text"
          placeholder="Enter your password"
          value={userData.password}
          onChange={changeData}
          name="password"
        ></input>
        <button onClick={changeSubmited}>Submit</button>
      </form>
    </>
  );
}
