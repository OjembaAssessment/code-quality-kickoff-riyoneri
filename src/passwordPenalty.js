/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (!password) return 0;
  if (typeof password !== "string") password = String(password);

  return password.split("").reduce((occurences, letter, index) => {
    if (password.slice(0, index).includes(letter)) return occurences;
    const regex = new RegExp(`${letter}${letter}+`, "g");
    const results = password.match(regex);
    if (results) {
      results.map((result) =>
        result.length % 2 === 0
          ? (occurences += result.length / 2)
          : (occurences += result.length - 1)
      );
    }
    return occurences;
  }, 0);
}
