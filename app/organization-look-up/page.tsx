export default function OrgLookUp() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Do you have an ABN/ACN?</h1>
          <h1 className="text-5xl font-bold">
            If Yes,{" "}
            <span className="text-blue-500">Start Credit Application</span>
          </h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">ABN/ACN</span>
              </label>
              <input
                type="text"
                placeholder="Enter ABN/ACN"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <a href="/application">
                <button className="btn btn-primary">Search</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
