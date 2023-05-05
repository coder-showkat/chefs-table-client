import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../providers/AuthProvider";

const Profile = () => {
  const { user, updateProfileInfo } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [readOnly, setReadOnly] = useState(true);

  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName);
      setPhotoURL(user.photoURL);
    }
  }, [user]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const result = await updateProfileInfo(displayName, photoURL);
    if (result.success) {
      toast.success(result.message);
      setReadOnly(true);
    } else toast.error(result.message);
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center space-y-2 bg-white/10 rounded p-6">
          <img
            src={user.photoURL}
            alt={user.displayName}
            className="w-24 aspect-square object-cover rounded-full mx-auto mb-2"
          />
          <h2 className="text-2xl font-semibold">{user.displayName}</h2>
          <p>Email: {user.email ? user.email : "N/A"}</p>
          <p>Email Verified: {user.emailVerified ? "verified" : "N/A"}</p>
        </div>
        <form
          onSubmit={handleUpdate}
          className="md:col-span-2 space-y-4 bg-white/10 p-6"
        >
          <h2 className="text-2xl font-playfair mb-2">Profile</h2>
          <div className="form-control">
            <label className="label" htmlFor="fullName">
              <span className="label-text font-bold">Full Name</span>
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Full Name"
              className="input"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              readOnly={readOnly}
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="photoUrl">
              <span className="label-text font-bold">Photo URL</span>
            </label>
            <input
              type="text"
              id="photoUrl"
              placeholder="Photo URL"
              className="input"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              readOnly={readOnly}
            />
          </div>
          <div className="form-control">
            {readOnly ? (
              <div
                type="button"
                onClick={() => setReadOnly(false)}
                className="btn btn-outline px-8 w-fit ml-auto mt-4"
              >
                Edit
              </div>
            ) : (
              <button
                type="submit"
                className="btn btn-outline px-8 w-fit ml-auto mt-4"
              >
                Update
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
