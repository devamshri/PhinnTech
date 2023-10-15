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

  handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (file && file.type === 'application/pdf') {
      // You can handle the PDF file here, e.g., send it to an API or perform other actions.
      console.log('Selected PDF file:', file);
    } else {
      console.error('Please select a valid PDF file.');
    }
  }

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
          className="upload-button"
          type="file"
          accept=".pdf"
          onChange={this.handleFileUpload}
        />
        </div>
      </div>
       }   
      </div>
    );
  }
}

export default App;
