import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    messages: [],
    userInput: '',
  };

  handleUserInput = (event) => {
    this.setState({ userInput: event.target.value });
  };

  handleSendMessage = () => {
    const { userInput, messages } = this.state;
    if (userInput) {
      messages.push({ text: userInput, sender: 'user' });
      this.setState({ messages, userInput: '' });

      // Simulate a bot response (replace with actual AI logic)
      setTimeout(() => {
        const botResponse = 'This is a bot response.';
        messages.push({ text: botResponse, sender: 'bot' });
        this.setState({ messages });
      }, 1000);
    }
  };

  handleUploadPDF = (event) => {
    const file = event.target.files[0];

    if (file) {
      // You can handle the uploaded PDF here, e.g., by displaying its name or processing it
      const fileName = file.name;
      const messages = [...this.state.messages, { text: `Uploaded PDF: ${fileName}`, sender: 'user' }];
      this.setState({ messages });

      // Simulate a bot response (replace with actual AI logic)
      setTimeout(() => {
        const botResponse = 'This is a bot response.';
        messages.push({ text: botResponse, sender: 'bot' });
        this.setState({ messages });
      }, 1000);
    }
  };

  renderMessages = () => {
    return this.state.messages.map((message, index) => (
      <div key={index} className={`message ${message.sender}`}>
        {message.text}
      </div>
    ));
  };

  render() {
    return (
      <div className = "App">
        {
      <div className="chat-container">
        <div className="chat-header">ChatGPT Bot</div>
        <div className="chat-messages">{this.renderMessages()}</div>
        <div className="chat-input">
          <input
            type="text"
            value={this.state.userInput}
            onChange={this.handleUserInput}
            placeholder="Type a message..."
          />
          <button onClick={this.handleSendMessage}>Send</button>

          {/* Add the "Upload PDF" button */}
          <input
            type="file"
            accept=".pdf"
            id="pdf-upload"
            style={{ display: 'none' }}
            onChange={this.handleUploadPDF}
          />
          <label htmlFor="pdf-upload">
            <button className="upload-button">Upload PDF</button>
          </label>
        </div>
      </div>
       }   
      </div>
    );
  }
}

export default App;