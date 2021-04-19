export default () => {
  return (
    <form>
      <h1>Sign Up</h1>
      <div clsssName="form-group">
        <label>Email Address</label>
        <input className="form-control" />
      </div>
      <div clsssName="form-group">
        <label>Password</label>
        <input type="password" className="form-control" />
      </div>
      <button className="btn btn-primary">Sign Up</button>
    </form>
  );
};