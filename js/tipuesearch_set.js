
/*
Tipue Search 5.0
Copyright (c) 2015 Tipue
Tipue Search is released under the MIT License
http://www.tipue.com/search
*/


/*
Stop words
Stop words list from http://www.ranks.nl/stopwords
*/

var tipuesearch_stop_words = ["alors", "au", "aucuns", "aussi", "autre", "avant", "avec", "avoir", "bon", "car", "ce", "cela", "ces", "ceux", "chaque", "ci", "comme", "comment", "dans", "des", "du", "dedans", "dehors", "depuis", "devrait", "doit", "donc", "dos", "débu", "telle", "elles", "en", "encore", "essai", "est", "et", "eu", "fait", "faites", "fois", "font", "hors", "ici", "il", "ils", "je", "juste", "la", "le", "les", "leur", "là", "ma", "maintenant", "mais", "mes", "mine", "moins", "mon", "mot", "même", "ni", "nommés", "notre", "nous", "ou", "où", "par", "parce", "pas", "peut", "peu", "plupart", "pour", "pourquoi", "quand", "que", "quel", "quelle", "quelles", "quels", "qui", "sa", "sans", "ses", "seulement", "si", "sien", "son", "sont", "sous", "soyez", "sujet", "sur", "ta", "tandis", "tellement", "tels", "tes", "ton", "tous", "tout", "trop", "très", "tu", "voient", "vont", "votre", "vous", "vu", "ça", "étaient", "état", "étions", "été", "être"];

/*
var tipuesearch_stop_words = ["a", "about", "above", "after", "again", "against", "all", "am", "an", "and", "any", "are", "aren't", "as", "at", "be", "because", "been", "before", "being", "below", "between", "both", "but", "by", "can't", "cannot", "could", "couldn't", "did", "didn't", "do", "does", "doesn't", "doing", "don't", "down", "during", "each", "few", "for", "from", "further", "had", "hadn't", "has", "hasn't", "have", "haven't", "having", "he", "he'd", "he'll", "he's", "her", "here", "here's", "hers", "herself", "him", "himself", "his", "how", "how's", "i", "i'd", "i'll", "i'm", "i've", "if", "in", "into", "is", "isn't", "it", "it's", "its", "itself", "let's", "me", "more", "most", "mustn't", "my", "myself", "no", "nor", "not", "of", "off", "on", "once", "only", "or", "other", "ought", "our", "ours", "ourselves", "out", "over", "own", "same", "shan't", "she", "she'd", "she'll", "she's", "should", "shouldn't", "so", "some", "such", "than", "that", "that's", "the", "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "those", "through", "to", "too", "under", "until", "up", "very", "was", "wasn't", "we", "we'd", "we'll", "we're", "we've", "were", "weren't", "what", "what's", "when", "when's", "where", "where's", "which", "while", "who", "who's", "whom", "why", "why's", "with", "won't", "would", "wouldn't", "you", "you'd", "you'll", "you're", "you've", "your", "yours", "yourself", "yourselves"];
*/

// Word replace

var tipuesearch_replace = {'words': [
     {'word': 'tipua', 'replace_with': 'tipue'},
     {'word': 'javscript', 'replace_with': 'javascript'},
     {'word': 'jqeury', 'replace_with': 'jquery'}
]};


// Weighting
/*
var tipuesearch_weight = {'weight': [
     {'url': 'http://www.tipue.com', 'score': 200},
     {'url': 'http://www.tipue.com/search', 'score': 100},
     {'url': 'http://www.tipue.com/about', 'score': 100}
]};
*/

// Stemming

var tipuesearch_stem = {'words': [
     {'word': 'e-mail', 'stem': 'email'},
     {'word': 'javascript', 'stem': 'jquery'},
     {'word': 'javascript', 'stem': 'js'},
]};


// Internal strings

var tipuesearch_string_1 = 'Pas de titre';//'No title';
var tipuesearch_string_2 = 'Montrer les résultats pour';//'Showing results for';
var tipuesearch_string_3 = 'Chercher plutôt';//'Search instead for';
var tipuesearch_string_4 = '1 résultat';//'1 result';
var tipuesearch_string_5 = 'Résultats';//'results';
var tipuesearch_string_6 = 'Précédent';//'Prev';
var tipuesearch_string_7 = 'Suivant';//'Next';
var tipuesearch_string_8 = 'Aucun résultat';//'Nothing found';
var tipuesearch_string_9 = 'Les mots courants sont ignorés dans la recherche';//'Common words are largely ignored';
var tipuesearch_string_10 = 'Recherche trop courte';//'Search too short';
var tipuesearch_string_11 = 'Il devrait y avoir plusieurs caractères';//'Should be one character or more';
var tipuesearch_string_12 = 'Il devrait y avoir';//'Should be';
var tipuesearch_string_13 = 'plusieurs caractères';//'characters or more';
