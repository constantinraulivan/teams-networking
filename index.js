function $(selector) {
  return document.querySelector(selector);
}

function getTeamHTML(team) {
  return `  <tr>
  <td>${team.promotion}</td>
  <td>${team.members}</td>
  <td>${team.name}</td>
  <td>
    <a href="${team.url}">open</a>
  </td>
  <td></td>
</tr>`;
}

function displayTeams(teams) {
  var teamsHTML = teams.map(getTeamHTML);
  //afisare
  $("table tbody").innerHTML = teamsHTML.join("");
}

function loadTeams() {
  fetch("data/teams.json")
    .then(function (r) {
      return r.json();
    })
    .then(function (teams) {
      displayTeams(teams);
    });
}

function submitForm(e) {
  var promotion = $("input[name=promotion]").value;
  var members = $("input[name=members]").value;
  var name = $("input[name=name]").value;
  var url = $("input[name=url]").value;

  var team = {
    promotion: promotion,
    members: members,
    name: name,
    url: url,
  };

  console.warn("submit", JSON.stringify(team));
  e.preventDefault();
}

function initEvents() {
  var form = document.getElementById("editForm");
  form.addEventListener("submit", submitForm);
}

loadTeams();
initEvents();
