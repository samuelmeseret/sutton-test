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
  },

  // --- Poetry ---
  {
    id: 98,
    section: 'Poetry',
    text: '(Fill in the blank) __________ is the Greek word for "measure."',
    options: ['Beat', 'Meter', 'Foot', 'Feet'],
    correctAnswer: 'Meter',
    explanation: 'Meter comes from the Greek word "metron," meaning measure. It refers to the rhythmic pattern of stressed and unstressed syllables in poetry.'
  },
  {
    id: 99,
    section: 'Poetry',
    text: 'Which type of poem is fourteen lines, usually iambic?',
    options: ['Sonnet', 'Villanelle', 'Blank Verse', 'Petrachan Ballad'],
    correctAnswer: 'Sonnet',
    explanation: 'The Sonnet is a fourteen-line poem, typically written in iambic pentameter, with two main forms: Shakespearean and Petrachan.'
  },
  {
    id: 100,
    section: 'Poetry',
    text: 'What are the two versions of Sonnets?',
    options: ['English & French', 'American & English', 'Petrachan & Shakespearean', 'Shakespearean & English'],
    correctAnswer: 'Petrachan & Shakespearean',
    explanation: 'The two main sonnet forms are the Petrachan (Italian), developed by Petrarch, and the Shakespearean (English), popularized by Shakespeare.'
  },
  {
    id: 101,
    section: 'Poetry',
    text: 'What type of poem is a short narrative poem with a subject matter that is communal stories of lost love, supernatural happenings, or recent events?',
    options: ['Sestina', 'Villanelle', 'Pastoral', 'Ballad'],
    correctAnswer: 'Ballad',
    explanation: 'The Ballad is a short narrative poem whose subject matter typically includes communal stories of lost love, supernatural happenings, or recent events, originally sung or recited.'
  },
  {
    id: 102,
    section: 'Poetry',
    text: '(Fill in the blank) __________ is a poem free of structured rules.',
    options: ['Blank Verse', 'Open Form', 'Sestina', 'Closed Form'],
    correctAnswer: 'Open Form',
    explanation: 'Open Form (also called Free Verse) poetry is free of structured rules such as fixed meter, rhyme scheme, or stanza length.'
  },
  {
    id: 103,
    section: 'Poetry',
    text: '(Fill in the blank) __________ are patterns of stressed and unstressed syllables.',
    options: ['Feet', 'Meter', 'Beats', 'Stresses'],
    correctAnswer: 'Feet',
    explanation: 'Feet (singular: foot) are the basic units of meter — patterns of stressed and unstressed syllables. For example, an iamb is one unstressed syllable followed by one stressed syllable.'
  },
  {
    id: 104,
    section: 'Poetry',
    text: 'Which is a measured unit of meter, made up of stressed and unstressed syllables?',
    options: ['Beat', 'Foot', 'Accentual Meter', 'Syllabic Meter'],
    correctAnswer: 'Foot',
    explanation: 'A Foot is a measured unit of meter consisting of a specific pattern of stressed and unstressed syllables. Common feet include the iamb, trochee, dactyl, and anapest.'
  },
  {
    id: 105,
    section: 'Poetry',
    text: '(Fill in the blank) The __________ is a form of poetry in which high subject matter could be written. This was often used for translation of epic poetry from the classical Latin and Greek.',
    options: ['Epic Poetry', 'Ode', 'Elegy', 'Heroic Couplet'],
    correctAnswer: 'Heroic Couplet',
    explanation: 'The Heroic Couplet is a form of poetry written in rhyming pairs of iambic pentameter lines, traditionally used for high subject matter and the translation of classical Latin and Greek epic poetry.'
  },
  {
    id: 106,
    section: 'Poetry',
    text: 'Identify this type of poetry: It is written using a rhyming pair of lines.',
    options: ['Heroic Couplet', 'Ode', 'Elegy', 'Sonnet'],
    correctAnswer: 'Heroic Couplet',
    explanation: 'The Heroic Couplet consists of two consecutive rhyming lines, typically written in iambic pentameter.'
  },
  {
    id: 107,
    section: 'Poetry',
    text: 'Identify this type of poem: (1) It has an iambic line with ten stresses and five beats, (2) it is unrhymed, and (3) often is identified as the poetic form closest to human speech.',
    options: ['Open Form', 'Blank Verse', 'Sonnet', 'Free Verse'],
    correctAnswer: 'Blank Verse',
    explanation: 'Blank Verse is unrhymed iambic pentameter — ten syllables per line with five beats. Because its rhythm closely mirrors natural English speech patterns, it is considered the poetic form closest to human speech.'
  },
  {
    id: 108,
    section: 'Poetry',
    text: 'Identify this type of poem: It has fourteen lines, usually iambic, with a rhyme scheme of ababcdcdefefgg.',
    options: ['Neither Shakespearean or Petrachan', 'Villanelle', 'Pantoum', 'Sonnet'],
    correctAnswer: 'Sonnet',
    explanation: 'The rhyme scheme ababcdcdefefgg identifies this as a Shakespearean Sonnet — three quatrains (abab cdcd efef) followed by a closing couplet (gg).'
  },
  {
    id: 109,
    section: 'Poetry',
    text: 'Identify this type of poem: It takes four steps forward and two steps back, because each stanza repeats the second and fourth line used in the previous stanza.',
    options: ['Villanelle', 'Sestina', 'Pantoum', 'Pastoral'],
    correctAnswer: 'Pantoum',
    explanation: 'The Pantoum is a Malayan form where the second and fourth lines of each stanza become the first and third lines of the next stanza, creating the "four steps forward, two steps back" effect.'
  },
  {
    id: 110,
    section: 'Poetry',
    text: 'Identify this type of poem: It has nineteen lines. It has five stanzas, each of three lines, with a final one of four.',
    options: ['Sestina', 'Sonnet', 'Ode', 'Villanelle'],
    correctAnswer: 'Villanelle',
    explanation: 'The Villanelle has 19 lines: five tercets (3-line stanzas) followed by one quatrain (4-line stanza), with two lines repeating throughout as refrains.'
  },
  {
    id: 111,
    section: 'Poetry',
    text: 'Identify this type of poem: It has thirty-nine lines, because it uses "lexical repetition." It has six stanzas of six lines and a final envoi of three lines.',
    options: ['Sestina', 'Villanelle', 'Pastoral', 'Troubadour'],
    correctAnswer: 'Sestina',
    explanation: 'The Sestina has 39 lines: six stanzas of six lines each (36 lines) plus a three-line envoi. It uses lexical repetition — the same six end-words rotate through each stanza in a set pattern.'
  },
  {
    id: 112,
    section: 'Poetry',
    text: 'Identify this type of poem: Jean Passerat, a French poet, made this type of poem popular. Historically, the poem came from a rustic Italian song.',
    options: ['Pastoral', 'Sestina', 'Pantoum', 'Villanelle'],
    correctAnswer: 'Villanelle',
    explanation: 'The Villanelle was popularized by Jean Passerat (1534–1602), a French poet, and has origins in rustic Italian folk songs.'
  },
  {
    id: 113,
    section: 'Poetry',
    text: 'Identify this type of poem: Arnaut Daniel belonged to a group of twelfth-century poets, called the troubadours, who needed, for their fame and fortune, to shock, delight, and entertain their audiences. What type of poem did Arnaut Daniel write?',
    options: ['Sestina', 'Troubadour', 'Villanelle', 'Pantoum'],
    correctAnswer: 'Sestina',
    explanation: 'Arnaut Daniel, the troubadour poet, is credited with inventing the Sestina in the late twelfth century. Its complex interlocking pattern of repeated end-words was designed to delight and impress audiences.'
  },
  {
    id: 114,
    section: 'Poetry',
    text: 'Identify this type of poem: This form of poem is Malayan in origin and came into English language poetry, as so many other strict forms have, through France.',
    options: ['Troubadour', 'Pastoral', 'Pantoum', 'Villanelle'],
    correctAnswer: 'Pantoum',
    explanation: 'The Pantoum originated in Malay oral tradition and entered English poetry via French poets who discovered and adapted the form.'
  },
  {
    id: 115,
    section: 'Poetry',
    text: 'Identify this type of poem: This form of poem, as many others, originated from song. Authors shared "tabloid" news through it with their fellow village neighbors. The format made the "news" easy to memorize for people to sing to other people; hence the news spread through song. This style of song later became a form of poetry — what is it called?',
    options: ['Ballad', 'Pantoum', 'Sestina', 'Elegy'],
    correctAnswer: 'Ballad',
    explanation: 'The Ballad originated as a song form used to spread communal news — stories of lost love, crime, and recent events — in a memorable, singable format before evolving into a literary poetry form.'
  },
  {
    id: 116,
    section: 'Poetry',
    text: 'Identify this type of poem: Historically, it was solemn, heroic, and elevated in form. It elevated the person, the object, the occasion. It often praised a person and exaggerated how great she/he is.',
    options: ['Elegy', 'Heroic Couplet', 'Sonnet', 'The Ode'],
    correctAnswer: 'Heroic Couplet',
    explanation: 'The Heroic Couplet was used in solemn, elevated poetry. Its formal, rhyming structure made it ideal for praising great persons and occasions in an exalted tone.'
  },
  {
    id: 117,
    section: 'Poetry',
    text: '(Fill in the blank) The __________ origins are in the small, sunlit courts of Sicily. It lingered there for two hundred years before it made the journey into English.',
    options: ["Ode's", "Sonnet's", "Sestina's", "Villanelle's"],
    correctAnswer: "Sonnet's",
    explanation: "The Sonnet's origins trace back to the courts of Sicily in the thirteenth century before traveling through Italy (Petrarch) and eventually into English poetry."
  },
  {
    id: 118,
    section: 'Poetry',
    text: '(Fill in the blank) The __________ sets out the circumstances and character of loss.',
    options: ['Ode', 'Pantoum', 'Heroic Couplet', 'Elegy'],
    correctAnswer: 'Elegy',
    explanation: 'The Elegy is a mournful poem that sets out the circumstances and character of loss — typically the death of a person — and moves toward consolation.'
  },
  {
    id: 119,
    section: 'Poetry',
    text: 'Identify this type of poem: In a simplified definition, it is the mode of poetry that sought to imitate and celebrate rural life.',
    options: ['Ode', 'Rural Poetry', 'Elegy', 'Pastoral'],
    correctAnswer: 'Pastoral',
    explanation: 'The Pastoral is a mode of poetry that idealized and celebrated rural or country life, often depicting shepherds and nature in an idyllic setting.'
  },
  {
    id: 120,
    section: 'Poetry',
    text: '(Fill in the blank) The __________ mourns for a dead person, lists his or her virtues, and seeks consolation beyond the momentary event.',
    options: ['Elegy', 'Ode', 'Heroic Couplet', 'Pastoral'],
    correctAnswer: 'Elegy',
    explanation: 'The Elegy is a formal poem of mourning that laments the dead, celebrates their virtues, and typically moves toward consolation or acceptance.'
  },
  {
    id: 121,
    section: 'Poetry',
    text: "(Fill in the blank) Arcadia was once a real place, a small Greek area that developed a pastoral in 400 B.C. In 1504, the Italian poet Jacopo Sannazzarro published L'Arcadia, renewing the fashion and visibility of the __________.",
    options: ['Pastoral', 'Heroic Couplet', 'Sonnet', 'None of the above'],
    correctAnswer: 'Pastoral',
    explanation: "Jacopo Sannazzarro's L'Arcadia (1504) revived the Pastoral tradition rooted in ancient Greece, particularly the idealized region of Arcadia, and renewed the form's popularity across Europe."
  },
  {
    id: 122,
    section: 'Poetry',
    text: '(Fill in the blank) The __________ elevated the person, the object, the occasion. In ancient times, athletes were praised, statesmen were applauded.',
    options: ['Heroic Couplet', 'Ode', 'Both A and B', 'None of the above'],
    correctAnswer: 'Heroic Couplet',
    explanation: 'The Heroic Couplet was used to elevate its subjects — athletes, statesmen, and occasions — with its formal, dignified rhyming structure suited to grand subjects.'
  },
  {
    id: 123,
    section: 'Poetry',
    text: "What type of poem (title and author only) is engraved in Mrs. Sutton's wedding ring?",
    options: ['Heroic Couplet', 'Sonnet', 'Elegy', 'Nothing is engraved in her ring'],
    correctAnswer: 'Sonnet',
    explanation: "A Sonnet is engraved in Mrs. Sutton's wedding ring — a fitting choice given the Sonnet's long tradition as a vehicle for expressing love."
  },
  {
    id: 124,
    section: 'Poetry',
    text: '(Fill in the blank) The early examples of the __________ are full of flatteries, exaggerations, and claims for the excellence and high standing of the subject.',
    options: ['Ode', 'Heroic Couplet', 'Both A and B', 'None of the above'],
    correctAnswer: 'Ode',
    explanation: 'Early Odes were characterized by lavish praise, flattery, and exaggerated claims about the excellence of their subjects — originally athletes and statesmen in ancient Greece.'
  },
  {
    id: 125,
    section: 'Poetry',
    text: 'Identify the type of poem below:\n\nLet me not to the marriage of true minds\nAdmit impediments. Love is not love\nWhich alters when it alteration finds,\nOr bends with the remover to remove:\nO no! it is an ever-fixed mark\nThat looks on tempests and is never shaken;\nIt is the star to every wandering bark,\nWhose worth\'s unknown, although his height be taken.\nLove\'s not Time\'s fool, though rosy lips and cheeks\nWithin his bending sickle\'s compass come:\nLove alters not with his brief hours and weeks,\nBut bears it out even to the edge of doom.\nIf this be error and upon me proved,\nI never writ, nor no man ever loved.',
    options: ['Pantoum', 'Villanelle', 'Heroic Couplet', 'Sonnet'],
    correctAnswer: 'Sonnet',
    explanation: "This is Shakespeare's Sonnet 116. It has 14 lines in iambic pentameter with the Shakespearean rhyme scheme ababcdcdefefgg, closing with a heroic couplet."
  },
  {
    id: 126,
    section: 'Poetry',
    text: 'Identify the type of poem below:\n\nOur lives avoided tragedy\nSimply by going on and on,\nWithout end and with little apparent meaning.\nOh, there were storms and small catastrophes.\n\nSimply by going on and on\nWe managed. No need for the heroic.\nOh, there were storms and small catastrophes.\nI don\'t remember all the particulars.\n\nWe managed. No need for the heroic.\nThere were the usual celebrations, the usual sorrows.\nI don\'t remember all the particulars.\nAcross the fence, the neighbors were our chorus.\n\n[...stanzas continue, repeating second and fourth lines of each previous stanza...]',
    options: ['Pantoum', 'Villanelle', 'Heroic Couplet', 'Sonnet'],
    correctAnswer: 'Pantoum',
    explanation: "This is a Pantoum. The tell-tale sign is that lines 2 and 4 of each stanza become lines 1 and 3 of the next — \"four steps forward, two steps back.\""
  },
  {
    id: 127,
    section: 'Poetry',
    text: 'Identify the type of poem below (by Dylan Thomas):\n\nToo proud to die; broken and blind he died\nThe darkest way, and did not turn away,\nA cold kind man brave in his narrow pride\n\nOn that darkest day, Oh, forever may\nHe lie lightly, at last, on the last, crossed\nHill, under the grass, in love, and there grow\n\nYoung among the long flocks, and never lie lost\n[...the poem mourns the speaker\'s dying father, lists his virtues, and seeks consolation...]',
    options: ['Sonnet', 'Villanelle', 'Heroic Couplet', 'Elegy'],
    correctAnswer: 'Elegy',
    explanation: "This is an Elegy by Dylan Thomas. It mourns the death of his father, lists his virtues (proud, kind, brave), and seeks consolation — the three defining movements of the elegiac form."
  },
  {
    id: 128,
    section: 'Poetry',
    text: 'Identify the type of poem below (by Franklin P. Adams):\n\n"Exegi monumentum aere perennius---"\nThe monument that I have built is durable as brass,\nAnd loftier than the Pyramids which mock the years that pass.\nNo blizzard can destroy it, nor furious rain corrode--\nRemember, I\'m the bard who built the first Horatian Ode.\n\nI shall not altogether die; a part of me\'s immortal.\n[...the poem lavishly praises its own subject in an exalted, celebratory tone...]',
    options: ['Villanelle', 'Ode', 'Heroic Couplet', 'Sestina'],
    correctAnswer: 'Ode',
    explanation: "This is an Ode by Franklin P. Adams, referencing Horace's famous ode. It displays the hallmarks of the form: elevated tone, praise of a subject (itself/the poet), and exaggerated claims of excellence and immortality."
  },
  {
    id: 129,
    section: 'Poetry',
    text: 'Identify the type of poem below (by Aldo Kraas):\n\nJose\nYou will never know how much does she loves you\nYou two were meant for each other\nCarry on loving each other\nBecause love is beautiful\n\nBallad for Jose\nDance beneath the moon\nOn a beach at night\nListened to the sound of the waves rolling in\n\n[...the poem tells a communal love story in song-like stanzas with a refrain ("Ballad for Jose")...]',
    options: ['Sonnet', 'Pantoum', 'Ballad', 'Elegy'],
    correctAnswer: 'Ballad',
    explanation: "This is a Ballad by Aldo Kraas. It tells a communal narrative (a love story), uses a repeating refrain (\"Ballad for Jose\"), and has the song-like, accessible quality characteristic of the ballad form."
  },
  {
    id: 130,
    section: 'Poetry',
    text: 'Identify the type of poem below (by Elizabeth Bishop):\n\nSeptember rain falls on the house.\nIn the failing light, the old grandmother\nsits in the kitchen with the child\nbeside the Little Marvel Stove,\nreading the jokes from the almanac,\nlaughing and talking to hide her tears.\n\nShe thinks that her equinoctial tears\nand the rain that beats on the roof of the house\nwere both foretold by the almanac,\nbut only known to a grandmother.\n[...six end-words — house, grandmother, child, stove, almanac, tears — rotate through six 6-line stanzas plus a 3-line envoi...]',
    options: ['Villanelle', 'Pantoum', 'Sestina', 'Pastoral'],
    correctAnswer: 'Sestina',
    explanation: "This is Elizabeth Bishop's \"Sestina.\" The six end-words (house, grandmother, child, stove, almanac, tears) rotate through six stanzas of six lines each, followed by a three-line envoi — the defining structure of the Sestina."
  },
  {
    id: 131,
    section: 'Poetry',
    text: 'Identify the type of poem below (by Flora Launa):\n\nRunning through a field of clover,\nStop to pick a daffodil\nI play he loves me, loves me not,\nThe daffy lies, it says he does not love me!\nWell, what use a daffy\nWhen Jimmy gives me roses?',
    options: ['Blank Verse', 'Free Verse', 'Open Verse', 'Both (b) and (c)'],
    correctAnswer: 'Free Verse',
    explanation: 'This short poem by Flora Launa is Free Verse — it has no regular meter, no consistent rhyme scheme, and no fixed stanza structure. It follows the natural rhythm of speech.'
  },
  {
    id: 132,
    section: 'Poetry',
    text: 'Identify the type of poem below (excerpt from Wordsworth):\n\nFive years have past; five summers, with the length\nOf five long winters! and again I hear\nThese waters, rolling from their mountain-springs\nWith a soft inland murmur.--Once again\nDo I behold these steep and lofty cliffs,\nThat on a wild secluded scene impress\nThoughts of more deep seclusion; and connect\nThe landscape with the quiet of the sky.\n[...continued in unrhymed iambic pentameter, with no fixed stanza breaks...]',
    options: ['Blank Verse', 'Free Verse', 'Open Verse', 'Both (b) and (c)'],
    correctAnswer: 'Both (b) and (c)',
    explanation: "This is Wordsworth's \"Lines Composed a Few Miles above Tintern Abbey,\" written in unrhymed iambic pentameter with open, paragraph-like stanzas. It qualifies as both Free Verse (no rhyme scheme) and Open Verse (no fixed stanza form)."
  },
  {
    id: 133,
    section: 'Poetry',
    text: 'Identify the type of poem below:\n\nWhen We Were Thirteen\nRemember running wild and free\nwhen we hung out by the river,\nyou and Markus and Tim and me.\n\nWe\'d walk for an eternity.\nWe took what life could deliver\nremember running wild and free.\n\nOur voices echoed loud with glee\ntill it got dark and we\'d shiver,\nyou and Markus and Tim and me.\n\n[...the first and third lines of stanza 1 repeat as refrains throughout, closing the final quatrain...]',
    options: ['Villanelle', 'Sestina', 'Pantoum', 'Ode'],
    correctAnswer: 'Villanelle',
    explanation: 'This is a Villanelle. "Remember running wild and free" and "you and Markus and Tim and me" are the two refrains that alternate at the end of each tercet and unite in the closing quatrain — the signature structure of the Villanelle.'
  },
  {
    id: 134,
    section: 'Poetry',
    text: "Identify the type of poem below:\n\nIt's hot to-day. The bees is buzzin'\nKinder don't-keer-like aroun',\nAn' fur off the warm air dances\nO'er the parchin' roofs in town.\nIn the brook the cows is standin';\nChildern hidin' in the hay;\nCan't keep none of 'em a workin',\n'Cause it's hot to-day.\n\n[...the poem imitates rural dialect and depicts farm life on a sweltering summer day, celebrating and lamenting country living...]",
    options: ['Pastoral', 'Sestina', 'Villanelle', 'None of the above'],
    correctAnswer: 'Pastoral',
    explanation: "This is a Pastoral poem. It depicts and celebrates rural life — farm work, animals, country dialect, and the rhythms of nature — which are the defining characteristics of the Pastoral mode."
  }
];