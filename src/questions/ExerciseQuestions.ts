export const ExerciseQuestions = [
  {
    // a slider question should look like this
    question: "Select your desired difficulty:",
    id: 1,
    choices: [
      {
        text: "beginner",
        img: "https://s3-us-west-1.amazonaws.com/contentlab.studiod/getty/31a4debc7443411195df509e38a5f9a3.jpg",
        val: "low",
        key: 100,
      },
      {
        text: "intermediate",
        img: "https://s3-us-west-1.amazonaws.com/contentlab.studiod/getty/31a4debc7443411195df509e38a5f9a3.jpg",
        val: "medium",
        key: 101,
      },
      {
        text: "advanced",
        img: "https://s3-us-west-1.amazonaws.com/contentlab.studiod/getty/31a4debc7443411195df509e38a5f9a3.jpg",
        val: "high",
        key: 102,
      },
    ]
  },
  {
    // a slider question should look like this
    question: "Select your current heart rate (or estimate an average resting heart rate at around 70)",
    id: 2,
    key: 103,
  },
  {
    // a slider question should look like this
    question: "How long would you like your workout to be (in minutes)?",
    id: 3,
    key: 104,
  },
  {
    question: "Create playlist based on my liked songs (of any genre)",
    id: 4,
    choices: [
      {
        text: "yes",
        img: "https://s3-us-west-1.amazonaws.com/contentlab.studiod/getty/31a4debc7443411195df509e38a5f9a3.jpg",
        val: "true",
        key: 105
      },
      {
        text: "no",
        img: "https://s3-us-west-1.amazonaws.com/contentlab.studiod/getty/31a4debc7443411195df509e38a5f9a3.jpg",
        val: "false",
        key: 106
      },
    ]
  }
];
