import "./OtpModal.css";
import { Modal } from "react-bootstrap";
import illustration from "../assets/img/bubble-gum-otp-verification.gif";
import CountdownTimer from "./shared/CountDown";

export function MyModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <div className="d-flex justify-content-center">
        <img src={illustration} height={100} width={100} alt="illustration" />
      </div>
      <div>
        <h6 className="text-center fw-bolder">Verify your phone number</h6>
        <div className="mx-3 mt-4">
          <div className="text-muted fs-12">
            <small>Enter OTP</small>
            <span className="float-end">
              <span>Resend OTP</span>
              <span className="text-primary ms-2">
                <CountdownTimer />
              </span>
            </span>
          </div>
          <div className="d-flex justify-content-between mt-4">
            {[0, 1, 2, 3, 4, 5].map((obj) => (
              <input key={obj} className="optInput" />
            ))}
          </div>
          <button
            disabled
            style={{ height: "40px" }}
            className="btn btn-primary mt-4 w-100"
          >
            Proceed
          </button>
        </div>
      </div>
      <div className="text-center mt-3 border-top">
        <div className="mt-2" style={{ fontSize: "11px" }}>
          By continuing, you agreeing to our <u>Terms of service</u> and{" "}
          <u>Privacy policy</u>
        </div>
      </div>
    </Modal>
  );
}
