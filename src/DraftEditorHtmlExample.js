import React from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';

class DraftEditorHtmlExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = { editorState: EditorState.createEmpty() };
        this.onChange = (editorState) => {
            this.setState({
                editorState,
                editorContentHtml: stateToHTML(editorState.getCurrentContent())
            });
        };
    }

    handleKeyCommand(command) {
        const { editorState } = this.state;
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return true;
        }
        return false;
    }

    render() {
        return (
            <div>
                <h4>Draft js editor</h4>
                <div className="editor-container">
                    <Editor
                        handleKeyCommand={this.handleKeyCommand.bind(this)}
                        editorState={this.state.editorState}
                        onChange={this.onChange}
                    />
                </div>
                <h4>Editor content as HTML</h4>
                <pre>
                    {this.state.editorContentHtml}
                </pre>
            </div>
        );
    }
}

export default DraftEditorHtmlExample;
