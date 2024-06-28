import CheckBox from "./components/CheckBox";

export default function LandingPage() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://www.cookers.com.au/uploads/VIC_Derrimut_Depot_1_c156dd6fb3.webp?w=1920&q=1"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Welcome to</h1>
          <h1 className="text-5xl font-bold">
            the <span className="text-blue-500">Cookers </span> Online Credit
            Application
          </h1>
          <p className="text-gray-800 fw-bold">
            Applying for a commercial credit account is easy with cookers online
            credit account application.
            <b>
              This application will take you approximately 10 minutes to
              complete
            </b>
          </p>
          <div className="divider"></div>
          <p className="text-gray-800 fw-bold">
            {" "}
            To assist us with processing your application, please ensure you
            have the following information ready
          </p>
          <ul className="fw-bold">
            <li>
              <CheckBox />
            </li>
            <li>
              <CheckBox />
            </li>
          </ul>
          <p className="text-gray-800 fw-bold mb-6">
            To start the application process, click on the <b>Get Started</b>{" "}
            button below.{" "}
          </p>
          <b>To finalise your application, you will need to:</b>
          <ul className="fw-bold">
            <li>
              <CheckBox />
            </li>
            <li>
              <CheckBox />
            </li>
            <div className="pt-7">
              <a
                className="text-gray-800 fw-bold d-flex"
                data-bs-toggle="modal"
                data-bs-target="#privacyModal_<?php echo $x ?>"
              >
                <i
                  className="bi bi-circle fs-1 pe-2"
                  id="pp_and_tc_link_<?php echo $x; ?>"
                ></i>
              </a>
            </div>
          </ul>
          <p className="fw-bold mb-6">
            Please note that by signing this application you have understood and
            agree to the Terms and Conditions provided.
          </p>
          <a href="/organization-look-up">
            <button className="btn btn-primary">Get Started</button>
          </a>
        </div>
      </div>
    </div>
  );
}
