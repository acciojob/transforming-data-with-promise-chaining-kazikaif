//your JS code here. If required.
document.getElementById("btn").addEventListener("click", function () {
  const input = document.getElementById("ip").value;
  const output = document.getElementById("output");

  if (!input || isNaN(input)) {
    output.innerHTML = "<p class='text-danger'>Please enter a valid number.</p>";
    return;
  }

  let number = parseFloat(input);
  output.innerHTML = ""; // Clear previous results

  new Promise((resolve) => {
    setTimeout(() => {
      output.innerHTML += `<p>Result: ${number}</p>`;
      resolve(number);
    }, 2000);
  })
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          num *= 2;
          output.innerHTML += `<p>Result: ${num}</p>`;
          resolve(num);
        }, 2000);
      });
    })
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          num -= 3;
          output.innerHTML += `<p>Result: ${num}</p>`;
          resolve(num);
        }, 1000);
      });
    })
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          num /= 2;
          output.innerHTML += `<p>Result: ${num}</p>`;
          resolve(num);
        }, 1000);
      });
    })
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          num += 10;
          output.innerHTML += `<p><strong>Final Result: ${num}</strong></p>`;
          resolve(num);
        }, 1000);
      });
    });
});
