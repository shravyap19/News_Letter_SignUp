import { useState } from "react";
import SuccessPage from "./SuccessPage";

function RegisterNewsLetter() {
  let [email, setEmail] = useState("");
  let [error, setError] = useState("");
  let [showSuccess, setShowSuccess] = useState(false);

  const validateEmail = (input) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(input);
  };
  const handleChange = (e) => {
    if (!e.target.value) {
      setEmail("");
      setError("");
    } else {
      setEmail(e.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setError("Valid email required");
    } else {
      setShowSuccess(true);
    }
  };

  if (showSuccess) {
    return <SuccessPage email={email} />;
  }
  return (
    <div className="h-screen w-full min-h-screen grid place-items-center bg-custom-gray">
      <div className="w-3/5 bg-white rounded-3xl grid grid-cols-2 gap-5">
        <div className="py-8 px-8 text-left">
          <div>
            <h1 className="title-custom">Stay Updated!</h1>
          </div>
          <div>
            <p className="text-custom">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <ul className="custom-list pl-8 pr-1">
              <li className="text-custom">
                Product discovery and building what matters
              </li>
              <li className="text-custom">
                Measuring to ensure updates are a success
              </li>
              <li className="text-custom">And much more!</li>
            </ul>
            <div className="grid grid-cols-2">
              <p className="email-custom">Email Address</p>
              <p className="error-custom">{error}</p>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="email@company.com"
                className="input-custom"
                value={email}
                onChange={handleChange}
              ></input>

              <button className="btn-custom">
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
        </div>
        <div>
          <img
            className="py-8"
            src="./illustration-sign-up-desktop.svg"
            alt="sign-Up illustration"
          />
        </div>
      </div>
    </div>
  );
}

export default RegisterNewsLetter;
