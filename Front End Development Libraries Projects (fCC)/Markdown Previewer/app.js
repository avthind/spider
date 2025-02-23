const { useState, useEffect } = React;

const defaultMarkdown = `# Welcome to Markdown Previewer!
## This is a sub-heading
[Click here for React Docs](https://reactjs.org)

\`inline code\`

\`\`\`
function helloWorld() {
    console.log("Hello, world!");
}
\`\`\`

- List item 1
- List item 2

> Blockquote example

**Bold text example**

![Markdown Logo](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg)
`;

function App() {
    const [markdown, setMarkdown] = useState(defaultMarkdown);

    useEffect(() => {
        marked.setOptions({
            breaks: true // Enables line breaks
        });
    }, []);

    return (
        <div className="container mt-4">
            <h1 className="text-center">Markdown Previewer</h1>
            <div className="mb-3">
                <h4>Editor</h4>
                <textarea 
                    id="editor" 
                    className="form-control" 
                    value={markdown} 
                    onChange={(e) => setMarkdown(e.target.value)} 
                />
            </div>
            <div className="mb-3">
                <h4>Preview</h4>
                <div 
                    id="preview" 
                    className="border p-3" 
                    dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }}
                />
            </div>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
