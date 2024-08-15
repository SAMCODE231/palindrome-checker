document.getElementById("check-btn").addEventListener("click", function() {
    let input = document.getElementById("text-input").value;

    if (input === "") {
        alert("Please input a value");
    } else {
        let result = document.getElementById("result");
        if (isPalindrome(input)) {
            result.textContent = `${input} is a palindrome`;
        } else {
            result.textContent = `${input} is not a palindrome`;
        }
    }
});

function isPalindrome(str) {
    let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
}
