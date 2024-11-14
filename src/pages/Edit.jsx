import { useEffect, useState } from 'react'
import MDEditor from '@uiw/react-md-editor';
import { database } from '../appwrite/appwriteConfig';
import { useNavigate, useParams, useOutletContext } from 'react-router-dom';

const Edit = () => {
    const { id } = useParams();
    const [notes, setNotes] = useState("");
    const [title, setTitle] = useState("")
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();
    const [setFetchingData] = useOutletContext();

    // Fetch existing document data when component mounts
    useEffect(() => {
        const getDocument = async () => {
            try {
                const response = await database.getDocument(
                    "64a6153ba681e8b32e3d",
                    "64a616860b18b3ad068f",
                    id
                );
                setTitle(response.title);
                setNotes(response.codeconnect); // Fix: Changed from content to codeconnect
            } catch (error) {
                console.error(error);
                alert("Failed to fetch document");
                navigate('/');
            } finally {
                setLoading(false);
            }
        };
        getDocument();
    }, [id, navigate]);

    const EditNotes = async(e) => {
        e.preventDefault();
        setLoading(true)
        try {
            await database.updateDocument(
                "64a6153ba681e8b32e3d",
                "64a616860b18b3ad068f",
                id,
                {
                    title: title,
                    codeconnect: notes // Fix: Changed from content to codeconnect
                }
            );
            setFetchingData(true); // Trigger drawer refresh
            navigate(`/${id}`);
        } catch (error) {
            console.error(error);
            alert("Failed to update document");
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div className="min-h-screen w-full flex items-center justify-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    return (
        <form onSubmit={EditNotes} className="min-h-screen w-full flex flex-col p-4 py-16 lg:py-4 gap-4">
            <h1 className="text-3xl">Edit your Code/Notes</h1>
            <div className="form-control gap-2">
                <label htmlFor="title">Title*</label>
                <input 
                type="text" 
                id='title' 
                className='input border-white bg-base-200 max-w-lg' 
                placeholder='Enter your title'
                required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                </div>
                <div className="form-control gap-2">
                    <label htmlFor="code-connect">CodeConnect*</label>
                        <MDEditor 
                            value={notes} 
                            onChange={setNotes} 
                            preview='edit'
                            height={450}
                            visibleDragbar={false}
                            id='code-connect'
                            defaultValue={notes}
                            />
                </div>
            <div className="grid grid-cols-2 max-w-xs gap-4">
                <button disabled={!notes} className={`btn btn-success ${loading ? "loading" : ""}`}>Save</button>
                <button type="button" className="btn btn-error" onClick={()=>navigate("/")}>Cancel</button>
            </div>
        </form>
    )
}

export default Edit