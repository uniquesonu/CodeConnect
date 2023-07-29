import React, { useEffect, useState } from 'react';
import { MdLogout, MdMenu } from 'react-icons/md';
import { FaPlus } from 'react-icons/fa';
import { account, database } from '../appwrite/appwriteConfig';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Drawer({ children }) {
  const [notesTitle, setNotesTitle] = useState([]);
  const [loading, setLoading] = useState(true); // Added missing useState for 'loading'
  const navigate = useNavigate();
  const fetchingData = true; // You can initialize fetchingData with 'true' or 'false' depending on your use case

  const getCurrUser = () => {
    // You need to implement this function or import it from a module
    // It should return the current user
    // For now, I'll assume it returns a user object with an 'id' property
    return { id: 'user_id_here' };
  };

  const fetchNotesData = async () => {
    try {
      const user = await getCurrUser();
      const res = await database.listDocuments(
        "64a6153ba681e8b32e3d",
        "64a616860b18b3ad068f",
        [Query.equal("owner", user.id)] // Changed 'user' to 'user.id' since Query expects a string
      );
      setNotesTitle(res.documents);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotesData();
  }, [navigate, fetchingData]); // Added 'navigate' and 'fetchingData' to the dependency array

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", selectedTheme);
  }, [selectedTheme]); 

  const logout = () => {
    const user = account.get();
    const promise = account.deleteSession('current');
    promise
      .then(() => {
        navigate('/landing');
      })
      .catch(err => {
        alert(err);
      });
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {children}
        <label htmlFor="my-drawer-2" className="absolute top-2 left-2 btn btn-ghost rounded-full drawer-button lg:hidden">
          <MdMenu size={32} />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 gap-4 h-full bg-base-200 text-base-content">
          {/* Create Button */}
          <Link to={"/create"} className="btn btn-primary">
            <FaPlus size={18} />
            <span>Create</span>
          </Link>
          <hr />

          {/* Lists of data */}
          <div className="flex-1 flex flex-col gap-4 overflow-y-auto pr-4">
            {loading ? (
              <div className="flex self-center">Loading...</div>
            ) : (
              notesTitle.map(title => (
                <li key={title.$id} className="bg-base-100 rounded-lg">
                  <Link to={"/" + title.$id}>{title.title}</Link>
                </li>
              ))
            )}
          </div>

          {/* Logout button */}
          <button onClick={logout} className="btn btn-error mt-auto">
            <MdLogout size={24} />
            <span>Logout</span>
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Drawer;
