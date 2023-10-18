import { Link, useNavigate } from "react-router-dom";
import b1 from "../../assets/Beauty-Products.jpg";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  const { loginUser, setLoading, loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate("/profile");
        setLoading(false);
      })
      .catch((error) => {
        toast.error(
          error?.code?.split("/")[1]?.replaceAll("-", " ")?.toUpperCase()
        );
      });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then(() => {
        e.target.reset();
        toast.success("Successfully logged in");
        navigate("/profile");
        setLoading(false);
      })
      .catch((error) => {
        toast.error(
          error?.code?.split("/")[1]?.replaceAll("-", " ")?.toUpperCase()
        );
        setLoading(false);
      });
  };
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url("${b1}")` }}
    >
      <div className="hero min-h-screen bg-black text-white bg-opacity-80">
        <div className="gap-20 hero-content flex-col lg:flex-row-reverse w-full h-full">
          <div className="flex justify-center items-center w-full lg:w-1/2  text-center lg:text-left">
            <h1 className="text-5xl font-bold font-serif text-[#a294cd]">
              Login now!
            </h1>
          </div>
          <div className="card w-full lg:w-1/2 shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body text-black">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>
              <div className="flex sm:flex-row flex-col gap-5 form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="bg-[#a294cd] border-[#a294cd] hover:bg-[#a294cd] hover:border-[#a294cd] btn flex-1 text-[#ffe5de]"
                />
                <Link
                  to="/register"
                  className="flex-1 text-[#a294cd] btn-outline border-[#a294cd] btn hover:bg-[#a294cd] hover:border-white"
                >
                  {" "}
                  Create Account?{" "}
                </Link>
              </div>
              <div className="flex flex-col justify-center items-center py-5">
                <p className="text-lg font-semibold">Log in with </p>
                <button className="btn px-6 h-16" onClick={handleGoogleLogin}>
                  {" "}
                  <FcGoogle className="text-5xl"></FcGoogle>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
