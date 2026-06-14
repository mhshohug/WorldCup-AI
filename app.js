function searchFootball() {

    const input = document.getElementById("searchInput").value.trim().toLowerCase();
    const result = document.getElementById("result");

    if (input === "") {
        result.innerHTML = "⚠️ Please enter something.";
        return;
    }

    if (input.includes("today")) {
        result.innerHTML = "🔍 Searching today's football matches...";
    }

    else if (input.includes("next")) {
        result.innerHTML = "🔍 Searching upcoming matches...";
    }

    else if (input.includes("world cup")) {
        result.innerHTML = "🏆 Searching World Cup information...";
    }

    else if (input.includes("vs")) {
        result.innerHTML = "⚽ Comparing teams...";
    }

    else {
        result.innerHTML = "🤖 AI is searching for: <b>" + input + "</b>";
    }

}
