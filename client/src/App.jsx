import { useState } from 'react'
import './App.css'

function App() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === 'image/jpeg') {
      setFile(selectedFile);
    } else {
      alert('Please select a JPG file.');
      setFile(null);
    }
  };
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="background-image">
      <div className="flex w-screen h-screen items-center justify-center flex-col">
        <h2 className="my-10 text-xl ">ALzhiermer's Test using AI</h2>
        <div className="card w-96 bg-base-100 shadow-xl image-full transition-transform duration-3000 ease-in">
          <figure><img src="./card.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Enter your file</h2>
            <input
              type="file"
              className="file-input file-input-bordered file-input-success w-full max-w-xs"
              onChange={handleFileChange}
            />
            <div className="card-actions justify-end">
              <button className="btn btn-success">Success</button>
            </div>
          </div>
        </div>

       
       { result && <div className="stats bg-primary text-primary-content mt-10">
          <div className="stat">
            <div className="stat-title">Conidence</div>
            <div className="stat-value">$89,400</div>
            <div className="stat-actions">
              <button className="btn btn-sm btn-success" onclick={handleRefresh}>Recheck</button>
            </div>
          </div>

          <div className="stat">
            <div className="stat-title">Class</div>
            <div className="stat-value">$89,400</div>
            <div className="stat-actions">
            </div>
          </div>

        </div>}
      </div>
    </div>
  )
}

export default App;
