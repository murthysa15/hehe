const poemStanzas = [
  "A Love Unexpected\nWithout expression, even the greatest of love can die...",

  "It was my birthday, and exams were near,\nNever thought a surprise like you would appear.\nJust a friend, I thought at first glance,\nBut fate had planned a sweet romance.",

  "Who knew a giggle, so pure and bright,\nWould make my dullest days feel light.\nFrom laughter shared and chats so long,\nWe wrote together a love so strong.",

  "Having you near, the days just flew,\nLife felt better just being with you.\nYou feared attachments, expectations too,\nBut I whispered softly, “I’ll stay with you.”",

  "From Uncle once, to Cheeku now,\nYour flirty smiles—oh, they still wow!\nOur love, once hidden, undefined,\nNow beats in sync, your heart and mine.",

  "Never thought I’d fall so deep,\nBut now your dreams invade my sleep.\nThe nights you fear to sleep, so cold, so lone,\nHow could I let you wake up alone?\nWhen I say I’m with you, it’s not just a theme—\nI’ll fight beside you through every scary dream.\nMe being with you isn’t just spoken or shown,\nIt’s my forever, my truth, my love to be known.",

  "You feared a lie might break us apart,\nBut I can’t breathe without your heart.",

  "You struggled to say the words out loud,\nSo you wrote your love—I was so proud.\nThat night we rhymed, our hearts in sync,\nLines of love, more than ink.",

  "You said:\nYou're my moon, you're my shine,\nWith you, me and my heart’s on cloud nine.❤️",

  "I replied, like a silly mime:\nIt’s good to know that you are mine.❤️",

  "Then you wrote:\nWith you, everything feels fine...❤️",

  "And I smiled:\nBecause being with you is simply divine❤️.",

  "From rhymes to hugs, from giggles to cries,\nYou're my forever, under all skies.\nNo more days without your “Hi,”\nYou are my reason, my why, my sky.",

  "So my cutu, hear this true—\nI’m always here, just for you.\nForever and ever, through all we do,\nMy heart, my soul… belongs to you.",

  "i LOVE YOU ❤️\n – To My Cutu Baccha ❤️🌏"
];

let index = 0;
const poemContainer = document.getElementById("poem");
const nextBtn = document.getElementById("next-btn");

function showStanza() {
  if (index < poemStanzas.length) {
    // Create a div for each stanza with transition effect
    const stanza = document.createElement("div");
    stanza.classList.add("stanza");
    stanza.textContent = poemStanzas[index];
    poemContainer.innerHTML = ""; // Clear previous content
    poemContainer.appendChild(stanza);
    
    // Fade-in transition for each stanza
    stanza.style.opacity = 0;
    setTimeout(() => {
      stanza.style.transition = "opacity 2s";
      stanza.style.opacity = 1;
    }, 50);

    index++;

    // Disable the button until the stanza transition is complete
    nextBtn.disabled = true;
    setTimeout(() => {
      nextBtn.disabled = false; // Enable button after transition
    }, 2500);
  } else {
    // Hide the "Next" button after the last stanza
    nextBtn.style.display = "none";
  }
}

// Next button click listener to load the next stanza
nextBtn.addEventListener("click", () => {
  showStanza();
});

// Initialize the first stanza
showStanza();
