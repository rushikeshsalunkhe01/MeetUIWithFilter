const participants = [
    { name: 'Vaishnavii', image: '/img/woman4.png' },
    { name: '#Rushikesh', image: '/img/boy3.png' },
    { name: 'Harshad', image: '/img/boy2.png' },
    { name: 'Sumit', image: '/img/boy.png' },
    { name: 'Vishakha', image: '/img/woman3.png' },
    { name: 'Saurabh', image: '/img/boy.png' },
    { name: 'Krishna', image: '/img/boy2.png' },
    { name: 'Radha', image: '/img/woman.png' },
    { name: 'Kartiki', image: '/img/woman2.png' },
    { name: 'Sonya', image: '/img/boy.png' },
    { name: 'Atharv', image: '/img/boy2.png' },
    { name: 'Vedika', image: '/img/woman2.png' },
    { name: 'Vedanti', image: '/img/woman3.png' },
    { name: 'Siddhi', image: '/img/woman.png' },
    { name: 'Aishwarya', image: '/img/woman3.png' },
    { name: 'Tejas', image: '/img/boy.png' },
    { name: 'Ananya', image: '/img/woman2.png' },
    { name: 'Madhavi', image: '/img/woman3.png' },
    { name: 'Shubham', image: '/img/boy2.png' },
    { name: 'Tanvi', image: '/img/woman2.png' },
    { name: 'Amol', image: '/img/boy.png' },
    { name: 'Mayuri', image: '/img/woman3.png' },
    { name: 'Chaitanya', image: '/img/boy.png' },
    { name: 'Vaibhav', image: '/img/boy2.png' },
    { name: 'Rohit', image: '/img/boy.png' },
    { name: 'Neha', image: '/img/woman3.png' },
    { name: 'Prachi', image: '/img/woman.png' },
    { name: 'Priyanka', image: '/img/woman2.png' },
    { name: 'Akash', image: '/img/boy.png' },
    { name: 'Vijay', image: '/img/boy2.png' },
    { name: 'Kajal', image: '/img/woman3.png' },
    { name: 'Shweta', image: '/img/woman2.png' },
    { name: 'Tejal', image: '/img/woman.png' },
    { name: 'Pratiksha', image: '/img/woman2.png' },
    { name: 'Rupal', image: '/img/woman3.png' },
    { name: 'Komal', image: '/img/woman2.png' },
    { name: 'Nikita', image: '/img/woman3.png' },
    { name: 'Shital', image: '/img/woman.png' },
    { name: 'Mrunali', image: '/img/woman2.png' },
    { name: 'Ishwari', image: '/img/woman3.png' },
    { name: 'Nashit', image: '/img/boy.png' },
    { name: 'Samir', image: '/img/boy2.png' },
    { name: 'Pooja', image: '/img/woman3.png' },
    { name: 'Deepika', image: '/img/woman2.png' },
    { name: 'Pranali', image: '/img/woman.png' },
    { name: 'Sandeep', image: '/img/boy.png' },
    { name: 'Sahil', image: '/img/boy2.png' },
    { name: 'Radhika', image: '/img/woman2.png' },
    { name: 'Dinesh', image: '/img/boy.png' },
    { name: 'Shubhangi', image: '/img/woman3.png' },
    { name: 'Vijayalakshmi', image: '/img/woman2.png' },
    { name: 'Urmila', image: '/img/woman3.png' }
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
  