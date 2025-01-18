document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('queryInput');
    const historyList = document.getElementById('historyList');
    const buttons = document.querySelectorAll('.action-button');
  
    // Add click event to each button with specific actions
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const query = inputField.value.trim();
        if (query) {
          // Append to history
          const newItem = document.createElement('li');
          newItem.textContent = `${button.textContent}: ${query}`;
          newItem.classList.add('history-item');
          newItem.dataset.query = query;
  
          // Add click event to the new history item
          newItem.addEventListener('click', () => {
            inputField.value = newItem.dataset.query;
            alert(`Retrying query: ${newItem.dataset.query}`);
          });
  
          // Open a URL based on which button was clicked
          let url;
          switch (button.textContent) {
            case 'Ants':
              url = `http://ants.inet.telenet.be/tools/modems/modemtest#modem=${query}`;
              break;
            case 'Ping':
              url = `http://ants.inet.telenet.be/tools/nodes/livenodeping#node-input=${query}`;
              break;
            case 'SPOT':
              url = `https://spot.prd.apps.telenet.be/care/customer/${query}`;
              break;
            case 'Node':
              url = `https://spot.prd.apps.telenet.be/care/network/${query}`;
              break;
            default:
              console.error('Unknown button clicked');
          }
  
          // Open the constructed URL in a new tab
          if (url) {
            window.open(url, '_blank');
          }
        }
      });
    });
  });
  