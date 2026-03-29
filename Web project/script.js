 function searching() {
            let value = document.getElementById("ui").value;
            if (value === "") {
                alert("Please enter something!");
            } else {
                alert("Searching for: " + value);
            }
        }
        let items = document.querySelectorAll(".two nav");
        for (let i = 0; i < items.length; i++) {
            items[i].onclick = function () {
                this.style.display = "none";
            };
        }