import React, {useState} from 'react';
import marked from "marked";
import './App.css';
import ReactMarkdown from "react-markdown";

function App() {
    const [markdown, setMarkdown] = useState('# suppppp');

    function getOnChange(e) {
        setMarkdown(e.target.value);
    }

    return (
        <div className="App">
            <textarea
                onChange={getOnChange}
                value={markdown}
            />

           <ReactMarkdown className="preview" source={markdown}/>
        </div>
    );
}

export default App;
