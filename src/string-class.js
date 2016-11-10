'use strict';

const stringManipulations = {
  /**
   * hasVowels method test if a string contains vowels
   * @return {boolean} true if there are vowels and false otherwise
   */
  hasVowels() {
    return /[aeiou]/i.test(this);
  },

  /**
   * toupper method converts all characters to their upper case
   * @return {string}, a string with upper case characters
   */
  toUpper() {
    return this.replace(/[a-z]/g, (found) => {
      //makes use of ascii code
      return String.fromCharCode(found.charCodeAt(0) - 32);
    });
  },

  /**
   * toLower method converts all characters to their lower case
   * @return {string}, a string with lower case characters
   */
  toLower() {
    return this.replace(/[A-Z]/g, (found) => {
      //makes use of ascii code
      return String.fromCharCode(found.charCodeAt(0) + 32);
    });
  },

  /**
   * ucFirst method converts the first character to upper case
   * @return {string}, a string with it's initial character in upper case'
   */
  ucFirst() {
    return this.replace(this.charAt(0), this.charAt(0).toUpper());
  },

  /**
   * isQuestion method checks if a string is a question by
   * checking if the last character is a question mark ?
   * @return {boolean}; true if the string is a question and false otherwise
   */
  isQuestion() {
    return /\?$/.test(this.trimSpace());
  },

  /**
   * trimSpace method removes the trailing and preceeding empty 
   * spaces in a string
   * @return {string}; trimmed string
   */
  trimSpace() {
    return this.replace(/^\s+|\s+$/g, '');
  },

  /**
   * words method gets all the words in a string
   * @return {array}; an array of words in the string
   */
  words() {
    const newValue = this.trimSpace().removeSpecialChars();
    if(newValue === '') {
      return [];
    }
    return newValue.split(/\s+/);
  },

  /**
   * removeSpecialChars method is used to replace non-alphanumeric characters
   * including _ that are alone and replaces it with empty space
   * @return {string}
   */
  removeSpecialChars() {
    return this.replace(/[^\w\s]|_/g, '');
  },


  /**
   * wordCount method counts the number of words in a string
   * @return {int}: number of words
   */
  wordCount() {
    return this.words().length;
  },

  /**
   * toCurrency method formats a number by putting commas in the right place
   * @return {string}: string representing the currency format
   */
  toCurrency() {
    const parts = this.split(/[.]/g),
      length = parts[0].length;
    const firstCommaPos = (length % 3 === 0) ? 3 : length % 3;
    const re = new RegExp('^[0-9]{'+firstCommaPos+'}|[0-9]{3}', 'g');
    parts[0] = parts[0].replace(re, (number) => {
      return `${number},`;
    })
    .replace(/,$/, '');
    
    if(parts[1]) {
      return parts[0]+'.'+parts[1];
    }
    return parts[0];
  },

  /**
   * fromCurrency format converts a string in the currency format by
   * removing commas
   * @return {string}: representing the pure digit format
   */
  fromCurrency() {
    return this.replace(/,+/g, '');
  },

  /**
   * inverseCase inverts the case of a character, a lower case character
   * becomes upper case
   * @return {string}: a string with inverted case
   */
  inverseCase() {
    return this.replace(/[a-zA-Z]/g, (match) => {
      return /[A-Z]/.test(match) ? match.toLower() : match.toUpper();
    });
  },

  /**
   * alternatingCase method alternates the case of the character in a string
   * @return {string}; with alternated cases e.g aNoNyMoUs
   */
  alternatingCase() {
    return this.replace(/[A-Za-z]/g, (match, index) => {
      return (index % 2 === 0) ? match.toLower() : match.toUpper();
    });
  },

  /**
   * getMiddle method returns the character or the two characters at the mid
   * position in a string
   * @return {string}; of the middle character or two characters in the string
   */
  getMiddle() {
    const length = this.length;
    if(length % 2 === 0) {
      return this[(length / 2) - 1] + this[length / 2];
    }
    return this[parseInt(length / 2)];
  },

  /**
    * numberWords returns the word equivalent for the digits
    * @return {string}; word equivalent for every digit
    */
  numberWords() {
    const digitInWords = {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine'
    };
    return this.replace(/\d/g, (match, index) => {
      if(index === 0) {
        return digitInWords[match];
      }
      return ` ${digitInWords[match]}`;
    });
  },

  /**
   * isDigit method returns true if the string is just
   * a single digit
   * @return {boolean}
   */
  isDigit() {
    return /^\d$/g.test(this);
  },

  /**
   * doubleCheck method returns true if the same 
   * character follows each other  and false otherwise
   * @return {boolean}
   */
  doubleCheck() {
    return /(.)\1/.test(this);
  },
};

Object.assign(String.prototype, stringManipulations);
