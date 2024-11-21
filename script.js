const participants = [
  { name: 'Vaishnavii', image: 'woman4.png' },
    { name: '#Rushikesh Salunkhe', image: 'boy3.png' },
    { name: 'Harshad', image: 'boy2.png' },
    { name: 'Sumit', image: 'boy.png' },
    { name: 'Vishakha', image: 'woman3.png' },
    { name: 'Saurabh', image: 'boy.png' },
    { name: 'Krishna', image: 'boy2.png' },
    { name: 'Radha', image: 'woman.png' },
    { name: 'Kartiki', image: 'woman2.png' },
    { name: 'Sonya', image: 'boy.png' },
    { name: 'Atharv', image: 'boy2.png' },
    { name: 'Vedika', image: 'woman2.png' },
    { name: 'Vedanti', image: 'woman3.png' },
    { name: 'Siddhi', image: 'woman.png' },
    { name: 'Aishwarya', image: 'woman3.png' },
    { name: 'Tejas', image: 'boy.png' },
    { name: 'Ananya', image: 'woman2.png' },
    { name: 'Madhavi', image: 'woman3.png' },
    { name: 'Shubham', image: 'boy2.png' },
    { name: 'Tanvi', image: 'woman2.png' },
    { name: 'Amol', image: 'boy.png' },
    { name: 'Mayuri', image: 'woman3.png' },
    { name: 'Chaitanya', image: 'boy.png' },
    { name: 'Vaibhav', image: 'boy2.png' },
    { name: 'Rohit', image: 'boy.png' },
    { name: 'Neha', image: 'woman3.png' },
    { name: 'Prachi', image: 'woman.png' },
    { name: 'Priyanka', image: 'woman2.png' },
    { name: 'Akash', image: 'boy.png' },
    { name: 'Vijay', image: 'boy2.png' },
    { name: 'Kajal', image: 'woman3.png' },
    { name: 'Shweta', image: 'woman2.png' },
    { name: 'Tejal', image: 'woman.png' },
    { name: 'Pratiksha', image: 'woman2.png' },
    { name: 'Rupal', image: 'woman3.png' },
    { name: 'Komal', image: 'woman2.png' },
    { name: 'Nikita', image: 'woman3.png' },
    { name: 'Shital', image: 'woman.png' },
    { name: 'Mrunali', image: 'woman2.png' },
    { name: 'Ishwari', image: 'woman3.png' },
    { name: 'Nashit', image: 'boy.png' },
    { name: 'Samir', image: 'boy2.png' },
    { name: 'Pooja', image: 'woman3.png' },
    { name: 'Deepika', image: 'woman2.png' },
    { name: 'Pranali', image: 'woman.png' },
    { name: 'Sandeep', image: 'boy.png' },
    { name: 'Sahil', image: 'boy2.png' },
    { name: 'Radhika', image: 'woman2.png' },
    { name: 'Dinesh', image: 'boy.png' },
    { name: 'Shubhangi', image: 'woman3.png' },
    { name: 'Vijayalakshmi', image: 'woman2.png' },
    { name: 'Urmila', image: 'woman3.png' }
  ];
  
  const participantsContainer = document.getElementById('participants-container');
  
  function displayParticipants(participantList) {
    participantsContainer.innerHTML = '';
    participantList.forEach((participant) => {
      participantsContainer.innerHTML += `
        <div class='participant-card'>
          <img src="${participant.image}" alt="${participant.name}">
          <span>${participant.name}</span>
        </div>
      `;
    });
  }
  
  displayParticipants(participants);
  
  function filterParticipants() {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const filteredParticipants = participants.filter(participant => 
      participant.name.toLowerCase().includes(searchQuery)
    );
    displayParticipants(filteredParticipants);
  }
  