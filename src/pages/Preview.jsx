import { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import { database, getCurrUser } from "../appwrite/appwriteConfig";
import MDEditor from "@uiw/react-md-editor";
import { FaLink } from "react-icons/fa";

const NotesPrev = () => {
  const [notes, setNotes] = useState({});
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  const deleteNotes = () => {
    const isConfirm = window.confirm("Are you sure you want to delete?");
    if (!isConfirm) return;
    const promise = database.deleteDocument(
      "64a6153ba681e8b32e3d",
      "64a616860b18b3ad068f",
      id
    );
    promise
      .then(() => {
        alert("Your document deleted successfully");
        navigate("/");
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    const promise = database.getDocument(
      "64a6153ba681e8b32e3d",
      "64a616860b18b3ad068f",
      id
    );
    promise
      .then((response) => {
        setNotes(response);
      })
      .catch(() => {
        alert("Unable to find that document");
        navigate("/");
      });

    getCurrUser()
      .then((userId) => {
        setUser(userId);
      })
      .catch(() => {
        setUser(null);
      });
  }, [id, navigate]);
  return (
    <div className="min-h-screen w-full flex flex-col p-4 py-16 lg:py-4 gap-4">
      <h1 className="text-3xl flex gap-2 items-end">
        <span>{notes.title}</span>
        {user && ( // Show the "Copy Link" button only when the user is logged in
          <button
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              alert("Link copied to your clipboard");
            }}
            className="btn btn-ghost rounded-full btn-sm"
          >
            <FaLink />
          </button>
        )}
      </h1>
      <div className="div flex-1 bg-base-200 p-4 rounded-md ">
        <MDEditor.Markdown
          source={notes.codeconnect}
          style={{ background: "transparent", fontSize: "24px" }}
        />
      </div>
      {/*       {user && ( // Show the "Edit" and "Delete" buttons only when the user is logged in
        <div className="grid grid-cols-2 max-w-xs gap-4">
          <Link to={"/edit/" + id} className={`btn btn-warning`}>
            Edit
          </Link>
          <button onClick={deleteNotes} className="btn btn-error">
            Delete
          </button>
        </div>
      )} */}
      {/*       create your own notes button */}
      <button className="btn btn-warning w-fit" onClick={() => navigate("/")}>
        Create your own notes
      </button>
    </div>
  );
};

export default NotesPrev;
