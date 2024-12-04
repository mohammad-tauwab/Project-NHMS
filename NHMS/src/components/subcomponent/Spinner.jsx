function Spinner() {
  return (
    <center className="spinner">
      <div
        className="spinner-border text-primary"
        style={{ height: "80px", width: "80px" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <div
        className="spinner-border text-secondary"
        role="status"
        style={{ height: "80px", width: "80px" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <div
        className="spinner-border text-success"
        role="status"
        style={{ height: "80px", width: "80px" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <div
        className="spinner-border text-danger"
        role="status"
        style={{ height: "80px", width: "80px" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <div
        className="spinner-border text-warning"
        role="status"
        style={{ height: "80px", width: "80px" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <div
        className="spinner-border text-info"
        role="status"
        style={{ height: "80px", width: "80px" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <div
        className="spinner-border text-dark"
        role="status"
        style={{ height: "80px", width: "80px" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </center>
  );
}
export default Spinner;
