function generateRandomQuestion() {
    var questions = [
      "How do you approach problem-solving and decision-making?",
      "What activities or hobbies energize you the most?",
      "How do you handle unexpected changes or disruptions to your plans?",
      "How do you like to express your creativity?",
      "What are some ways you connect with others on a deeper level?",
      "What are your greatest strengths and how do they impact your life?",
      "How do you navigate conflicts or disagreements?",
      "What role does personal growth and self-improvement play in your life?",
      "What inspires and motivates you?",
      "How do you find balance between your alone time and social interactions?"
    ];
  
    var randomIndex = Math.floor(Math.random() * questions.length);
    var randomQuestion = questions[randomIndex];
  
    document.getElementById("question").textContent = randomQuestion;
  }
  
  document.getElementById("generate-btn").addEventListener("click", generateRandomQuestion);
  