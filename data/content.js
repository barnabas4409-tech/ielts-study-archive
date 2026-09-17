// Edit this file to add or update study material. The UI is generated from this data.
window.IELTS_CONTENT = {
  profile: {
    title: "My IELTS Study Archive",
    subtitle: "A quiet place to collect answers, review weak points, and build toward Band 7.0.",
    targetBand: "7.0",
  },

  navigation: [
    { route: "home", label: "Home", icon: "home" },
    { route: "speaking", label: "Speaking", icon: "speaking" },
    { route: "writing", label: "Writing", icon: "writing" },
    { route: "reading", label: "Reading", icon: "reading" },
    { route: "listening", label: "Listening", icon: "listening" },
    { route: "expressions", label: "Expressions", icon: "expressions" },
    { route: "pronunciation", label: "Pronunciation", icon: "pronunciation" },
  ],

  speaking: {
    title: "Speaking",
    description: "Finalized Part 1 answers to revisit and practise aloud.",
    answers: [
      {
        question: "Talk about your family.",
        answer: "I’m married and I have three children. My oldest is a four-year-old daughter, and the other two are twins who were born a few months ago. So I’m pretty exhausted these days, but at the same time, I’m really happy.",
      },
      {
        question: "Talk about where you live.",
        answer: "I live in Ansan, which is my hometown. It’s also my wife’s hometown, and our three children were born here as well. So I have a lot of memories here, and I feel really attached to the city.",
      },
      {
        question: "Are you a student or do you work?",
        answer: "I work as a pastor at a church. I work six days a week, so Monday is my only day off — unfortunately! But yeah, I really enjoy what I do because I get to meet and help a lot of people.",
      },
      {
        question: "Talk about your job.",
        answer: "Being a pastor is actually quite exciting. I get to meet all kinds of people, listen to their concerns, and sometimes just be there for them when they’re going through a difficult time. It’s not always easy, but I find it really meaningful.",
      },
      {
        question: "What do you usually do at the weekend?",
        answer: "Well, weekends are actually the busiest time of the week for me because I’m a pastor. I’m usually at church, meeting and talking to lots of people. And if I’m giving a sermon on Sunday, I’m usually a little nervous until it’s over. So yeah, weekends aren’t really weekends for me!",
      },
      {
        question: "Where do you like to go on holiday?",
        answer: "I usually like to travel abroad, somewhere where no one knows me. I spend most of my time talking to people because of my job, so when I’m on holiday, I just want to get away from everything for a while. It gives me a real sense of freedom.",
      },
      {
        question: "What do you usually do in the evenings?",
        answer: "I only have a little free time in the evenings, so I usually spend it reading or sometimes cooking. Both help me relax after a long day at work.",
      },
      {
        question: "Do you prefer mornings or evenings?",
        answer: "I definitely prefer evenings because mornings feel rushed and the traffic is stressful. In the evening, I can finally slow down and enjoy some free time.",
      },
      {
        question: "What do you usually do on your day off?",
        answer: "I usually spend my day off reading books, especially books on theology and the humanities. I also enjoy cooking sometimes because it helps me relax.",
      },
      {
        question: "What kind of videos do you like to watch?",
        answer: "I like watching documentaries about the universe and ancient history. I find them really interesting because I enjoy learning about things that are very different from my everyday life.",
      },
      {
        question: "How often do you cook?",
        answer: "I cook almost every morning because I’m a father of three, and I usually prepare breakfast for my children. I actually enjoy cooking, even though mornings can be pretty busy.",
      },
      {
        question: "What’s one thing you wish you had more time for?",
        answer: "I wish I had more time to study English and theology because I’m preparing to study abroad. But I’m busy with church almost every day, so I don’t get as much study time as I’d like.",
      },
      {
        question: "Why do you think people have hobbies?",
        answer: "I think having hobbies is almost instinctive. We naturally need things that give us joy and help us relax, especially when life gets busy.",
      },
    ],
    // Practice ideas are kept separate from the finalized Part 1 answers above.
    practiceNotes: [
      {
        question: "Would you like to have more quiet time?",
        answer: "Definitely. I work as a pastor at a church, so I don't get enough quiet time during the day. I'd like to have more time in the evenings to relax and recharge.",
      },
      {
        question: "Do you like rainy weather?",
        answer: "I actually like rainy weather because it gives me a sense of peace. Some people find it gloomy, but I find it quite relaxing. I especially like having coffee and listening to jazz when it's raining.",
      },
      {
        question: "Does the weather affect your plans?",
        answer: "I sometimes adjust my plans because of the weather, but it's not a big factor for me. Unless the weather is extreme, I usually stick to my plans. Actually, unexpected weather can sometimes make the day more interesting.",
      },
      {
        question: "Do you prefer spending your free time alone or with others?",
        answer: "I usually prefer spending my free time alone. As a pastor, I meet a lot of people every day, so when I have some free time, I enjoy having some quiet time by myself.",
      },
      {
        question: "What do you usually do when you have time to yourself?",
        answer: "I usually read books, watch documentaries, or cook something. Reading gives me space to think, while cooking helps me relax.",
      },
      {
        question: "Do you ever feel lonely when you're alone?",
        answer: "Sometimes I feel a bit lonely, but I don't really mind it. Being alone gives me space to think, and I actually value that quiet time.",
      },
      {
        question: "Do you enjoy cooking?",
        answer: "Yes, I really enjoy cooking. I especially like making soup because I find the sound of it bubbling quite relaxing. It's a small thing, but it makes me happy.",
      },
    ],
  },

  writing: {
    title: "Writing",
    description: "Simple, clear, accurate writing for Band 7.0.",
    principle: "Accuracy first, complexity second. Learn useful chunks, not whole model answers.",
    reviewPreview: [
      "Many people ",
      { original: "uses", replacement: "use", category: "문법", reason: "주어 people은 복수이므로 use를 씁니다." },
      " online courses.",
    ],
    reviews: [],
    tasks: [
      {
        title: "Task 1 · Charts",
        rule: "Don't list every number. Show the pattern and group similar data.",
        steps: [
          "Introduction: say what the chart shows.",
          "Overview: name the highest, lowest, and main contrast.",
          "Body: group high figures, then the remaining figures.",
        ],
        example: "Overall, sending and receiving emails was the most common online activity, while selling goods and services was the least common.",
        chunks: ["This was followed by…", "with figures of A and B, respectively", "ranging from A to B", "By contrast, …"],
      },
      {
        title: "Task 2 · Essay",
        rule: "Develop one clear idea before moving to the next.",
        steps: [
          "Introduction: state the topic and your position.",
          "Body: point → explanation → example or detail → result.",
          "Conclusion: restate your answer briefly.",
        ],
        example: "One major advantage of online education is that it makes learning more accessible. Students can attend classes regardless of where they live.",
        chunks: ["One major advantage of X is that…", "regardless of where…", "As a result, …", "For this reason, I believe that…"],
      },
    ],
    routine: "Timed draft (Task 1: 20 min · Task 2: 40 min) → check structure and accuracy → save 5–10 useful chunks.",
    models: [
      {
        task: "Task 1",
        title: "Online Activities in Great Britain, 2018",
        paragraphs: [
          "The bar chart shows the percentages of individuals in Great Britain who took part in various online activities in 2018.",
          "Overall, sending and receiving emails was the most common online activity, while selling goods and services was the least common. Researching goods and services was also particularly popular, whereas playing or downloading games was relatively uncommon.",
          "Around 84% of respondents sent or received emails, the highest figure on the chart. This was followed by researching goods and services, at approximately 78%. Online banking and social networking were also common, with figures of around 69% and 65%, respectively.",
          "The percentages for watching online video content, listening to music, and watching streamed or catch-up TV were fairly similar, ranging from about 55% to 62%. By contrast, only around 32% of respondents played or downloaded games. Selling goods and services had the lowest figure, at approximately 25%.",
        ],
      },
      {
        task: "Task 1",
        title: "Housing in England and Wales, 1918–2011",
        paragraphs: [
          "The chart compares the percentages of households living in owner-occupied homes, council-rented accommodation and privately rented housing between 1918 and 2011.",
          "Overall, home ownership increased considerably over the period, whereas both council and private renting declined. Private renting was the most common form of housing in 1918, while ownership became the largest category by 2011.",
          "The proportion of owner-occupied homes rose steadily from around 22% in 1918 to approximately 69% in 2001, before falling slightly to about 64% in 2011. In contrast, private renting declined substantially from roughly 76% to around 10% over the same period.",
          "Council renting increased from about 2% in 1918 to a peak of approximately 31% in 1981. After that, the figure gradually fell, reaching around 17% in 2011.",
        ],
      },
      {
        task: "Task 2",
        title: "Online Education vs Traditional Classroom Education",
        paragraphs: [
          "Online education has become increasingly common in recent years, and some people believe that it can replace traditional classroom learning. While online courses offer greater flexibility and access to education, I believe that face-to-face classes still provide important benefits, particularly in terms of human interaction.",
          "One major advantage of online education is that it makes learning more accessible. Students can attend classes regardless of where they live, which is particularly useful for people who live far from universities or have difficulty travelling. It can also help students with health problems or physical disabilities to continue their education from home. As a result, online learning can provide educational opportunities to a wider range of people.",
          "However, traditional classroom education has an important advantage that online learning cannot fully provide: face-to-face interaction. When students and teachers meet in person, they can see each other's facial expressions and reactions and communicate more naturally. Students can also build closer relationships with their classmates through regular interaction. Therefore, classroom learning can help students develop not only academic knowledge but also interpersonal skills.",
          "In conclusion, online education is valuable because it makes learning more flexible and accessible. However, traditional classrooms remain important because they provide direct human interaction. For this reason, I believe that the most effective approach is to use both forms of education together.",
        ],
      },
    ],
  },

  reading: {
    title: "Reading",
    description: "Passage notes, question strategies, and an error log.",
    starters: [
      { title: "Question types", note: "Collect strategies for headings, matching, and True / False / Not Given." },
      { title: "Vocabulary", note: "Save useful words in context rather than as isolated definitions." },
      { title: "Error log", note: "Record why each wrong answer looked convincing." },
    ],
  },

  listening: {
    title: "Listening",
    description: "Scores and patterns to guide focused listening practice.",
    recentScore: { score: 23, total: 40 },
    weakPoints: ["postcodes", "numbers", "units", "varied accents"],
    commonConfusions: ["13 / 30", "117 / 170", "10,000 / 1,000", "ten / ton"],
  },

  expressions: {
    title: "Expressions",
    description: "Natural phrases to recycle across speaking answers.",
    items: [
      "I get to + verb",
      "I find it + adjective",
      "at the same time",
      "be there for someone",
      "go through a difficult time",
      "get away from everything",
      "It gives me a sense of + noun",
      "mornings feel rushed",
      "spend my free time + -ing",
      "watch videos about + topic",
      "enjoy some free time",
      "I don't get enough quiet time",
      "relax and recharge",
      "have some quiet time by myself",
      "give me space to think",
      "a bit + adjective",
      "adjust my plans",
      "it's not a big factor",
      "stick to my plans",
      "unless the weather is extreme",
      "those little surprises",
      "I value that quiet time",
      "the sound of it bubbling",
      "It's a small thing, but…",
      "prepare breakfast for someone",
      "remind me of + noun",
    ],
    // Keep examples beside their expression; add another sentence to the array to show a new use.
    examples: {
      "I get to + verb": ["I get to meet many people through my work.", "On Mondays, I get to spend more time with my family."],
      "I find it + adjective": ["I find it quite relaxing.", "I find it meaningful to help people."],
      "at the same time": ["I'm exhausted, but at the same time, I'm happy.", "It's challenging, but at the same time, rewarding."],
      "be there for someone": ["I try to be there for people when they need help.", "My wife is always there for me."],
      "go through a difficult time": ["I listen to people who are going through a difficult time.", "A friend helped me when I was going through a difficult time."],
      "get away from everything": ["I travel to get away from everything for a while.", "A quiet walk helps me get away from everything."],
      "It gives me a sense of + noun": ["It gives me a sense of peace.", "Travelling gives me a sense of freedom.", "Finishing a difficult task gives me a sense of achievement."],
      "mornings feel rushed": ["Mornings feel rushed.", "Weekday mornings feel rushed when I'm preparing breakfast."],
      "spend my free time + -ing": ["I spend my free time reading books.", "I sometimes spend my free time cooking."],
      "watch videos about + topic": ["I watch videos about ancient history.", "I enjoy watching videos about the universe."],
      "enjoy some free time": ["I can finally enjoy some free time in the evening.", "On Mondays, I get to enjoy some free time with my family."],
      "I don't get enough quiet time": ["I don't get enough quiet time during the day.", "I don't get enough quiet time when work is busy."],
      "relax and recharge": ["I need some time to recharge.", "Reading helps me relax and recharge after work."],
      "have some quiet time by myself": ["I like to have some quiet time by myself.", "In the evening, I can have some quiet time by myself."],
      "give me space to think": ["It gives me space to think.", "Reading gives me space to think."],
      "a bit + adjective": ["I feel peaceful and a bit nostalgic.", "I get a bit nervous before giving a sermon."],
      "adjust my plans": ["I sometimes adjust my plans.", "I adjust my plans when the weather is bad."],
      "it's not a big factor": ["It's not a big factor for me.", "The weather matters, but it's not a big factor for me."],
      "stick to my plans": ["I usually stick to my plans.", "If the rain isn't heavy, I stick to my plans."],
      "unless the weather is extreme": ["Unless the weather is extreme, I usually go out.", "I stick to my plans unless the weather is extreme."],
      "those little surprises": ["I actually enjoy those little surprises.", "Those little surprises can make the day more interesting."],
      "I value that quiet time": ["I value that quiet time after work.", "I value that quiet time because it helps me think."],
      "the sound of it bubbling": ["When I make soup, I love the sound of it bubbling.", "I find the sound of it bubbling relaxing."],
      "It's a small thing, but…": ["It's a small thing, but it makes me happy.", "It's a small thing, but it helps me relax."],
      "prepare breakfast for someone": ["I prepare breakfast for my children.", "I usually prepare breakfast for my family."],
      "remind me of + noun": ["It reminds me of my university days.", "This song reminds me of my hometown."],
    },
    tips: [
      {
        title: "Feel + adjective",
        example: "Mornings feel rushed. / Reading the Bible feels peaceful.",
        note: "Use “Mornings feel rushed,” not “Morning is rushed.”",
      },
      {
        title: "Find it + adjective",
        example: "I find it relaxing. / I find the sound of soup bubbling quite relaxing.",
        note: "For relaxation, say “It helps me relax” or “I find it relaxing,” not “It gives me a sense of relax.”",
      },
      {
        title: "A sense of + noun",
        example: "It gives me a sense of peace. / I feel a sense of peace. / I feel peaceful.",
        note: "Do not say “It feels a sense of peace.” Other useful nouns: freedom, achievement.",
      },
      {
        title: "A bit + adjective",
        example: "a bit tired · a bit nervous · a bit lonely · a bit nostalgic · a bit gloomy",
        note: "Not every combination sounds natural. Prefer “I’m a bit happier today” or “I feel pretty happy” to “It’s a bit happy.”",
      },
      {
        title: "Useful natural phrasing",
        example: "I prefer spending my free time alone. / I cook breakfast for my children.",
        note: "Keep these concise. Avoid “I prefer to spend my free time being alone” and “I cook because for their breakfast.”",
      },
    ],
  },

  pronunciation: {
    title: "Pronunciation",
    description: "Words and connected phrases to practise slowly, then naturally.",
    items: [
      { phrase: "attached", phonetic: "/əˈtætʃt/" },
      { phrase: "I get to", phonetic: "/aɪ ˈɡet tə/" },
    ],
  },
};
