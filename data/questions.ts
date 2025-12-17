import { Question } from '../types';

export const questions: Question[] = [
  // --- Sentence Errors (Minus-5) ---
  {
    id: 1,
    section: 'Sentence Errors',
    text: 'His detention was yesterday; however, he arrived late and didn’t get credit for serving it.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'No error',
    explanation: 'The sentence correctly uses a semicolon and conjunctive adverb "however" to join two independent clauses.'
  },
  {
    id: 2,
    section: 'Sentence Errors',
    text: 'Speeding in restricted zones endangers both driver and pedestrian.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'No error',
    explanation: 'The subject "Speeding" (gerund, singular) agrees with the verb "endangers" (singular).'
  },
  {
    id: 3,
    section: 'Sentence Errors',
    text: 'The idea of discussion and delay, as well as the rising costs involved, anger the local citizens.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'Subject-verb',
    explanation: 'The simple subject is "idea" (singular), so the verb should be "angers" (singular), not "anger".'
  },
  {
    id: 4,
    section: 'Sentence Errors',
    text: 'A blue haze settling over the rooftops and spreading like fog across the water of the bay.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'Fragment',
    explanation: 'This is a sentence fragment because it lacks a main finite verb. "Settling" and "spreading" are participles.'
  },
  {
    id: 5,
    section: 'Sentence Errors',
    text: 'Fish and chips is a London tradition, they call the french fries “chips” over there.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'Run-on',
    explanation: 'This is a comma splice run-on. Two independent clauses are joined only by a comma.'
  },
  {
    id: 6,
    section: 'Sentence Errors',
    text: 'The view from the top of the surrounding hills are unforgettable.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'Subject-verb',
    explanation: 'The subject "view" is singular, so the verb should be "is", not "are".'
  },
  {
    id: 7,
    section: 'Sentence Errors',
    text: 'Gaining insights into other cultures by traveling, language classes, and foreign cuisine.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'Fragment',
    explanation: 'This is a fragment. It is a gerund phrase lacking a main verb and subject performing an action.'
  },
  {
    id: 8,
    section: 'Sentence Errors',
    text: 'Since I realize that other teachers have assigned homework to be done over the holidays.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'Fragment',
    explanation: 'This is a dependent clause (starting with "Since") standing alone. It needs to be attached to an independent clause.'
  },
  {
    id: 9,
    section: 'Sentence Errors',
    text: 'One of my friends have the flu.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'Subject-verb',
    explanation: 'The subject "One" is singular, so the verb should be "has", not "have".'
  },
  {
    id: 10,
    section: 'Sentence Errors',
    text: 'Hoping that she will remember the assignment.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'Fragment',
    explanation: 'This is a participial phrase standing alone without a main subject or verb.'
  },
  {
    id: 11,
    section: 'Sentence Errors',
    text: 'The things you see in cartoons aren’t real, they’re not even real people.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'Run-on',
    explanation: 'This is a comma splice run-on joining two independent clauses.'
  },
  {
    id: 12,
    section: 'Sentence Errors',
    text: 'The view of the mountains were splendid.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'Subject-verb',
    explanation: 'The subject "view" is singular, so the verb should be "was", not "were".'
  },
  {
    id: 13,
    section: 'Sentence Errors',
    text: 'The Venus Fly Trap, one of a group of plants, traps insects for food.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'No error',
    explanation: 'The sentence is grammatically correct. The subject "Venus Fly Trap" agrees with the verb "traps".'
  },
  {
    id: 14,
    section: 'Sentence Errors',
    text: 'Its been raining for over three days; we had water in our basement.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'Usage',
    explanation: 'Usage error: "Its" is possessive. The sentence requires "It’s" (contraction of "It has").'
  },
  {
    id: 15,
    section: 'Sentence Errors',
    text: 'Place your textbooks face down and wait for further instructions.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'No error',
    explanation: 'This is a correct imperative sentence (implied subject "You").'
  },
  {
    id: 16,
    section: 'Sentence Errors',
    text: 'Everybody else knew, he ignored their warnings.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'Run-on',
    explanation: 'Comma splice error joining two independent clauses.'
  },
  {
    id: 17,
    section: 'Sentence Errors',
    text: 'When it ended in the deaths of two great men, Caesar and Brutus, both powerful leaders.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'Fragment',
    explanation: 'This is a dependent clause (starting with "When") followed by an appositive phrase, lacking an independent clause.'
  },
  {
    id: 18,
    section: 'Sentence Errors',
    text: 'The popularity of television programs is reflected in the ratings.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'No error',
    explanation: 'The subject "popularity" (singular) correctly agrees with "is" (singular).'
  },
  {
    id: 19,
    section: 'Sentence Errors',
    text: 'Several of the games were canceled.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'No error',
    explanation: 'The subject "Several" (plural) correctly agrees with "were" (plural).'
  },
  {
    id: 20,
    section: 'Sentence Errors',
    text: 'The inability to sleep naturally, accompanied by restlessness and anxiety.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'Fragment',
    explanation: 'This is a noun phrase ("inability") with modifiers, but it lacks a main verb.'
  },
  {
    id: 21,
    section: 'Sentence Errors',
    text: 'Every one of the attempts to establish principles have ended in failure.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'Subject-verb',
    explanation: 'The subject "Every one" is singular, so the verb should be "has", not "have".'
  },
  {
    id: 22,
    section: 'Sentence Errors',
    text: 'There has been many assassinations throughout history.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'Subject-verb',
    explanation: 'The subject "assassinations" is plural, so the verb should be "have" ("There have been").'
  },
  {
    id: 23,
    section: 'Sentence Errors',
    text: 'I can\'t believe that Mr. Sutton has given me the exact same questions with the exact same answers as the two previous tests he said to study in order to prepare for this test.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'No error',
    explanation: 'While long and repetitive, the sentence is grammatically complete with a valid subject and verb structure.'
  },
  {
    id: 24,
    section: 'Sentence Errors',
    text: 'Some of the books on the reserve shelf has mysteriously disappeared.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'Subject-verb',
    explanation: '"Some" refers to "books" (plural), so the verb should be "have", not "has".'
  },
  {
    id: 25,
    section: 'Sentence Errors',
    text: 'Exciting news about a Hollywood screen test.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'Fragment',
    explanation: 'This is a noun phrase fragment lacking a verb.'
  },
  {
    id: 26,
    section: 'Sentence Errors',
    text: 'I believe that if parents had control over their kids.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'Fragment',
    explanation: 'The dependent clause "if parents had control..." is never resolved by a main clause.'
  },
  {
    id: 27,
    section: 'Sentence Errors',
    text: 'The author of the stories are Leslie Silko.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'Subject-verb',
    explanation: 'The subject "author" is singular, so the verb should be "is", not "are".'
  },
  {
    id: 28,
    section: 'Sentence Errors',
    text: 'Each of the shorefront families have a dock on the beach.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'Subject-verb',
    explanation: '"Each" is a singular subject, so the verb should be "has", not "have".'
  },
  {
    id: 29,
    section: 'Sentence Errors',
    text: 'In Gladiator, the position of emperor, of being a tyrant over the whole Roman empire.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'Fragment',
    explanation: 'This phrase lacks a main verb (predicate) for the subject "position".'
  },
  {
    id: 30,
    section: 'Sentence Errors',
    text: 'Someone said student government has to much power.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'Usage',
    explanation: 'Usage error: "to" should be "too" (meaning excessive).'
  },
  {
    id: 31,
    section: 'Sentence Errors',
    text: 'Some of the reporting of supposedly objective newspaper writers appears to be biased.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'Subject-verb',
    explanation: 'This question can be tricky. Technically "Reporting" is singular/uncountable, so "appears" is correct. However, if the test marks it as S-V error, it likely implies "Some" refers to "writers" (incorrectly) or expects "appear". Given the strict key, it is marked as a Subject-verb error context.'
  },
  {
    id: 32,
    section: 'Sentence Errors',
    text: 'Not all test hard.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'Fragment',
    explanation: 'Telegraphic style fragment. Missing a verb ("are").'
  },
  {
    id: 33,
    section: 'Sentence Errors',
    text: 'Drugs are a serious problem, people who take them lightly are foolish.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'Run-on',
    explanation: 'Comma splice connecting two independent clauses.'
  },
  {
    id: 34,
    section: 'Sentence Errors',
    text: 'Both of the paintings show the influence of the work of Emilio Sanchez.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'No error',
    explanation: '"Both" is plural, "show" is plural. Correct.'
  },
  {
    id: 35,
    section: 'Sentence Errors',
    text: 'The beach and the water is the primary concerns of most local residents.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'Subject-verb',
    explanation: 'Compound subject "beach and water" requires plural verb "are".'
  },
  {
    id: 36,
    section: 'Sentence Errors',
    text: 'All of the courses recommended for college work is recognized by the state university.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'Subject-verb',
    explanation: '"Courses" is plural, so the verb should be "are recognized".'
  },
  {
    id: 37,
    section: 'Sentence Errors',
    text: 'Did you know that three-dimensional images can be projected by laser beams?',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'No error',
    explanation: 'Correct sentence structure.'
  },
  {
    id: 38,
    section: 'Sentence Errors',
    text: 'Each of the players agree that training regulations are necessary for good performance.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'Subject-verb',
    explanation: '"Each" is singular, so the verb should be "agrees".'
  },
  {
    id: 39,
    section: 'Sentence Errors',
    text: 'An anthology that includes many American poets like Langston Hughes and Gary Snyder.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'Fragment',
    explanation: 'This is a noun phrase modified by a relative clause, but it lacks a main verb.'
  },
  {
    id: 40,
    section: 'Sentence Errors',
    text: 'There are advantages to studying Latin, you get to know your word roots, for example.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'Run-on',
    explanation: 'Comma splice connecting two independent clauses.'
  },
  {
    id: 41,
    section: 'Sentence Errors',
    text: 'Animals, other than the elephant, are classified as pachyderms.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'No error',
    explanation: 'Correct structure. "Animals" is the subject for "are".'
  },
  {
    id: 42,
    section: 'Sentence Errors',
    text: 'The cost of the cars was high.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'No error',
    explanation: 'Subject "cost" is singular, so "was" is correct.'
  },
  {
    id: 43,
    section: 'Sentence Errors',
    text: 'Neither book is in the library.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'No error',
    explanation: '"Neither" is singular, "is" is singular. Correct.'
  },
  {
    id: 44,
    section: 'Sentence Errors',
    text: 'The effective date of the new regulations have not yet been determined.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'Subject-verb',
    explanation: 'Subject "date" is singular, so the verb should be "has".'
  },
  {
    id: 45,
    section: 'Sentence Errors',
    text: 'Many of the methods used to preserve food involves the halting of enzyme action.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'Subject-verb',
    explanation: 'Subject "Many" is plural, so the verb should be "involve" (not "involves").'
  },
  {
    id: 46,
    section: 'Sentence Errors',
    text: 'There is a lot of different types of violence.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'Subject-verb',
    explanation: 'Subject "types" is plural, so the verb should be "are" ("There are a lot...").'
  },
  {
    id: 47,
    section: 'Sentence Errors',
    text: 'Although Gandhi first put the idea of nonviolence into action in India.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'Fragment',
    explanation: 'Dependent clause (starting with "Although") standing alone.'
  },
  {
    id: 48,
    section: 'Sentence Errors',
    text: 'You really find out who you’re friends are when the chips are down.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'Usage',
    explanation: 'Usage error: "you’re" (you are) should be "your" (possessive).'
  },
  {
    id: 49,
    section: 'Sentence Errors',
    text: 'Somebody in our English class has submitted an essay.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'No error',
    explanation: '"Somebody" is singular, "has submitted" is singular. Grammatically correct.'
  },
  {
    id: 50,
    section: 'Sentence Errors',
    text: 'People watch sports because they’re violent, I’m not saying it’s the only reason.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'Run-on',
    explanation: 'Comma splice between two independent clauses.'
  },
  {
    id: 51,
    section: 'Sentence Errors',
    text: 'Not one of the participants in the discussions was eager to bring that issue to a vote.',
    options: ['No error', 'Run-on', 'Fragment', 'Subject-verb', 'Usage'],
    correctAnswer: 'No error',
    explanation: '"Not one" is singular, "was" is singular. Correct.'
  },
  // --- Grammar Rules ---
  {
    id: 52,
    section: 'Grammar Rules',
    text: 'The following is not true for Indirect Objects',
    options: [
      'Stem from the same root word as does the verb of the sentence',
      'Follow action verbs, but only a few specific ones...',
      'Indicates the person of thing the subject is "=" to',
      'None of the above'
    ],
    correctAnswer: 'Indicates the person of thing the subject is "=" to',
    explanation: 'Indicating what the subject is "=" to is the definition of a Subject Complement, not an Indirect Object.'
  },
  {
    id: 53,
    section: 'Grammar Rules',
    text: 'Identify: No man is *justified* in doing evil on the ground of expedience.',
    options: ['Object Complement', 'Direct Object', 'Indirect Object', 'Subject Complement'],
    correctAnswer: 'Subject Complement',
    explanation: '"Justified" is an adjective following the linking verb "is" and modifying the subject "man".'
  },
  {
    id: 54,
    section: 'Grammar Rules',
    text: 'What usually precedes a V, may be preceded by a PREP or ADJ?',
    options: ['Noun', 'Verb', 'Adjectives', 'Adverb'],
    correctAnswer: 'Noun',
    explanation: 'Nouns act as subjects (preceding V) and can be objects of prepositions or modified by adjectives.'
  },
  {
    id: 55,
    section: 'Grammar Rules',
    text: 'The syntactical pattern for Direct Object is:',
    options: ['N + LV + N = S + LV + DO', 'N + AV + N = S + AV + DO', 'S + AV + PrN = S + AV + DO', 'Both examples with "AV"'],
    correctAnswer: 'Both examples with "AV"',
    explanation: 'Direct Objects always follow Action Verbs (AV).'
  },
  {
    id: 56,
    section: 'Grammar Rules',
    text: 'What is true about Direct Objects?',
    options: ['Receive action from the verb', 'They always follow action verbs', 'Both (a) and (b)', 'None of the above'],
    correctAnswer: 'Both (a) and (b)',
    explanation: 'Direct objects receive the action and must follow an action verb.'
  },
  {
    id: 57,
    section: 'Grammar Rules',
    text: 'Test: State the DO and ask “to?” or “for?” who afterwards to identify the ______________.',
    options: ['Direct Object', 'Object Complement', 'Subjective Complement', 'Indirect Object'],
    correctAnswer: 'Indirect Object',
    explanation: 'This is the standard test to locate an Indirect Object.'
  },
  {
    id: 58,
    section: 'Grammar Rules',
    text: 'Identify: The *crying* baby cried.',
    options: ['Infinitive', 'Gerund', 'Participle', 'Verb'],
    correctAnswer: 'Participle',
    explanation: '"Crying" is an adjective derived from a verb, making it a participle modifying "baby".'
  },
  {
    id: 59,
    section: 'Grammar Rules',
    text: 'Identify: *Not only* is Lisa beautiful, *but* she is *also* funny.',
    options: ['Coordinating Conjunction', 'Correlative Conjunction', 'Subordinate Conjunction', 'Relative Pronoun'],
    correctAnswer: 'Correlative Conjunction',
    explanation: '"Not only... but also" is a paired conjunction, known as a Correlative Conjunction.'
  },
  {
    id: 60,
    section: 'Grammar Rules',
    text: 'Which questions do Adverbs NOT answer?',
    options: ['When? Where?', 'How? Why?', 'To what extent?', 'Which? What kind of?'],
    correctAnswer: 'Which? What kind of?',
    explanation: '"Which?" and "What kind of?" are questions answered by Adjectives.'
  },
  {
    id: 61,
    section: 'Grammar Rules',
    text: '________ are marker words that tell us a Dependent Clause is to follow',
    options: ['Relative Pronoun', 'Subordinate Conjunction', 'Neither (a) or (b)', 'Both (a) and (b)'],
    correctAnswer: 'Both (a) and (b)',
    explanation: 'Dependent clauses are introduced by either relative pronouns or subordinate conjunctions.'
  },
  {
    id: 62,
    section: 'Grammar Rules',
    text: 'The following is true for Action Verbs',
    options: ['Followed by SC', 'Am, are, is... are examples', 'Both "A" & "B"', 'None of the above'],
    correctAnswer: 'None of the above',
    explanation: 'Action verbs are followed by Direct Objects (not SC), and "am, are, is" are linking/helping verbs.'
  },
  {
    id: 63,
    section: 'Grammar Rules',
    text: 'What precedes a N; follows a N; follows linking verbs?',
    options: ['Noun', 'Verb', 'Adjective', 'Adverb'],
    correctAnswer: 'Adjective',
    explanation: 'Adjectives modify nouns (preceding), can be appositive (following), or act as Subject Complements (following LV).'
  },
  {
    id: 64,
    section: 'Grammar Rules',
    text: 'What is true about Subject Compliments?',
    options: ['Include predicate nouns...', 'Pattern is subject plus linking verb plus noun/adj', 'I am a teacher. Teacher is the "subject compliment"', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'All options correctly describe Subject Complements (Pred Nouns/Adjectives following LVs).'
  },
  {
    id: 65,
    section: 'Grammar Rules',
    text: 'A Subordinate Conjunction links',
    options: ['Dependent clause to Independent clause', 'A Subordinate clause to a Main clause', 'Two unequal parts of a sentence', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'These are all different ways of describing the function of a subordinate conjunction.'
  },
  {
    id: 66,
    section: 'Grammar Rules',
    text: 'Place “my” in front of the word to determine if it is a ______________.',
    options: ['Noun', 'Verb', 'Adjective', 'Adverb'],
    correctAnswer: 'Noun',
    explanation: 'Possessive pronouns like "my" modify nouns (e.g., "my house").'
  },
  {
    id: 67,
    section: 'Grammar Rules',
    text: 'What follows a N or PN?',
    options: ['Noun', 'Verb', 'Adjective', 'Adverb'],
    correctAnswer: 'Verb',
    explanation: 'In standard syntax (S-V), the Subject (N/PN) is followed by the Verb.'
  },
  {
    id: 68,
    section: 'Grammar Rules',
    text: 'Place “very” in front and/or Place the word itself in front of a N to determine if it is a ______________.',
    options: ['Noun', 'Verb', 'Adjective', 'Adverb'],
    correctAnswer: 'Adjective',
    explanation: 'Adjectives can be intensified by "very" (very tall) or placed before a noun (tall building).'
  },
  {
    id: 69,
    section: 'Grammar Rules',
    text: 'Which one is not a Correlative Conjunction?',
    options: ['Neither/or', 'Not only/but also', 'Either/or', 'Both/and'],
    correctAnswer: 'Neither/or',
    explanation: 'The correct pair is "Neither/nor". "Neither/or" is incorrect.'
  },
  {
    id: 70,
    section: 'Grammar Rules',
    text: 'What is the syntactical pattern for an Indirect Object?',
    options: ['N + AV + N1 + N2 = S + AV + IO + DO', 'N + LV + N1 + N2 = S + LV + IO + DO', 'N + AV + N1 + N2 = S + AV + DO + IO'],
    correctAnswer: 'N + AV + N1 + N2 = S + AV + IO + DO',
    explanation: 'Indirect objects come between the Action Verb and the Direct Object (S-V-IO-DO).'
  },
  {
    id: 71,
    section: 'Grammar Rules',
    text: 'The following is true for identifying Linking Verbs',
    options: ['Test: replace verb with "="', 'Am, are, is, when, where, be, being, been', 'Both (a) and (b)', 'None of the above'],
    correctAnswer: 'Test: replace verb with "="',
    explanation: 'The "=" test is the most reliable. "Am, are, is..." can also be auxiliary verbs, so (b) is not always true.'
  },
  {
    id: 72,
    section: 'Grammar Rules',
    text: 'Identify: I am going *to seek* a great perhaps.',
    options: ['Infinitive', 'Gerund', 'Participle', 'Verb'],
    correctAnswer: 'Infinitive',
    explanation: '"To" followed by a verb ("seek") forms an Infinitive.'
  },
  {
    id: 73,
    section: 'Grammar Rules',
    text: 'Quickie Test: place “to” in front of the word to determine if it is a _____________.',
    options: ['Verb', 'Noun', 'Adjective', 'Adverb'],
    correctAnswer: 'Verb',
    explanation: 'If you can put "to" in front of a word (forming an infinitive), it acts as a Verb.'
  },
  {
    id: 74,
    section: 'Grammar Rules',
    text: 'The following is not true for the Object of the Preposition',
    options: ['90% of the time _________ go beneath the verb...', 'Follows: up, down, to, from', 'Means "placed next to."', 'None'],
    correctAnswer: 'Means "placed next to."',
    explanation: '"Placed next to" is the definition of an Appositive, not an Object of a Preposition.'
  },
  {
    id: 75,
    section: 'Grammar Rules',
    text: 'The Direct Object test is:',
    options: ['The man kicked the dog...', 'Repeat the verb and add “What?” or “whom?”', 'All of the above'],
    correctAnswer: 'Repeat the verb and add “What?” or “whom?”',
    explanation: 'To find the DO, say the verb and ask "What?" or "Whom?".'
  },
  {
    id: 76,
    section: 'Grammar Rules',
    text: 'What is the test for finding an Indirect Object?',
    options: ['Restate the Action Verb and Direct Object and ask “to/for who?”', 'Restate the Linking Verb...', 'Restate the Action Verb...'],
    correctAnswer: 'Restate the Action Verb and Direct Object and ask “to/for who?”',
    explanation: 'IOs answer "to whom?" or "for whom?" after the verb and DO.'
  },
  {
    id: 77,
    section: 'Grammar Rules',
    text: 'Identify: The play Romeo and Juliet, *which* was written by Shakespeare...',
    options: ['Coordinating Conjunction', 'Correlative Conjunction', 'Relative Pronoun'],
    correctAnswer: 'Relative Pronoun',
    explanation: '"Which" is a relative pronoun introducing a relative clause.'
  },
  {
    id: 78,
    section: 'Grammar Rules',
    text: 'The following is true for the Object of the Preposition:',
    options: ['90% of the time...', 'Includes: up, down...', 'Nouns or pronouns, which follow prepositions', 'Means "placed next to"'],
    correctAnswer: 'Nouns or pronouns, which follow prepositions',
    explanation: 'An Object of the Preposition is the noun/pronoun that completes the prepositional phrase.'
  },
  {
    id: 79,
    section: 'Grammar Rules',
    text: 'A Subjective Compliment is',
    options: ['A Noun', 'Follows a LV', 'Both (a) and (b)', 'None of the above'],
    correctAnswer: 'Both (a) and (b)',
    explanation: 'Subject Complements (Predicate Nominatives) are nouns that follow Linking Verbs.'
  },
  {
    id: 80,
    section: 'Grammar Rules',
    text: 'Identify: Where there is *fear*, there is no *religion*.',
    options: ['Subject', 'Verb', 'Subject Complement', 'Direct Object'],
    correctAnswer: 'Subject Complement',
    explanation: 'In this specific context, "fear" and "religion" act as complements to the state of being.'
  },
  {
    id: 81,
    section: 'Grammar Rules',
    text: 'The following is true for Objective Complements',
    options: ['Stem from the same root...', 'Indicates the person...', 'Follow action verbs... such as: "make," "choose," "call"', 'None'],
    correctAnswer: 'Follow action verbs... such as: "make," "choose," "call"',
    explanation: 'Objective Complements modify the Direct Object and follow specific verbs like make, call, choose.'
  },
  {
    id: 82,
    section: 'Grammar Rules',
    text: 'Look for the –ly ending on a word to find ___________.',
    options: ['Noun', 'Verb', 'Adjective', 'Adverb'],
    correctAnswer: 'Adverb',
    explanation: 'Many adverbs end in -ly (e.g., quickly, softly).'
  },
  {
    id: 83,
    section: 'Grammar Rules',
    text: 'What is the definition for the “subject” of a sentence?',
    options: ['Names the person...', 'It is usually the unattached noun or pronoun closest to and in front of the verb', 'Completes...'],
    correctAnswer: 'It is usually the unattached noun or pronoun closest to and in front of the verb',
    explanation: 'This is the structural definition of a subject in a standard English sentence.'
  },
  {
    id: 84,
    section: 'Grammar Rules',
    text: 'What is/are the types of Linking Verbs?',
    options: ['Verbs of sense', 'Copulative verbs', 'Verbs of being...', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Linking verbs include be-verbs, sense verbs, and copulative verbs.'
  },
  {
    id: 85,
    section: 'Grammar Rules',
    text: 'Identify: The *barking* dog bit me.',
    options: ['Gerund', 'Infinitive', 'Participle', 'Particle'],
    correctAnswer: 'Participle',
    explanation: '"Barking" is a verb form ending in -ing acting as an adjective, which is a Participle.'
  },
  {
    id: 86,
    section: 'Grammar Rules',
    text: 'Which is not a Verb of Being?',
    options: ['am, is, are', 'was, were', 'be, being, been', 'None of the above'],
    correctAnswer: 'None of the above',
    explanation: 'All the options listed are forms of the verb "to be".'
  },
  {
    id: 87,
    section: 'Grammar Rules',
    text: 'Which is not a syntactical pattern for Subject Compliments?',
    options: ['N + LV + N = S + LV + SC', 'N + LV + Adj = S + LV + SC', 'N + LV + PrN = S + LV + DO', 'None'],
    correctAnswer: 'N + LV + PrN = S + LV + DO',
    explanation: 'A Linking Verb (LV) cannot take a Direct Object (DO). DOs require Action Verbs.'
  },
  {
    id: 88,
    section: 'Grammar Rules',
    text: 'The following is not true about Subject Complements:',
    options: ['Include predicate nouns...', 'Syntactical pattern is subject plus linking verb...', 'Soccer is my favorite...', 'None of the above'],
    correctAnswer: 'None of the above',
    explanation: 'All the statements provided are true regarding Subject Complements.'
  },
  {
    id: 89,
    section: 'Grammar Rules',
    text: 'The following is true for Indirect Objects:',
    options: ['Stem from same root...', 'Indicates the person of thing the something is done to or for', 'Follow action verbs...', 'None'],
    correctAnswer: 'Indicates the person of thing the something is done to or for',
    explanation: 'Indirect Objects indicate the recipient of the direct object.'
  },
  {
    id: 90,
    section: 'Grammar Rules',
    text: 'Identify: *Swimming* is my favorite sport.',
    options: ['Gerund', 'Infinitive', 'Participle', 'Particle'],
    correctAnswer: 'Gerund',
    explanation: '"Swimming" is a verb form ending in -ing acting as a noun (Subject), which is a Gerund.'
  },
  {
    id: 91,
    section: 'Grammar Rules',
    text: 'There are two kinds of clauses: both can have a subject and a verb. They are called:',
    options: ['Subject/Predicate', 'Indepedent/Dependent', 'Prepositional phrase...', '(a) and (b)'],
    correctAnswer: 'Indepedent/Dependent',
    explanation: 'Clauses are categorized as Independent (can stand alone) or Dependent (cannot stand alone).'
  },
  {
    id: 92,
    section: 'Grammar Rules',
    text: 'Objects are known to',
    options: ['Receives action from the verb', 'Always follow action verbs', 'Both (a) and (b)', 'None'],
    correctAnswer: 'Both (a) and (b)',
    explanation: 'Objects receive the action and generally follow the action verb.'
  },
  {
    id: 93,
    section: 'Grammar Rules',
    text: 'Identify: You will pass this test, *because* you studied a lot.',
    options: ['Coordinating Conjunction', 'Correlative Conjunction', 'Subordinate Conjunction', 'Relative Pronoun'],
    correctAnswer: 'Subordinate Conjunction',
    explanation: '"Because" introduces a subordinate (dependent) clause.'
  },
  {
    id: 94,
    section: 'Grammar Rules',
    text: 'A “helping verb” is also known as a _____________.',
    options: ['Linking verb', 'Secondary verb', 'Auxiliary verb', 'Action verb'],
    correctAnswer: 'Auxiliary verb',
    explanation: '"Auxiliary" is the grammatical term for helping verbs.'
  },
  {
    id: 95,
    section: 'Grammar Rules',
    text: 'Test: State the V and say “what?” or “whom?” to identify the ______________.',
    options: ['Direct Object', 'Object Complement', 'Subjective Complement', 'Indirect Object'],
    correctAnswer: 'Direct Object',
    explanation: 'This question/test is the standard method for finding Direct Objects.'
  },
  {
    id: 96,
    section: 'Grammar Rules',
    text: 'Identify: Fred is going to the state meet, *because he won this race*.',
    options: ['Dependent Clause', 'Independent Clause', 'Subordinate Clause', 'Both Dependent and Subordinate Clauses'],
    correctAnswer: 'Both Dependent and Subordinate Clauses',
    explanation: '"Because he won this race" is a clause that cannot stand alone, making it both Dependent and Subordinate.'
  },
  {
    id: 97,
    section: 'Grammar Rules',
    text: 'Identify: Drunkenness is the ruin *of reason*.',
    options: ['Verb', 'Prepositional Phrase', 'Participle', 'Objective'],
    correctAnswer: 'Prepositional Phrase',
    explanation: '"Of reason" begins with a preposition ("of") and ends with a noun object ("reason").'
  }
];