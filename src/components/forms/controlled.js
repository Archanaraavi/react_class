// import React from "react";
// import { useState } from "react";

// function ControlledForm() {
//     const[username,setUsername]=useState("")
//     const[password,setPassword]=useState("")
//     const[gender,setGender]=useState("male")


//     const[formErrors,setformErrors]=useState({
//         usernameError:null,
//         passwordError:null,
//         genderError:null
//     })

// //     const [userinfo,setUserinfo]=useState({
// //     username:"",
// //     password:"",
// //     gender:""
// // })

// const userNameHandler=(event)=>{
//     const userEnteredUsername=event.target.value
//     console.log("userEnteredUsername",userEnteredUsername);
//     setUsername(userEnteredUsername)

//     //validation for username
//     const usernameRegex=/[a-z]/
//     const testcase=usernameRegex.test(userEnteredUsername);
//     if(testcase){
//      //allow user to hit the server
//      console.log("username test passed");
//      setformErrors({...formErrors,usernameError:null})
//     }else{
//         //doesn't allow the user to hit the server
//         console.log("username test failed");
//         setformErrors({...formErrors,usernameError:"invalide username"})
//     }
// }


// const passwordHandler=(event)=>{
//     const userEnteredpassword=event.target.value
//     console.log("userEnteredpassword",userEnteredpassword);
//     setPassword(userEnteredpassword)
//    const testcasepassed=userEnteredpassword.length <=10? true : false;
//    if(testcasepassed){
//     console.log("password test pass");
//      setformErrors({...formErrors,passwordErrorError:null})
//    }else{
//      console.log("password test failed");
//         setformErrors({...formErrors,passwordErrorError:"invalide password"})
//    }
// }
// const genderHandler=(event)=>{
//     const userEnteredgender=event.target.value
//     console.log("userEnteredgender",userEnteredgender);
//     setGender(userEnteredgender)
// }

  
//     const handleSubmit=(event)=>{
//       event.preventDefault()
//       //hit the server with user enter data
//       clintpostserver();
//     }


//         //  username: 'emilys',
//         //   password: 'emilyspass',
//     const clintpostserver=()=>{
//       fetch('https://dummyjson.com/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
          
//           username: 'username',
//           password: 'password',
//           expiresInMins: 30, // optional, defaults to 60
//         })
//       })
//       .then(res => res.json())
//       .then((response)=>{
//         console.log(response, "api response");
//       });
//     }
    


//     return(

//        <form onSubmit={handleSubmit}>
//           <div className="mb-3 mt-3">
//             <label htmlFor="username" className="form-label">
//             username:
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="username"
//               placeholder="Enter username"
//               name="username"
//             value={username}
//             onChange={userNameHandler}
//             />
//             {formErrors.usernameError && (
//               <span style={{color:"red"}}>username invalid</span>
//               )}
//           </div>
//           <div className="mb-3">
//             <label htmlFor="pwd" className="form-label">
//               Password:
//             </label>
//             <input
//               type="password"
//               className="form-control"
//               id="pwd"
//               placeholder="Enter password"
//               name="pswd"
//                value={password}
//                onChange={passwordHandler}
//             />
//              {formErrors.passwordErrorError && (
//               <span style={{color:"red"}}>password invalid</span>
//               )}
//           </div>
//           <select value={gender}  onChange={genderHandler}>
//             <option option="Male">Male</option>
//             <option option="Female">Female</option>
//           </select>
//           {/* {error && <span style={{ color: "red" }}>Invalid credentials</span>} */}
         
         
//          {
//           !formErrors.usernameError && !formErrors.passwordError && (
//           <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//          )}
//           {
//           loginsucess && <h2>wellcome user</h2>
//           }
          
//         </form>
         
        
// )
// }
// export default ControlledForm











import React, { useState } from "react";
import "./styles.css"; // Import the CSS file

function ControlledComponents() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("Male");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const [formErrors, setFormErrors] = useState({
    usernameError: null,
    passwordError: null,
    genderError: null,
  });

  const userNameHandler = (event) => {
    const userEnteredUsername = event.target.value;
    setUsername(userEnteredUsername);

    // Validation for username
    const usernameRegex = /^[a-z]/;
    const testCasePassed = usernameRegex.test(userEnteredUsername);

    if (testCasePassed) {
      setFormErrors({ ...formErrors, usernameError: null });
    } else {
      setFormErrors({
        ...formErrors,
        usernameError:
          "Username must be at least 3 characters long and contain only letters and numbers",
      });
    }
  };

  const passwordHandler = (event) => {
    const userEnteredPassword = event.target.value;
    setPassword(userEnteredPassword);

    const testCasePassed = userEnteredPassword.length <= 10;
    if (testCasePassed) {
      setFormErrors({ ...formErrors, passwordError: null });
    } else {
      setFormErrors({
        ...formErrors,
        passwordError: "Password must be 10 characters or less",
      });
    }
  };

  const genderHandler = (event) => {
    const userEnteredGender = event.target.value;
    setGender(userEnteredGender);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    clientPostServer();
  };

  const clientPostServer = () => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
        expiresInMins: 30, // optional, defaults to 60
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.message) {
          setLoginSuccess(false);
        } else {
          setLoginSuccess(true);
        }
      });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label htmlFor="username" className="form-label">
          Username:
        </label>
        <input
          type="text"
          className={`form-control ${
            formErrors.usernameError ? "is-invalid" : ""
          }`}
          id="username"
          placeholder="Enter username"
          name="username"
          value={username}
          onChange={userNameHandler}
        />
        {formErrors.usernameError && (
          <div className="invalid-feedback">{formErrors.usernameError}</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="pwd" className="form-label">
          Password:
        </label>
        <input
          type="password"
          className={`form-control ${
            formErrors.passwordError ? "is-invalid" : ""
          }`}
          id="pwd"
          placeholder="Enter password"
          name="pswd"
          value={password}
          onChange={passwordHandler}
        />
        {formErrors.passwordError && (
          <div className="invalid-feedback">{formErrors.passwordError}</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="gender" className="form-label">
          Gender:
        </label>
        <select
          value={gender}
          onChange={genderHandler}
          className="form-control"
          id="gender"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      {!formErrors.usernameError && !formErrors.passwordError && (
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      )}
      {loginSuccess && <h2 className="success-message">Welcome user</h2>}
    </form>
  );
}

export default ControlledComponents;