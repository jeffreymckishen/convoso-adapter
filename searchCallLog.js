
const settings = require('./settings');
async function searchCallLogs(data) {
    data.auth_token = settings.get('auth_token');
    const response = await fetch('https://api.convoso.com/v1/log/retrieve', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(data),
    });
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    const result = await response.json();
    return result;
  }
module.exports = searchCallLogs;