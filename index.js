function geatTeamHTML(team) {
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
  // transforma din json in html
  // var teamsHTML = "";
  // teams.forEach(function (team) {
  //   teamsHTML += geatTeamHTML(team);
  // });

  var teamsHTML = teams.map(function (team) {
    return geatTeamHTML(team);
  });
  console.warn("teamsHTML", teamsHTML);

  //afisare
  document.querySelector("table tbody").innerHTML = teamsHTML.join("");
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

loadTeams();
