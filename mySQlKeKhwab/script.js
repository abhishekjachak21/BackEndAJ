document.getElementById('dataForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const age = formData.get('age');
  
    try {
      const response = await fetch('/insert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, age })
      });
      
      if (!response.ok) {
        throw new Error('Failed to insert data');
      }
  
      const data = await response.json();
      document.getElementById('message').textContent = data.message;
    } catch (error) {
      console.error('Error:', error);
      document.getElementById('message').textContent = 'An error occurred.';
    }
  });
  