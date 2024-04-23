import { useState } from "react";
import RegisterNewsLetter from "./RegistrationPage";
import PropTypes from "prop-types";

function SuccessPage({ email }) {
  let [isDissmissed, setIsDissmissed] = useState(false);
  let handleDissmiss = () => {
    setIsDissmissed(true);
  };

  if (isDissmissed) {
    return <RegisterNewsLetter />;
  }
  SuccessPage.propTypes = {
    email: PropTypes.string.isRequired,
  };
  return (
    <div className="h-screen w-full grid place-items-center bg-custom-gray">
      <div className="w-96 bg-white rounded-3xl p-8 w-min">
        <img
          className="pl-5 w-16 h-16"
          src="./icon-success.svg"
          alt="Success tick mark"
        />
        <p className="success-subscription-title-custom">
          Thanks for subscribing!
        </p>
        <p className="success-subscription-approval-text-custom">
          A confirmation email has been sent to <strong>{email}</strong>. Please
          open it and click the button inside it to confirm your subscription.
        </p>
        <button className="dissmiss-btn" onClick={handleDissmiss}>
          Dissmiss message
        </button>
      </div>
    </div>
  );
}

export default SuccessPage;
